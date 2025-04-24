export interface IApiRequest {
  getAll: <T>() => Promise<T[]>;
  create: <T>(item: T) => T;
}
