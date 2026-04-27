/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Query_ColumnModel } from '../models/Query_ColumnModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueryColumnsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Query Column
     * Retrieve an individual QueryColumn as identified by the `id` parameter.
     * @param id QueryColumn id
     * @returns Query_ColumnModel OK
     * @throws ApiError
     */
    public viewQueryColumn(
        id: string,
    ): CancelablePromise<Query_ColumnModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/columns/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
                404: `Returned if the QueryColumn does not exist.`,
            },
        });
    }
}
