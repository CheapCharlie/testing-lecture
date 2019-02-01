import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Items from './items.js';

it('renders without crashing', () => {
  render(<Items />)
});
/* Test Function To Make Sure Items Is Rendering */

describe('displays the title', () => {
  it('displays the title', () => {
    const component = render(<Items />);
    const title = component.getByTestId('title')
    expect(title).toHaveTextContent(/items/i)
  })
});

test('displays the first item', () => {
  const component = render(<Items />);
  const item = component.getByTestId('item');
  const score = component.getByTestId('enhancement');
  expect(item).toHaveTextContent(/longsword/i);
  expect(score).toHaveTextContent('4');
})

test('enhancement button increases score', () => {
  const component = render(<Items />);
  const button = component.getByText(/enhance/i);
  fireEvent.click(button);
  const score = component.getByTestId('enhancement');
  /* This order of score is important here, since we don't want it to come until after click */
  expect(score).toHaveTextContent('5')
})