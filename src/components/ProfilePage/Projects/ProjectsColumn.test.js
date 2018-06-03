import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ProjectsColumn from './ProjectsColumn';
import Project from './Project';

const mockProjects = [
    {
        url: 'Mock URL',
        name: 'Test Project Name',
        covers: {
            original: 'Original cover URL'
        }
    },
    {
        url: 'Mock URL 2',
        name: 'Test Project Name 2',
        covers: {
            original: 'Original cover URL 2'
        }
    }
];

const mockProjectsOverFive = [{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }},{ url: 'Mock Url', name: 'Test Project Name', covers: { original: 'Original Cover URL' }}];

describe('ProjectsColumn', () => {
    it('snapshot: should render correctly', () => {
        const output = shallow(<ProjectsColumn projects={mockProjects} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should not error out without input', () => {
        const output = shallow(<ProjectsColumn />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('unit: displays a "View all..." link only if there are more than five users', () => {
        const mounted = mount(<ProjectsColumn projects={mockProjectsOverFive} />);
        expect(mounted.containsMatchingElement(<a>View all...</a>)).toBe(true);
        mounted.unmount();
        const mountedLessThan = mount(<ProjectsColumn projects={mockProjects} />);
        expect(mountedLessThan.containsMatchingElement(<a>View all...</a>)).toBe(false);
        mountedLessThan.unmount();
    });
    it('unit: displays a placeholder if no projects are found', () => {
        const mounted = mount(<ProjectsColumn projects={[]} />);
        expect(mounted.containsMatchingElement(<div className='has-text-centered'> This user does not have any projects. </div>)).toBe(true);
        mounted.unmount();
        const mounted2 = mount(<ProjectsColumn />);
        expect(mounted2.containsMatchingElement(<div className='has-text-centered'> This user does not have any projects. </div>)).toBe(true);
        mounted2.unmount();
        const mounted3 = mount(<ProjectsColumn projects={mockProjects} />);
        expect(mounted3.containsMatchingElement(<div className='has-text-centered'> This user does not have any projects. </div>)).toBe(false);
        mounted3.unmount();
    });
    it('unit: only displays five or less projects at a time', () => {
        const mounted = mount(<ProjectsColumn projects={mockProjectsOverFive} />);
        expect(mounted.find('div.column').length).toBe(5);
        mounted.unmount();
        const mounted2 = mount(<ProjectsColumn projects={mockProjects} />);
        expect(mounted2.find('div.column').length).toBe(mockProjects.length);
        mounted2.unmount();
    })
});
