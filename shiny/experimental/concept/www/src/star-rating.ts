import { LitElement, css, html } from "lit";

export class StarRating extends LitElement {
  low: number = 0;
  high: number = 10;
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
      display: flex;
      align-items: center;
      padding: var(--size-2);
      gap: var(--size-2);
      font-size: var(--font-size-6);
    }

    .rating {
      text-align: center;
      user-select: none;
    }

    button {
      font-size: var(--font-size-6);
      border: none;
    }

    button.disabled {
      background-color: var(--gray-3);
      opacity: 0.5;
      cursor: not-allowed;
    }

    .thumb_down {
      background-color: var(--red-3);
      border-radius: var(--radius-blob-1);
    }
    .thumb_up {
      background-color: var(--blue-3);
      border-radius: var(--radius-blob-2);
    }
  `;

  constructor() {
    super();
    this.rating = (this.low + this.high) / 2;
    this.onChangeCallback = (x: boolean) => {};
  }

  update_rating(delta: number) {
    this.rating = Math.max(Math.min(this.rating + delta, this.high), this.low);
    // Tell the output binding we've changed
    this.onChangeCallback(true);
  }

  render() {
    const at_max = this.rating === this.high;
    const at_min = this.rating === this.low;

    return html`
      <button
        class="thumb_down ${at_min ? "disabled" : ""}"
        @click=${() => this.update_rating(-1)}
      >
        ➖
      </button>
      ${at_max
        ? html`<div class="rating">🤩</div>`
        : at_min
        ? html`<div class="rating">😫</div>`
        : html`
            <div
              class="rating"
              style="rotate:${(this.rating / (this.high - this.low)) * 180}deg"
              title="Rating of ${this.rating}"
            >
              👎
            </div>
          `}
      <button
        class="thumb_up ${at_max ? "disabled" : ""}"
        @click=${() => this.update_rating(1)}
      >
        ➕
      </button>
    `;
  }
}

customElements.define("star-rating", StarRating);


const Shiny = window.Shiny as Shiny;

export class StarRatingInputBinding extends Shiny.InputBinding {
  constructor() {
    super();
  }

  find(scope: HTMLElement): JQuery<HTMLElement> {
    return $(scope).find("star-rating");
  }

  getId(el: StarRating): string {
    return el.id;
  }

  getValue(el: StarRating) {
    return el.rating;
  }

  subscribe(el: StarRating, callback: (x: boolean) => void): void {
    el.onChangeCallback = callback;
  }

  unsubscribe(el: StarRating): void {
    el.onChangeCallback = (x: boolean) => {};
  }
}

Shiny.inputBindings.register(
  new StarRatingInputBinding(),
  "StarRatingInputBinding"
);
