import type { ConstructorType } from "../../../../common/interfaces/constructor_type.ts";

export class Page<T> {
  items: Array<T> = [];
  totalItems?: number;
  totalPages?: number;
  page?: number;

  constructor(params: ConstructorType<Page<T>>) {
    this.items = params.items;
    this.totalItems = params.totalItems;
    this.totalPages = params.totalPages;
    this.page = params.page;
  }
}
