import { shallow } from "enzyme";
import GifReactApp from "../GifReactApp";

describe("Pruebas en <GifReactApp />", () => {
  test("debe de mostrarse correctamente", ( ) => {
    const wrapper = shallow(<GifReactApp />);

    expect(wrapper).toMatchInlineSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
      const categories = ['Bleach', 'One Piece']

      const wrapper = shallow(<GifReactApp defaultCategories={categories}/>)

      expect(wrapper).toMatchSnapshot()

      expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
  
});
 