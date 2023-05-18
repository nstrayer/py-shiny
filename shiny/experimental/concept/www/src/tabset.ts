import { LitElement, html, css } from "lit";

export class Tabset extends LitElement {
  greeting: string;
  planet: string;

  static properties = {
    greeting: {},
    planet: {},
  };

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      padding: var(--size-md, 12px);
      font-family: var(--font-family, sans-serif);
    }

    .tabset {
      background-color: var(--bg-color, lightgrey);
      outline: 1px solid var(--border-color, black);
    }
  `;

  constructor() {
    super();
    // Define reactive properties--updating a reactive property causes
    // the component to update.
    this.greeting = "Hello";
    this.planet = "World";
  }

  // The render() method is called any time reactive properties change.
  // Return HTML in a string template literal tagged with the `html`
  // tag function to describe the component's internal DOM.
  // Expressions can set attribute values, property values, event handlers,
  // and child nodes/text.
  render() {
    return html`
      <div class="tabset">
        <h2>Tabset</h2>
        <div>
          Contents to go here
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("shiny-tabset", Tabset);
