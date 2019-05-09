interface PayloadFailure {
  error: string;
}
interface PayloadSuccess<T> {
  payload: T;
}

export type Payload<T> = PayloadSuccess<T> | PayloadFailure;