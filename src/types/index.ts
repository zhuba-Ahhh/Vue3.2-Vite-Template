export interface MyResponseType<T = any> {
  code: number;
  message: string;
  data: T;
}
