/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Types_by_WorkspaceModel } from '../models/Types_by_WorkspaceModel';
import type { Workspaces_schemaModel } from '../models/Workspaces_schemaModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkspacesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Unfavorite Workspace
     * Removes the workspace from the current user's favorites.
     * @param id Workspace id
     * @returns void
     * @throws ApiError
     */
    public unfavoriteWorkspace(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/workspaces/{id}/favorite',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** logged in`,
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view workspace`,
            },
        });
    }
    /**
     * Favorite Workspace
     * Adds the workspace to the current user's favorites.
     * @param id Workspace id
     * @returns void
     * @throws ApiError
     */
    public favoriteWorkspace(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/workspaces/{id}/favorite',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** logged in`,
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view workspace`,
            },
        });
    }
    /**
     * List types available in a workspace
     * This endpoint lists the types that are *available* in a given workspace.
     * @param id ID of the workspace whose types will be listed
     * @returns Types_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listTypesAvailableInAWorkspace(
        id: number,
    ): CancelablePromise<Types_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/types',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage types (on given workspace)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a workspace.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * View workspace schema
     * @returns Workspaces_schemaModel OK
     * @throws ApiError
     */
    public viewWorkspaceSchema(): CancelablePromise<Workspaces_schemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/schema',
        });
    }
}
