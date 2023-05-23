import { LitElement, html, css } from "lit";

type TabElements = { name: string; el: HTMLElement }[];
export class Tabset extends LitElement {
  tabs: TabElements = [];
  selected_tab_index: number;
  static properties = {
    tabs: {},
    selected_tab_index: {},
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
      height: 100%;
    }

    .tabset {
      height: 100%;
      width: 100%;
      outline: 1px solid var(--border-color, black);
      border-radius: var(--radius-2);
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
    }

    .tab {
      margin-inline: var(--size-1);
      padding: var(--size-1);
      cursor: pointer;
      position: relative;
    }

    .selected-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--size-1);
      right: var(--size-1);
      height: var(--border-size-3);
      border-radius: var(--radius-1);
      background-color: currentColor;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .header,
    .footer {
      background-image: var(--accent-gradient, var(--gradient-7));
      color: var(--stone-1);
    }

    .header {
      grid-area: header;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-fluid-1);
      padding-block: var(--size-fluid-1);
      margin: 0;
    }

    .header,
    .footer {
      margin: 0;
      padding-inline: var(--size-fluid-2);
      display: flex;
      gap: var(--size-3);
    }

    .divider {
      background-color: var(--border-color, black);
      width: var(--border-size-1);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--sidebar-bg-color, var(--stone-1));
      color: var(--sidebar-color, var(--stone-7));
    }

    .main {
      grid-area: content;
      padding: var(--size-fluid-3);
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--size-fluid-1);
    }
  `;

  constructor() {
    super();
    this.selected_tab_index = 0;
  }

  handleSlotchange(e: Event) {
    const slot = e.target as HTMLSlotElement | null;

    if (!slot) return;

    const nodes_in_slot = slot.assignedNodes({ flatten: true });

    this.tabs = nodes_in_slot.reduce<TabElements>((all, node) => {
      if (
        node instanceof HTMLElement &&
        node.tagName.toLowerCase() === "shiny-tab"
      ) {
        const tab_name = node.attributes.getNamedItem("name")?.value;

        if (!tab_name) {
          return all;
        }

        all.push({ name: tab_name, el: node });
      }

      return all;
    }, []);

    this.select_tab();
  }

  select_tab(tab_index: number = this.selected_tab_index) {
    this.selected_tab_index = tab_index;
    this.tabs.forEach((tab, i) => {
      const is_selected = i === tab_index;
      tab.el.style.display = is_selected ? "block" : "none";
      // Make sure that screen readers know to not include the hidden tabs
      tab.el.inert = !is_selected;
    });
  }

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="divider"></div>
          <div class="tabs">
            ${this.tabs.map(
              (tab, i) =>
                html`<span
                  class="tab ${i === this.selected_tab_index
                    ? "selected-tab"
                    : ""}"
                  @click=${() => this.select_tab(i)}
                  >${tab.name}</span
                >`
            )}
          </div>
        </div>
        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

function node_is_tab(node: Node): boolean {
  return node instanceof HTMLElement && "shiny-tab" in node.dataset;
}
