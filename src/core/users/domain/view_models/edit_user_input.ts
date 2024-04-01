import type { ConstructorType } from "../../../../common/interfaces/constructor_type.ts";

export default class EditUserInput {
  id: string;
  job: string;
  name: string;

  constructor(params: ConstructorType<EditUserInput>) {
    this.id = params.id;
    this.job = params.job;
    this.name = params.name;
  }
}
