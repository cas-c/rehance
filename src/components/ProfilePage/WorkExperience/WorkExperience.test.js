import React from 'react';
import ReactDOM from 'react-dom';
import WorkExperience from './index.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkExperience />, div);
  ReactDOM.unmountComponentAtNode(div);
});
