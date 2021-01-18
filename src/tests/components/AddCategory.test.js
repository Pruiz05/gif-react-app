import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn(); // simple funcion para saber cuantas veces fue llamada

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //? Simulaciones cambios en un input
  test("Debe de cambiar el textbox item", () => {
    const input = wrapper.find("input");

    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola mundo";
    // 1. simular el inputChange
    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });
    // 2. simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //evaluar que se envien funciones via test solo se permiten este tipo de argumentos
    // 4. el valor del input debe de estar ''
    expect(input.prop("value")).toBe("");
  });
});

// session 8. cap. 10

