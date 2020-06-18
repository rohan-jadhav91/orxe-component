import {LitElement, customElement, html, property} from 'lit-element';

@customElement('orxe-counter')
export class OrxeCounter extends LitElement {
  @property({type: Number})
  min = 0;

  @property({type: Number})
  max=0;

  @property({type: Number})
  value = 0;

  @property({type: Number})
  step = 1;

  
  constructor() {
      super();
      this.value = this.min;
  }
  render() {
    return html`
      <div>
        <button @click="${this.decreaseButtonClicked}" ?disabled=${this.min === this.value}>-</button>
        <label>  ${this.value}  </label>
        <button @click="${this.increaseButtonClicked}" ?disabled=${this.max === this.value}>+</button>
      </div>
    `;
  }

  firstUpdated() {
    this.step = this.step < 0 ? 1 : this.step;
    this.min = this.min < 0 ? 0 : this.min;
    this.max = this.max < 0 ? Infinity : this.max;
    this.value =this.value < this.min || this.value > this.max ? this.min : this.value;
  }

  decreaseButtonClicked() {
    const updatedValue = this.value - this.step;
    this.value = updatedValue >= this.min ? updatedValue : this.value;
  }

  increaseButtonClicked() {
    const updatedValue = this.value + this.step;
    this.value = updatedValue <= this.max ? updatedValue : this.value;
  }
}
