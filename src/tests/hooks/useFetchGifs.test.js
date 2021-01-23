import useFetchGifs from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGids', () => {
    test('Debe de retornar el estado inicial', async () => {
    
        //ejecutar custom hooks desde las pruebas
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Hunter x Hunter'))

        const  { data, loading } =  result.current
        //   const {data, loading } =  useFetchGifs('Hunter x Hunter')

        await waitForNextUpdate()

        console.log(result)

        expect(data).toEqual([])
        expect( loading ).toBe( true )

    })

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        
        //?  waitForNextUpdate(una promesa) que devuelve cuando cambió el estado del custom hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Hunter x Hunter'))

        await waitForNextUpdate()
        

        const  { data, loading } =  result.current
        //   const {data, loading } =  useFetchGifs('Hunter x Hunter')

        console.log(result)

        expect(data.length).toBe(10)
        expect( loading ).toBe( false )

    })
    
    
})
