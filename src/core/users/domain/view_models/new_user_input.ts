import type { ConstructorType } from "../../../../common/interfaces/constructor_type.ts";

export default class NewUserInput {
  job: string;
  name: string;

  constructor(params: ConstructorType<NewUserInput>) {
    this.job = params.job;
    this.name = params.name;
  }
}
