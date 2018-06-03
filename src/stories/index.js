import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

import MiniProfiles from './../components/ProfilePage/MiniProfiles';
import MiniProfilesColumn from './../components/ProfilePage/MiniProfiles/MiniProfilesColumn';
import MiniProfileList from './../components/ProfilePage/MiniProfiles/MiniProfileList';
import MiniProfile from './../components/ProfilePage/MiniProfiles/MiniProfile';
const mockUsers = [{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' },{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' }];

storiesOf('MiniProfiles (MiniProfilesWrapper)', module)
  .add('Example (no data)', () => <MiniProfiles />)
  .add('Example (data)', () => <MiniProfiles following={mockUsers} followers={mockUsers} />);

storiesOf('MiniProfilesColumn', module)
  .add('with no input', () => <MiniProfilesColumn />)
  .add('with input', () => <MiniProfilesColumn data={mockUsers} />);

storiesOf('MiniProfileList', module)
  .add('with no input', () => <MiniProfileList />)
  .add('with input', () => <MiniProfileList users={mockUsers}/>);

storiesOf('MiniProfile', module)
  .add('with no input', () => <MiniProfile />)
  .add('with input', () => <MiniProfile user={{ images: { 115: 'http://via.placeholder.com/115x115' }, username: 'testuser', display_name: 'Test User' }}/>);

