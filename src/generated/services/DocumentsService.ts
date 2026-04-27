/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentModel } from '../models/DocumentModel';
import type { DocumentsModel } from '../models/DocumentsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DocumentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Documents
     * The documents returned depend on the provided parameters and also on the requesting user's permissions.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     *
     * + created_at: Sort by document creation datetime
     * @returns DocumentsModel OK
     * @throws ApiError
     */
    public listDocuments(
        offset: number = 1,
        pageSize?: number,
        sortBy?: string,
    ): CancelablePromise<DocumentsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/documents',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
                403: `Returned if the client is not logged in and login is required.`,
            },
        });
    }
    /**
     * View document
     * @param id Document id
     * @returns DocumentModel OK
     * @throws ApiError
     */
    public viewDocument(
        id: number,
    ): CancelablePromise<DocumentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/documents/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the document does not exist or if the user does not have permission to view it.
                 **Required permission** \`view documents\` in the project the document belongs to`,
            },
        });
    }
    /**
     * Update document
     * Updates a document's attributes.
     * @param id Document id
     * @param requestBody
     * @returns DocumentModel OK
     * @throws ApiError
     */
    public updateDocument(
        id: number,
        requestBody?: {
            /**
             * The title of the document
             */
            title?: string;
            description?: {
                /**
                 * The raw markdown content
                 */
                raw?: string;
            };
        },
    ): CancelablePromise<DocumentModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/documents/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request body is invalid.`,
                403: `Returned if the user does not have permission to edit the document.
                 **Required permission** \`manage documents\` in the project the document belongs to`,
                404: `Returned if the document does not exist or if the user does not have permission to view it.
                 **Required permission** \`view documents\` in the project the document belongs to`,
                422: `Returned if the request body contains validation errors.`,
            },
        });
    }
}
