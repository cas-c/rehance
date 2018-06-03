import { configure } from '@storybook/react';

import 'bulma/css/bulma.css';
import '../src/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
