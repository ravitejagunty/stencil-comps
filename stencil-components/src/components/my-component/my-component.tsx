import { Component, Prop } from '@stencil/core';
// import React from 'react';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() name: string;

  render() {
    return <div>Hello, {this.name}!</div>; // ✅ JSX works correctly
  }
}