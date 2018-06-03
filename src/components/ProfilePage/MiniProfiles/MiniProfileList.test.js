import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import MiniProfileList from './MiniProfileList';
import MiniProfile from './MiniProfile';

const mockUsersLessThanFive = [
    {
        images: {
            115: 'testImageUrl'
        },
        display_name: 'Test User',
        username: 'miniprofileuser'
    },
    {
        images: {
            115: 'testImageUrl2'
        },
        display_name: 'Test User 2',
        username: 'miniprofileuser2'
    }
];

const mockUsersMoreThanFive = [
    {
        images: {
            115: 'testImageUrl'
        },
        display_name: 'Test User',
        username: 'miniprofileuser'
    },
    {
        images: {
            115: 'testImageUrl2'
        },
        display_name: 'Test User 2',
        username: 'miniprofileuser2'
    },
    {
        images: {
            115: 'testImageUrl3'
        },
        display_name: 'Test User 3',
        username: 'miniprofileuser3'
    },
    {
        images: {
            115: 'testImageUrl4'
        },
        display_name: 'Test User 4',
        username: 'miniprofileuser4'
    },
    {
        images: {
            115: 'testImageUrl5'
        },
        display_name: 'Test User 5',
        username: 'miniprofileuser5'
    },
    {
        images: {
            115: 'testImageUrl6'
        },
        display_name: 'Test User 6',
        username: 'miniprofileuser6'
    },
    {
        images: {
            115: 'testImageUrl7'
        },
        display_name: 'Test User 7',
        username: 'miniprofileuser7'
    }
];

describe('MiniProfileList', () => {
    it('snapshot: should render correctly with less than five users', () => {
        const output = shallow(<MiniProfileList users={mockUsersLessThanFive}/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should render correctly with more than five users', () => {
        const output = shallow(<MiniProfileList users={mockUsersMoreThanFive}/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should not error out without input', () => {
        const output = shallow(<MiniProfile />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('unit: displays the proper amount', () => {
        const mounted = mount(<MiniProfileList users={mockUsersLessThanFive} />);
        expect(mounted.children().length).toBe(2);
        mounted.unmount();
        const mountedOverFive = mount(<MiniProfileList users={mockUsersMoreThanFive} />);
        expect(mountedOverFive.children().length).toBe(5);
        mountedOverFive.unmount();
    })
})