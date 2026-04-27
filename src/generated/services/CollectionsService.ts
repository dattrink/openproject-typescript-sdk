/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollectionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * view aggregated result
     * @param groupBy The column to group by.
     * Note: Aggregation is as of now only supported by the work package collection.
     * You can pass any column name as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @param showSums
     * @returns any OK
     * @throws ApiError
     */
    public viewAggregatedResult(
        groupBy?: string,
        showSums: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/examples',
            query: {
                'groupBy': groupBy,
                'showSums': showSums,
            },
        });
    }
}
