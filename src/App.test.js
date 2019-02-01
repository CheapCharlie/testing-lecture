import React from 'react';
import {render} from 'react-testing-library'
import App from './App';
import'jest-dom/extend-expect'

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  render(<App/>)
});

// describe('The App Component', () => {    /** This will contain a lot of methods */
//   it('contains an anchor', () => {       /** When We console log the component out */
//     const component = render (<App/>);
//     console.log(component);
//     const anchor = component.getByText(/learn react/i); 
//     /** Regex Used Here The /i says we don't care about case */
//     expect(anchor.innerHTML).toBe('Learn React');
//   })
// })

describe('The App Component', () => {    /** This will contain a lot of methods */
  it('contains an anchor', () => {       /** When We console log the component out */
    const component = render(<App />);
    console.log(component);
    const anchor = component.getByText(/learn react/i);
    /** Regex Used Here The /i says we don't care about case */
    expect(anchor).toHaveTextContent(/learn React/i); /* Refactors The Above */
  })
})

describe('The Logo', () => {
it('contains a className',() => {
const component = render(<App/>);
console.log(component);
const logo = component.getByAltText(/logo/i);
expect (logo.alt).toMatch(/logo/i);
})
})

/** NOTES!! */

/**
 * Arrange / Act/ Assert 
 */

 /**
  * Setup Add Library yarn add react-testing-library --dev
  * add "verbose" to the scripts in package JSON
  */

  /* Second Library We Are Adding Is yarn add jest-dom --dev */