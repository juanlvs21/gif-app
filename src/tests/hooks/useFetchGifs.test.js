import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  jest.setTimeout(120000);

  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Tomioka")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Tomioka")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBeTruthy();
    expect(loading).toBeFalsy();
  });
});
