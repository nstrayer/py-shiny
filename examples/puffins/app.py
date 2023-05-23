# TODO-future: Add filter of X varaible to reduce the data? (Here we would show "Gentoo" has count 0, rather than remove if no data exists)
# TODO-future: Add brushing to zoom into the plot. The counts should represent the data in the zoomed area. (Single click would zoom out)

from pathlib import Path
from typing import List

import pandas as pd
import seaborn as sns
import shinyswatch
from colors import bg_palette, palette
from htmltools import Tag

import shiny.experimental as x
import shiny.experimental.concept as c
from shiny import App, Inputs, Outputs, Session, reactive, render, req, ui

sns.set_theme()

www_dir = Path(__file__).parent.resolve() / "www"

df = pd.read_csv(Path(__file__).parent / "penguins.csv", na_values="NA")
numeric_cols: List[str] = df.select_dtypes(include=["float64"]).columns.tolist()
species: List[str] = df["Species"].unique().tolist()
species.sort()

app_theme = {
    "style": """
    --accent-gradient: linear-gradient(
      37deg in oklab,
      oklch(55% .45 350) 0%, oklch(100% .4 95) 115% 115%
    );
    """
}

app_ui = c.page(
    ui.head_content(
        ui.tags.style(
            ":not(:defined) { opacity: 0.1;}"
        )
    ),
    shinyswatch.theme.pulse(),
    c.tabset(
        c.tab(
            Tag("star-rating"),
            Tag(
                "shiny-collapsible",
                ui.output_ui("value_boxes"),
                dir="to_top",
                label="Fun Facts",
            ),
            x.ui.output_plot("scatter", fill=True),
            name="Plot",
        ),
        c.tab(
            Tag("shiny-collapsible", "To Top", dir="to_top", label="My Collapser"),
            Tag("shiny-collapsible", "To Right", dir="to_right"),
            Tag("shiny-collapsible", "To Bottom", dir="to_bottom"),
            Tag("shiny-collapsible", "To Left", dir="to_left"),
            name="Collapser"
        ),
        c.sidebar(
            # Artwork by @allison_horst
            ui.tags.img(
                src="palmerpenguins.png", width="80%", class_="mt-0 mb-2 mx-auto"
            ),
            ui.input_selectize(
                "xvar",
                "X variable",
                numeric_cols,
                selected="Bill Length (mm)",
            ),
            ui.input_selectize(
                "yvar",
                "Y variable",
                numeric_cols,
                selected="Bill Depth (mm)",
            ),
            ui.input_checkbox_group(
                "species", "Filter by species", species, selected=species
            ),
            ui.hr(),
            ui.input_switch("by_species", "Show species", value=True),
            ui.input_switch("show_margins", "Show marginal plots", value=True),
        ),
        # c.sidebar(
        #     ui.tags.h1("I'm another sidebar!"),
        # ),
        Tag("shiny-footer", ui.tags.span("Experimental Shiny")),
        ui.tags.div(
            "Puffins are cool",
            {"slot": "header"}
        )
    ),
    app_theme,
)


def server(input: Inputs, output: Outputs, session: Session):
    @reactive.Calc
    def filtered_df() -> pd.DataFrame:
        """Returns a Pandas data frame that includes only the desired rows"""

        # This calculation "req"uires that at least one species is selected
        req(len(input.species()) > 0)

        # Filter the rows so we only include the desired species
        return df[df["Species"].isin(input.species())]

    @output
    @render.plot
    def scatter():
        """Generates a plot for Shiny to display to the user"""

        # The plotting function to use depends on whether margins are desired
        plotfunc = sns.jointplot if input.show_margins() else sns.scatterplot

        plotfunc(
            data=filtered_df(),
            x=input.xvar(),
            y=input.yvar(),
            palette=palette,
            hue="Species" if input.by_species() else None,
            hue_order=species,
            legend=False,
        )

    @output
    @render.ui
    def value_boxes():
        df = filtered_df()

        def penguin_value_box(title: str, count: int, bgcol: str, showcase_img: str):
            return x.ui.value_box(
                title,
                count,
                {"class_": "pt-1 pb-0"},
                showcase=x.ui.bind_fill_role(
                    ui.tags.img({"style": "object-fit:contain;"}, src=showcase_img),
                    item=True,
                ),
                theme_color=None,
                style=f"background-color: {bgcol};",
                height="90px",
                full_screen=True,
            )

        if not input.by_species():
            return penguin_value_box(
                "Penguins",
                len(df.index),
                bg_palette["default"],
                # Artwork by @allison_horst
                showcase_img="penguins.png",
            )

        value_boxes = [
            penguin_value_box(
                name,
                len(df[df["Species"] == name]),
                bg_palette[name],
                # Artwork by @allison_horst
                showcase_img=f"{name}.png",
            )
            for name in species
            # Only include boxes for _selected_ species
            if name in input.species()
        ]

        return x.ui.layout_column_wrap(1 / len(value_boxes), *value_boxes)


app = App(
    app_ui,
    server,
    static_assets=str(www_dir),
)
