import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetxh', () => {
    
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Bleach')

        expect( gifs.length).toBe(10)
    })
})
