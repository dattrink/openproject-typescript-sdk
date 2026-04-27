/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SprintCollectionModel } from '../models/SprintCollectionModel';
import type { SprintModel } from '../models/SprintModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SprintsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List sprints in project
     * List sprints in the project. The sprints might be ones native to the project or shared with it. This endpoint supports pagination and filtering.
     * @param id ID of the project whose sprints will be listed
     * @param filters JSON specifying filter conditions.
     *
     * Accepts the same format and filters as returned by the [sprints](https://www.openproject.org/docs/api/endpoints/sprints/) endpoint.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @returns SprintCollectionModel OK
     * @throws ApiError
     */
    public listSprintsInProject(
        id: number,
        filters?: string,
        offset: number = 1,
        pageSize?: number,
    ): CancelablePromise<SprintCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/sprints',
            path: {
                'id': id,
            },
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
            },
            errors: {
                403: `Returned if the user lacks permission to list sprints in the queried for project.
                 **Required permission:** view sprints in the project.`,
                404: `Returned if the project does not exist.
                 **Required permission:** view sprints in the queried for project.`,
            },
        });
    }
    /**
     * List sprints
     * List sprints visible to the user. This endpoint supports pagination and filtering.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * + definingWorkspace: filters sprints based on the project they are defined in. This is opposed to the projects they are shared with.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @returns SprintCollectionModel OK
     * @throws ApiError
     */
    public listSprints(
        filters?: string,
        offset: number = 1,
        pageSize?: number,
    ): CancelablePromise<SprintCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/sprints',
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Get sprint
     * Retrieves a sprint defined by its unique identifier.
     * @param id Sprint id
     * @returns SprintModel OK
     * @throws ApiError
     */
    public getSprint(
        id: number,
    ): CancelablePromise<SprintModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/sprints/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the sprint does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view master backlogs (this will change to view sprints)`,
            },
        });
    }
}
