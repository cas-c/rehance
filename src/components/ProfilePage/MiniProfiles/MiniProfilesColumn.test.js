import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import MiniProfilesColumn from './MiniProfilesColumn';
import MiniProfileList from './MiniProfileList';

const mockUsers = [
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
    it('snapshot: should render correctly with input (less than / equal to five)', () => {
        const output = shallow(<MiniProfilesColumn label='Testing' emptyString='No input.' users={mockUsers}/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should render correctly with input (more than five)', () => {
        const output = shallow(<MiniProfilesColumn label='Testing' emptyString='No input.' users={mockUsersMoreThanFive}/>);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should render correctly without input', () => {
        const output = shallow(<MiniProfilesColumn />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should render correctly without input and with custom empty string', () => {
        const output = shallow(<MiniProfilesColumn label='Testing' emptyString='Custom empty string.' />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('unit: should display the emptyString if no/empty data is entered', () => {
        const mounted = mount(<MiniProfilesColumn emptyString='Custom string' />);
        expect(mounted.containsMatchingElement(<div>Custom string</div>)).toBe(true);
        mounted.unmount();
        const mountedWithEmpty = mount(<MiniProfilesColumn emptyString='Custom string' data={[]} />);
        expect(mountedWithEmpty.containsMatchingElement(<div>Custom string</div>)).toBe(true);
        mountedWithEmpty.unmount();
    });
    it('unit: displays a "View all..." link only if there are more than five users', () => {
        const mounted = mount(<MiniProfilesColumn data={mockUsersMoreThanFive} />);
        expect(mounted.containsMatchingElement(<a>View all...</a>)).toBe(true);
        mounted.unmount();
        const mountedLessThan = mount(<MiniProfilesColumn data={mockUsers} />);
        expect(mountedLessThan.containsMatchingElement(<a>View all...</a>)).toBe(false);
        mountedLessThan.unmount();
    });
})