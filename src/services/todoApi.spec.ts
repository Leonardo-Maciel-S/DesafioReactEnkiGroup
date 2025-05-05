import { AxiosHttpClientMock } from "../mock/httpClient/axiosHttpClientMock";
import { TodoAPI } from "./todoApi";

describe("todoApi", () => {
  it("should return correct data in getAll function", async () => {
    const todoApi = new TodoAPI(new AxiosHttpClientMock());

    const data = await todoApi.getAll();

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

  it("should return only completed todos", async () => {
    const todoApi = new TodoAPI(new AxiosHttpClientMock());

    const data = await todoApi.getTodosByCompletionStatus(true);

    const resMock = [
      {
        id: "Tw-I9",
        title: "Cortar a grama",
        isDone: true,
      },
    ];

    expect(data).toEqual(resMock);
  });

  it("should return only incomplete todos", async () => {
    const todoApi = new TodoAPI(new AxiosHttpClientMock());

    const data = await todoApi.getTodosByCompletionStatus(false);

    const resMock = [
      {
        id: "flrGI",
        title: "Lavar os pratos",
        isDone: false,
      },
    ];

    expect(data).toEqual(resMock);
  });
});
