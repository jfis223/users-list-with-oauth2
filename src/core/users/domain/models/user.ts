import type { ConstructorType } from "../../../../common/interfaces/constructor_type.ts";

export class User {
  id: string;
  email: string;
  name: string;
  avatar?: string;

  constructor(params: ConstructorType<User>) {
    this.id = params.id;
    this.email = params.email;
    this.name = params.name;
    this.avatar = params.avatar;
  }
}
