import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Project from './Project';

const mockProject = {
    url: 'Mock URL',
    name: 'Test Project Name',
    covers: {
        original: 'Original cover URL'
    }
}

describe('Project', () => {
    it('snapshot: should render correctly', () => {
        const output = shallow(<Project data={mockProject} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should not error out without input', () => {
        const output = shallow(<Project />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('unit: should only display cover art if cover info exists', () => {
        const mounted = mount(<Project data={mockProject} />);
        expect(mounted.containsMatchingElement(<img className='project-cover-img' src='Original cover URL' alt='Test Project Name' />));
        mounted.unmount();
    })
});
