import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors<T> {
  // 请求拦截
  // eslint-disable-next-line no-unused-vars
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // eslint-disable-next-line no-unused-vars
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  // eslint-disable-next-line no-unused-vars
  responseInterceptors?: (config: T) => T;
  // eslint-disable-next-line no-unused-vars
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
  [index: string]: () => void;
}
