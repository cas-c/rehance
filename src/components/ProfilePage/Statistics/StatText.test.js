import React from 'react';
import ReactDOM from 'react-dom';
import StatText from './StatText';


it('renders without crashing when no children or props are supplied', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatText />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const testLabel = 'hello';
const testString = 'Test string.';

it('renders with props and children', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StatText label={testLabel}>{testString}</StatText>, div);
    expect(div.children[0].children[0].innerHTML).toBe(` ${testLabel}: `);
    expect(div.children[0].children[1].innerHTML).toBe(testString);
})
