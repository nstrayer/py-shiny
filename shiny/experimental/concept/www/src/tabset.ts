import { LitElement, html, css } from "lit";

export class Tabset extends LitElement {
  static properties = {};

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
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

    .tabset > * {
      min-width: 0;
    }

    ::slotted(*) {
      padding: var(--size-fluid-2);
    }

    ::slotted(.header),
    ::slotted(.footer) {
      background-image: var(--accent-gradient, var(--gradient-7));
      color: var(--stone-1);
      padding-block: var(--size-fluid-1);
    }

    ::slotted(.header) {
      grid-area: header;
      width: 100%;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-fluid-1);
      margin: 0;
    }

    ::slotted(.sidebar) {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--sidebar-bg-color, var(--stone-1));
      color: var(--sidebar-color, var(--stone-7));
    }

    ::slotted(.main) {
      grid-area: content;
      padding: var(--size-fluid-3);
    }

    ::slotted(.footer) {
      grid-area: footer;
    }
  `;

  constructor() {
    super();
  }

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <div class="tabset">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("shiny-tabset", Tabset);
