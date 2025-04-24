import { IHttpClient, IReqParams } from "../../@types/http/httpClient";

export class AxiosHttpClientMock implements IHttpClient {
  request(reqParams: IReqParams): Promise<any> {
    return Promise.resolve([
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
    ]);
  }
}
