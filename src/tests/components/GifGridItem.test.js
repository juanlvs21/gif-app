import { shallow } from "enzyme";

import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en el componente GifGridItem", () => {
  const title = "Title example";
  const url = "http://example/image.png";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Cargar componente GifGridItem correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un párrafo con el title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("Debe tener una imagen con un src y un alt igual a los props", () => {
    const img = wrapper.find("img");

    // expect(img.props().src).toBe(url);
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener animate__bounceIn", () => {
    const div = wrapper.find("div");

    expect(div.prop("className").includes("animate__bounceIn")).toBeTruthy();
  });
});
