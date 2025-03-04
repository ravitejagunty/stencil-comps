import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() label: string = 'Click Me';
  @Prop() variant: 'primary' | 'secondary' = 'primary';

  render() {
    return (
      <button className={this.variant}>
        {this.label}
      </button>
    );
  }
}
