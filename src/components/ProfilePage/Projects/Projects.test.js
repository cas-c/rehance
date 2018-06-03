import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Projects from './index';

const mockProjects = [{
    url: 'Mock URL',
    name: 'Test Project Name',
    covers: {
        original: 'Original cover URL'
    }
}];

describe('Projects', () => {
    it('snapshot: should render correctly', () => {
        const output = shallow(<Projects projects={mockProjects} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    //todo: Test the background image switching function in componentDidUpdate
});
