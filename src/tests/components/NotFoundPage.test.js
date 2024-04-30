import React from 'react'
import {shallow} from 'enzyme'
import  NotFoundPage from '../../components/NotFoundPage.js'
import expenses from '../fixtures/expenses'


test('should render NotFoundPage with expense',()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
