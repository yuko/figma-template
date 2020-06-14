import { css, customElement, LitElement, html} from 'lit-element';

@customElement('plugin-app')
export class PluginApp extends LitElement {

  static getStyles() {
    return css`
      button {
        border-radius: 5px;
        background: white;
        color: black;
        border: none;
        padding: 8px 15px;
        margin: 0 5px;
        box-shadow: inset 0 0 0 1px black;
        outline: none;
      }

      button:focus {
        box-shadow: inset 0 0 0 2px #18A0FB;
      }
    `;
  }

  createRectangles() {
    const count = 3;
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  render() {
    return html`
        <h2>Rectangle Creator</h2>
        <button @click=${this.createRectangles}>Create</button>
    `;
  }
}
