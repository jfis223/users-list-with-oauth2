import type { DataModel } from "../../../../common/interfaces/data_model.ts";
import { User } from "../../domain/models/user.ts";
import { Expose, Type } from "class-transformer";

export class UserDataModel implements DataModel<User> {
  @Expose()
  id!: string;
  @Expose()
  email!: string;
  @Expose()
  first_name!: string;
  @Expose()
  last_name!: string;
  @Expose()
  avatar!: string;
  toDomain() {
    return new User({
      id: this.id,
      name: `${this.first_name} ${this.last_name}`,
      email: this.email,
      avatar: this.avatar
    });
  }
}

export class UserDetailDataModel implements DataModel<User> {
  @Type(() => UserDataModel)
  @Expose()
  data!: UserDataModel;
  toDomain() {
    return new User({
      id: this.data?.id,
      name: `${this.data.first_name} ${this.data.last_name}`,
      email: this.data.email,
      avatar: this.data.avatar
    });
  }
}
