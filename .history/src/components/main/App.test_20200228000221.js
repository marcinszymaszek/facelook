import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {

    it("App renders without a problem", () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const tree = renderer.create(<App />);
        expect(tree).toMatchSnapshot();
    })

    it("Child components renders", () => {
        const wrapper = shallow(<App />);
        // console.log(wrapper.debug());
        expect(wrapper.find('MainInfo').exists()).toBe(true);
        expect(wrapper.find('Friends').exists()).toBe(true);
        expect(wrapper.find('Opinion').exists()).toBe(true);
        expect(wrapper.find('Users').exists()).toBe(true);
    })

})

