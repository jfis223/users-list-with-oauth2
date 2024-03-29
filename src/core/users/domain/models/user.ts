import type { ConstructorType } from "../../../../common/interfaces/constructor_type.ts";

export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor(params: ConstructorType<User>) {
    this.id = params.id;
    this.email = params.email;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.avatar = params.avatar;
  }
}
