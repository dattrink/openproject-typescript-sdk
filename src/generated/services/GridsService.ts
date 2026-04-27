/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GridCollectionModel } from '../models/GridCollectionModel';
import type { GridReadModel } from '../models/GridReadModel';
import type { GridWriteModel } from '../models/GridWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GridsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List grids
     * Lists all grids matching the provided filters and being part of the selected query page. The grids returned will
     * also depend on the permissions of the requesting user.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param filters JSON specifying filter conditions. Accepts the same format as returned by
     * the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported filters
     * are:
     *
     * - page: Filter grid by work package
     * @returns GridCollectionModel OK
     * @throws ApiError
     */
    public listGrids(
        offset: number = 1,
        pageSize: number = 30,
        filters?: string,
    ): CancelablePromise<GridCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/grids',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'filters': filters,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
                403: `Returned if the client is not logged in and login is required.`,
            },
        });
    }
    /**
     * Create a grid
     * Creates a new grid applying the attributes provided in the body. The constraints applied to the grid depend on the
     * page the grid is placed in which is why the create form endpoint should be used to be guided when wanting to
     * create a grid.
     * @param requestBody
     * @returns GridReadModel Created
     * @throws ApiError
     */
    public createGrid(
        requestBody?: GridWriteModel,
    ): CancelablePromise<GridReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/grids',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Depends on the page the grid is defined for.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Grid Create Form
     * @returns any OK
     * @throws ApiError
     */
    public gridCreateForm(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/grids/form',
        });
    }
    /**
     * Get a grid
     * Fetches a single grid identified by its id.
     * @param id Grid id
     * @returns GridReadModel OK
     * @throws ApiError
     */
    public getGrid(
        id: number,
    ): CancelablePromise<GridReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/grids/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the Grid does not exist or if the user does not have permission to view it.
                 **Required permission** depends on the page the grid is defined for`,
            },
        });
    }
    /**
     * Update a grid
     * Updates the given grid by applying the attributes provided in the body. The constraints applied to the grid depend
     * on the page the grid is placed in which is why the create form endpoint should be used to be guided when wanting
     * to update a grid.
     * @param id Grid id
     * @param requestBody
     * @returns GridReadModel OK
     * @throws ApiError
     */
    public updateGrid(
        id: number,
        requestBody?: GridWriteModel,
    ): CancelablePromise<GridReadModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/grids/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** The permission depends on the page the grid is placed in.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Grid Update Form
     * @param id ID of the grid being modified
     * @returns any OK
     * @throws ApiError
     */
    public gridUpdateForm(
        id: number,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/grids/{id}/form',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** depends on the page the grid is defined for.
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding grid.*`,
                404: `Returned if the grid does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
}
