/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { List_of_NewsModel } from '../models/List_of_NewsModel';
import type { NewsCreateModel } from '../models/NewsCreateModel';
import type { NewsModel } from '../models/NewsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NewsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List News
     * Lists news. The news returned depend on the provided parameters and also on the requesting user's permissions.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     *
     * + created_at: Sort by news creation datetime
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported filters are:
     *
     * + project_id: Filter news by project
     * @returns List_of_NewsModel OK
     * @throws ApiError
     */
    public listNews(
        offset: number = 1,
        pageSize?: number,
        sortBy?: string,
        filters?: string,
    ): CancelablePromise<List_of_NewsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/news',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client is not logged in and login is required.`,
            },
        });
    }
    /**
     * Create News
     * Creates a news entry. Only administrators and users with "Manage news" permission in the given project are eligible.
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     * @param requestBody
     * @returns NewsModel Created
     * @throws ApiError
     */
    public createNews(
        requestBody?: NewsCreateModel,
    ): CancelablePromise<NewsModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/news',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator, Manage news permission in the project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * View news
     * @param id news id
     * @returns NewsModel OK
     * @throws ApiError
     */
    public viewNews(
        id: number,
    ): CancelablePromise<NewsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/news/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the news does not exist or if the user does not have permission to view it.
                 **Required permission** being member of the project the news belongs to`,
            },
        });
    }
    /**
     * Update news
     * Updates the news's writable attributes.
     * When calling this endpoint the client provides a single object, containing the properties and links to be updated, in the body.
     * @param id News id
     * @param requestBody
     * @returns NewsModel OK
     * @throws ApiError
     */
    public updateNews(
        id: number,
        requestBody?: NewsCreateModel,
    ): CancelablePromise<NewsModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/news/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrators, Manage news permission`,
                404: `Returned if the news entry does not exist or if the API user does not have the necessary permissions to update it.
                 **Required permission:** Administrators, Manage news permission`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Delete news
     * Permanently deletes the specified news entry.
     * @param id News id
     * @returns any Returned if the news was deleted successfully.
     *
     * Note that the response body is empty as of now. In future versions of the API a body
     * *might* be returned, indicating the progress of deletion.
     * @throws ApiError
     */
    public deleteNews(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/news/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrators and Manage news permission`,
                404: `Returned if the news does not exist.`,
            },
        });
    }
}
