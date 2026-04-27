/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PriorityCollectionModel } from '../models/PriorityCollectionModel';
import type { PriorityModel } from '../models/PriorityModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PrioritiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all Priorities
     * @returns PriorityCollectionModel OK
     * @throws ApiError
     */
    public listAllPriorities(): CancelablePromise<PriorityCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/priorities',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package (on any project)`,
            },
        });
    }
    /**
     * View Priority
     * @param id Priority id
     * @returns PriorityModel OK
     * @throws ApiError
     */
    public viewPriority(
        id: number,
    ): CancelablePromise<PriorityModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/priorities/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package (on any project)`,
            },
        });
    }
}
