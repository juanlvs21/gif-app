import { shallow } from "enzyme";

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente GifGrid", () => {
  const category = "naruto";
  const gifs = [
    {
      id: "1",
      url: "http://example.com/image.png",
      title: "Example",
    },
  ];

  test("Cargar componente GifGrid correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imágenes con useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Spinner").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
