export interface ResponseHandler<T = never> {
  onSuccess?: (...data: T extends never ? [never] : [T]) => void;
  onError?(error: Error): void;
}
