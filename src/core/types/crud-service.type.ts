/**
 * crud-service.type.ts
 * @description Type générique pour un service CRUD (Create, Read, Update, Delete).
 */
import * as Generics from "./generic.types";

export type ENDPOINTS = `/${Lowercase<string>}s`;


export type CrudResponse<D> = {
  status: 'success';
  message: string;
  data: D;
} | {
  status: 'error';
  message: string;
};


export interface CrudService<T extends Generics.WithUniqueId> {

  API: ENDPOINTS;

  create(item: Omit<T, 'id'>): Promise<CrudResponse<T>>;

  read(): Promise<CrudResponse<T[]>>;
  read(id: Generics.UniqueId): Promise<CrudResponse<T | null>>;
  read(id?: Generics.UniqueId): Promise<CrudResponse<T | T[] | null>>;

  update(target: T, update: Partial<Omit<T, 'id'>>): Promise<CrudResponse<T>>;

  delete(target: T): Promise<CrudResponse<T>>;

}