/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Query_OperatorModel } from '../models/Query_OperatorModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueryOperatorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Query Operator
     * Retrieve an individual QueryOperator as identified by the `id` parameter.
     * @param id QueryOperator id
     * @returns Query_OperatorModel OK
     * @throws ApiError
     */
    public viewQueryOperator(
        id: string,
    ): CancelablePromise<Query_OperatorModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/operators/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
                404: `Returned if the QueryOperator does not exist.`,
            },
        });
    }
}
