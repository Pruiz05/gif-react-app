import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('<Pruebas en <GifGridItem />', () => {

    const title ='placeholder';
    const url = 'https://via.placeholder.com/150'



    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
