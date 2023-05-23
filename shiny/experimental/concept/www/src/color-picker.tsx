import { LitElement } from "lit";
import { createRoot } from 'react-dom/client';
import React from 'react';
import { SketchPicker } from 'react-color';

export class ColorPicker extends LitElement {
  static properties = {
  };


  constructor() {
    super();
  }

  render() {
    const root = createRoot(this.shadowRoot!);
    root.render(<SketchPicker />);
  }
}

customElements.define("color-picker", ColorPicker);
