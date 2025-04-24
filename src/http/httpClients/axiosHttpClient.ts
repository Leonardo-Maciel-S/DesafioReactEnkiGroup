import { IHttpClient, IReqParams } from "../../@types/http/httpClient";
import { api } from "../axios";

export class AxiosHttpClient implements IHttpClient {
  async request<T>(reqParams: IReqParams): Promise<any> {
    const { data } = await api.request({
      method: reqParams.method,
      url: reqParams.url,
      headers: reqParams.headers,
      data: reqParams.body,
    });

    return data;
  }
}
