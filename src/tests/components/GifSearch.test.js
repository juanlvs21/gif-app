import { shallow } from "enzyme";

import GifSearch from "../../components/GifSearch";

describe("Pruebas en el componente GifSearch", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<GifSearch setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallow(<GifSearch setCategories={setCategories} />);
  });

  test("Cargar componente GifSearch correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el input", () => {
    const input = wrapper.find("input");
    const value = "Example test";

    input.simulate("change", { target: { value } });
  });

  test("Submit: input no cumple la condición inputValue.trim().length > 0", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Submit: input con valores validos", () => {
    // const form = wrapper.find("form");
    const value = "Example test";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value").trim()).toBe("");
  });
});
