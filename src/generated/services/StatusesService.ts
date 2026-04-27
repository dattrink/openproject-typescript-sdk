/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusCollectionModel } from '../models/StatusCollectionModel';
import type { StatusModel } from '../models/StatusModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatusesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List the collection of all statuses
     * Returns a collection of all work package statuses.
     * @returns StatusCollectionModel OK
     * @throws ApiError
     */
    public listStatuses(): CancelablePromise<StatusCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/statuses',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package (on any project)`,
            },
        });
    }
    /**
     * Get a work package status
     * Returns a work package status by its unique identifier.
     * @param id Status id
     * @returns StatusModel OK
     * @throws ApiError
     */
    public getStatus(
        id: number,
    ): CancelablePromise<StatusModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/statuses/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package (on any project)`,
                404: `Returned if the status does not exist.`,
            },
        });
    }
}
