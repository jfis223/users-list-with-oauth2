import { Exclude, Expose, Type } from "class-transformer";
import { Page } from "../../domain/models/page.ts";
import type { DataModel } from "../../../../common/interfaces/data_model.ts";
export class PageDataModel<ItemDataType extends DataModel<ItemDomainType>, ItemDomainType> {
  @Exclude()
  private type: new (...args: Array<unknown>) => unknown;

  @Expose({ name: "data" })
  @Type((options) => {
    return (options?.newObject as PageDataModel<ItemDataType, ItemDomainType>).type;
  })
  data: Array<ItemDataType> = [];
  @Expose()
  total_pages?: number;
  @Expose()
  total?: number;
  @Expose()
  page?: number;
  constructor(type: new (...args: Array<unknown>) => unknown) {
    this.type = type;
  }

  toDomain(): Page<ItemDomainType> {
    return new Page<ItemDomainType>({
      items: this.data.map((i) => i.toDomain()),
      totalItems: this.total,
      totalPages: this.total_pages,
      page: this.page
    });
  }
}
