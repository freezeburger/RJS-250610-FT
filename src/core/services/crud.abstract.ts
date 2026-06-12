import { axios } from "@/bridges/axios";
import { CrudResponse, CrudService, ENDPOINTS } from "../types/crud-service.type";
import * as Generics from "../types/generic.types";


export abstract class CrudAbstract<T extends Generics.WithUniqueId> implements CrudService<T> {

    abstract API: ENDPOINTS;
    protected readonly API_ROOT = '/api';

    protected http = axios;

    async create(item: Omit<T, "id">): Promise<CrudResponse<T>> {

        const data = await this.http.post<T>(`${this.API_ROOT}/${this.API}`, item).then(res => res.data);
        return {
            status: 'success',
            message: 'OK',
            data: data,
        }
    }

    read(): Promise<CrudResponse<T[]>>;
    read(id: Generics.UniqueId): Promise<CrudResponse<T | null>>;
    async read(id?: Generics.UniqueId): Promise<CrudResponse<T | T[] | null>> {
        if (!id) {
            const data = await this.http
                .get<T[]>(`${this.API_ROOT}/${this.API}`)
                .then((res) => res.data);
            return {
                status: "success",
                message: "OK",
                data: data,
            };
        }

        const data = await this.http
            .get<T>(`${this.API_ROOT}/${this.API}/${id}`)
            .then((res) => res.data);
        return {
            status: "success",
            message: "OK",
            data: data,
        };
    }

    async update(target: T, update: Partial<Omit<T, "id">>): Promise<CrudResponse<T>> {
        const data = await this.http.put<T>(`${this.API_ROOT}/${this.API}/${target.id}`, update).then(res => res.data);
        return {
            status: "success",
            message: "OK",
            data: data,
        }
    }

    async delete(target: T): Promise<CrudResponse<T>> {
        const data = await this.http.delete<T>(`${this.API_ROOT}/${this.API}/${target.id}`).then(res => res.data);
        return {
            status: "success",
            message: "OK",
            data: data,
        }
    }

}