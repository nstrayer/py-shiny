import json

from htmltools import HTML, Tag, TagAttrs, TagAttrValue, TagChild, html_escape


def greeting_card(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <greeting-card> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("greeting-card", *args, _add_ws=_add_ws, **kwargs)


def tabset(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tabset> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-tabset", *args, _add_ws=_add_ws, **kwargs)


def tab(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-tab> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    return Tag("shiny-tab", *args, _add_ws=_add_ws, **kwargs)


def sidebar(
    *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: TagAttrValue
) -> Tag:
    """
    Create a <shiny-sidebar> tag.

    An experimental web-component for creating greeting cards.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """
    return Tag("shiny-sidebar", *args, _add_ws=_add_ws, **kwargs)


def mui_slider(
    id: str, *args: TagChild | TagAttrs, _add_ws: bool = True, **kwargs: object
) -> Tag:
    """
    Create a <mui-slider> tag.

    An experimental web-component for creating sliders.

    Parameters
    ----------
    *args
        Child elements to this tag.
    _add_ws
        Whether whitespace should be added around this tag.
    **kwargs
        Attributes to this tag.

    Returns
    -------
    Tag

    See Also
    --------
    ~htmltools.Tag
    """

    for k, v in kwargs.items():
        kwargs[k] = attr_to_escaped_json(v)

    return Tag("mui-slider", *args, id=id, _add_ws=_add_ws, **kwargs)


def attr_to_escaped_json(x: object) -> str:
    res = json.dumps(x)
    res = html_escape(res, attr=True)
    return HTML(res)
