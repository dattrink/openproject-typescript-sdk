/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Query_Sort_ByModel } from '../models/Query_Sort_ByModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QuerySortBysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Query Sort By
     * Retrieve an individual QuerySortBy as identified by the id parameter.
     * @param id QuerySortBy identifier. The identifier is a combination of the column identifier and the direction.
     * @returns Query_Sort_ByModel OK
     * @throws ApiError
     */
    public viewQuerySortBy(
        id: string,
    ): CancelablePromise<Query_Sort_ByModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/sort_bys/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
                404: `Returned if the QuerySortBy does not exist.`,
            },
        });
    }
}
