/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupCollectionModel } from '../models/GroupCollectionModel';
import type { GroupModel } from '../models/GroupModel';
import type { GroupWriteModel } from '../models/GroupWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List groups
     * Returns a collection of groups. The client can choose to filter the
     * groups similar to how work packages are filtered. In addition to the provided
     * filters, the server will reduce the result set to only contain groups, for which
     * the requesting client has sufficient permissions (*view_members*, *manage_members*).
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     *
     * + created_at: Sort by group creation datetime
     *
     * + updated_at: Sort by the time the group was updated last
     * @param select Comma separated list of properties to include.
     * @returns GroupCollectionModel OK
     * @throws ApiError
     */
    public listGroups(
        sortBy: string = '[["id", "asc"]]',
        select?: string,
    ): CancelablePromise<GroupCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/groups',
            query: {
                'sortBy': sortBy,
                'select': select,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** View members or manage members in any project`,
            },
        });
    }
    /**
     * Create group
     * Creates a new group applying the attributes provided in the body.
     * @param requestBody
     * @returns GroupModel Created
     * @throws ApiError
     */
    public createGroup(
        requestBody?: GroupWriteModel,
    ): CancelablePromise<GroupModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/groups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Delete group
     * Deletes the group.
     * @param id Group id
     * @returns any Returned if the group was marked for deletion.
     *
     * Note that the response body is empty as of now. In future versions of the API a body
     * *might* be returned, indicating the progress of deletion.
     * @throws ApiError
     */
    public deleteGroup(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator`,
                404: `Returned if the group does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** Administrator
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Get group
     * Fetches a group resource.
     * @param id Group id
     * @returns GroupModel OK
     * @throws ApiError
     */
    public getGroup(
        id: number,
    ): CancelablePromise<GroupModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the group does not exist or if the API user does not have permission to view them.
                 **Required permission** If the user has the *manage members* permission in at least one project the user will be able to query all groups. If not, the user
                will be able to query all groups which are members in projects, he has the *view members* permission in.`,
            },
        });
    }
    /**
     * Update group
     * Updates the given group by applying the attributes provided in the body.
     *
     * Please note that the `members` array provided will override the existing set of members (similar to a PUT). A
     * client thus has to provide the complete list of members the group is to have after the PATCH even if only one
     * member is to be added.
     * @param id Group id
     * @param requestBody
     * @returns GroupModel OK
     * @throws ApiError
     */
    public updateGroup(
        id: number,
        requestBody?: GroupWriteModel,
    ): CancelablePromise<GroupModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator`,
                404: `Returned if the group does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission** If the user has the *manage members* permission in at least one project the user will be able to query all groups. If not, the user
                will be able to query all groups which are members in projects, he has the *view members* permission in.
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
}
