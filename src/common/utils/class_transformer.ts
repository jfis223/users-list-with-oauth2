import { instanceToPlain, plainToClass, plainToClassFromExist } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";
import type { DataModel } from "../interfaces/data_model";
import { PageDataModel } from "../../core/app/data/models/page_data_model.ts";

export const fromJson = <T = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>): U =>
  plainToClass(model, json, { excludeExtraneousValues: true, exposeDefaultValues: true }) as U;

export const toJson = <T>(object: T): Record<string, unknown> =>
  instanceToPlain(object, { excludeExtraneousValues: true, exposeDefaultValues: true });

export const fromJsonWithPagination = <DataType extends DataModel<DomainType>, DomainType>(
  model: ClassConstructor<DataType>,
  json: Record<string, unknown>
) => plainToClassFromExist(new PageDataModel<DataType, DomainType>(model), json, { excludeExtraneousValues: true, exposeDefaultValues: true });
