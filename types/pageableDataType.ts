export default interface PageableDataType<T> {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  pageStor: number;
  pageContents: T;
}
