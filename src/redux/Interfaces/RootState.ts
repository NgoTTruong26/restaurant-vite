export interface RootState<T> {
  value: T;
  status: "idle" | "loading" | "failed";
}
