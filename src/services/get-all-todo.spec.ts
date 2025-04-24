import { getAllTodo } from "./get-all-todo";
import { AxiosHttpClientMock } from "../mock/httpClient/axiosHttpClientMock";

describe("getAllTodo", () => {
  it("should return correct data", async () => {
    const data = await getAllTodo(new AxiosHttpClientMock());

    const resMock = [
      {
        id: "flrGI",
        title: "Lavar os pratos",
        isDone: false,
      },
      {
        id: "Tw-I9",
        title: "Cortar a grama",
        isDone: true,
      },
    ];

    expect(data).toEqual(resMock);
  });
});
