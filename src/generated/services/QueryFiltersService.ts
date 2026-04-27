/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Query_FilterModel } from '../models/Query_FilterModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueryFiltersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Query Filter
     * Retrieve an individual QueryFilter as identified by the id parameter.
     * @param id QueryFilter identifier
     * @returns Query_FilterModel OK
     * @throws ApiError
     */
    public viewQueryFilter(
        id: string,
    ): CancelablePromise<Query_FilterModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/filters/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
                404: `Returned if the QueryFilter does not exist.`,
            },
        });
    }
}
