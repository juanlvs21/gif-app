import { shallow } from "enzyme";

import GifApp from "../GifApp";

describe("Pruebas en el componente GifSearch", () => {
  test("Cargar componente GifSearch correctamente", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categorias", () => {
    const categories = ["Tomioka", "Senku"];

    const wrapper = shallow(<GifApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
