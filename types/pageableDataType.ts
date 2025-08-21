export default interface PageableDataType<T> {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  pageSort: number;
  pageContents: T;
}
