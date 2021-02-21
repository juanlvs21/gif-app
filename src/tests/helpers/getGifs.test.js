import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fecth", () => {
  jest.setTimeout(120000);

  test("Debe tener 12 elementos", async () => {
    const gifs = await getGifs("Naruto");

    expect(gifs.length).toBe(12);
  });

  test("Debe devolver un arreglo vacio", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
