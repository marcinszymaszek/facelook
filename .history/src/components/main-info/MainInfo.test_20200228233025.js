import React from 'react';
import ReactDOM from 'react-dom';
import MainInfo from './MainInfo';
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MainInfo tests', () => {

    it("MainInfo renders without a problem", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainInfo />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const tree = renderer.create(<MainInfo />);
        expect(tree).toMatchSnapshot();
    })



})
