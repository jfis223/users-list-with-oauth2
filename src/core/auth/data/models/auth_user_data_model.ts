import type { DataModel } from "../../../../common/interfaces/data_model.ts";
import { User } from "../../../users/domain/models/user.ts";
import { Expose, Type } from "class-transformer";

export class PhotosDataModel {
  @Expose()
  value?: string;
}

export class NameObjectDataModel {
  @Expose()
  familyName?: string;
  @Expose()
  givenName?: string;
}

class UserFieldDataModel {
  @Expose()
  displayName!: string;
  @Type(() => NameObjectDataModel)
  @Expose()
  name?: NameObjectDataModel;
  @Type(() => PhotosDataModel)
  @Expose()
  photos?: Array<PhotosDataModel>;
  @Expose()
  provider!: string;
  @Expose()
  email!: string;
  @Expose()
  id!: string;
}

export class AuthUserDataModel implements DataModel<User> {
  @Type(() => UserFieldDataModel)
  @Expose()
  user!: UserFieldDataModel;
  toDomain() {
    return new User({
      id: this.user.id,
      name: this.user.displayName ? this.user.displayName : `${this.user.name?.givenName} ${this.user.name?.familyName}`,
      email: this.user.email,
      avatar: this.user.photos?.length ? this.user.photos[0].value : undefined
    });
  }
}
