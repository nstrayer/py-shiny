import { LitElement, css, html } from "lit";

export class StarRating extends LitElement {
  static properties = {
    rating: {},
  };

  rating: number;
  onChangeCallback: (x: boolean) => void;

  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  static styles = css`
    :host {
      display: block;
      position: relative;
      background-color: var(--blue-3);
      width: 200px;
      height: 100px;
      display: grid;
      place-content: center;
    }
  `;

  constructor() {
    super();
    this.rating = 0;
    this.onChangeCallback = (x: boolean) => { };
  }

  add_rating() {
    this.rating += 1;
    this.onChangeCallback(true);
  }

  remove_rating() {
    this.rating -= 1;
    this.onChangeCallback(true);
  }

  render() {
    return html`
      <div>
        <button class="thumb_down" @click=${this.remove_rating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
            />
          </svg>
        </button>
        <span class="rating">${this.rating}</span>
        <button class="thumb_up" @click=${this.add_rating}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
            />
          </svg>
        </button>
      </div>
    `;
  }
}



const Shiny = window.Shiny as Shiny;

export class StarRatingInputBinding extends Shiny.InputBinding {
  constructor() {
    super();
  }

  find(scope: HTMLElement): JQuery<HTMLElement> {
    return $(scope).find("star-rating");
  }

  getId(el: HTMLElement): string {
    return el.id;
  }

  getValue(el: HTMLElement) {
    return (el as StarRating).rating;
  }

  subscribe(el: StarRating, callback: (x: boolean) => void): void {
    el.onChangeCallback = callback;
  }

  unsubscribe(el: StarRating): void {
    el.onChangeCallback = (x: boolean) => { };
  }
}


Shiny.inputBindings.register(new StarRatingInputBinding(), "StarRatingInputBinding");
