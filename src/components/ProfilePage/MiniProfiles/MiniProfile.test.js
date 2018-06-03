import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import MiniProfile from './MiniProfile';

const mockUser = {
    images: {
        115: 'testImageUrl'
    },
    display_name: 'Test User',
    username: 'miniprofileuser'
}

describe('MiniProfile', () => {
    it('snapshot: should render correctly', () => {
        const output = shallow(<MiniProfile user={mockUser} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('snapshot: should not error out without input', () => {
        const output = shallow(<MiniProfile />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
