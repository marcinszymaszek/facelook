import React from 'react';
import ReactDOM from 'react-dom';
import MainInfo from './MainInfo';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MainInfo tests', () => {

    it("MainInfo renders without a problem", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainInfo />, div);
        ReactDOM.unmountComponentAtNode(div);
    })


    // it("MainInfo changes text according to state", () => {
    //     const wrapper = shallow(<MainInfo />);
    //     // console.log(wrapper.debug());
    //     expect(wrapper.find('h3').text()).toBe("Amount of users: count em :)");
    //     wrapper.state().toEqual({ numberOfUsers: 6 });
    //     expect(wrapper.find('h3').text()).toBe("Amount of users: 6");
    // })

    it("MainInfo changes text according to clicking eye icon", () => {
        const wrapper = shallow(<MainInfo usersAmount/>);
        // const button = wrapper.find(".eye-icon");
        // console.log(wrapper.debug());
        expect(wrapper.find('h3').text()).toBe("Amount of users: 6");
        // button.simulate('click');
    //     expect(wrapper.find('h3').text()).toBe("Amount of users: count em :)");
    })



    it('Snapshot matches', () => {
        const tree = renderer.create(<MainInfo />);
        expect(tree).toMatchSnapshot();
    })



})

