export default class PaginationOptions {
  page: number
  pageSize: number
  offset: number

  constructor (page: number, pageSize: number) {
    this.page = page
    this.pageSize = pageSize
    this.offset = (page * pageSize) - pageSize
  }
}
