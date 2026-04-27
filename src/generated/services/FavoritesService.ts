/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FavoritesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Unfavorite Project
     * Removes the project from the current user's favorites.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/favorite`](https://www.openproject.org/docs/api/endpoints/workspaces/#unfavorite-workspace)
     * @param id Project id
     * @returns void
     * @throws ApiError
     */
    public unfavoriteProject(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/projects/{id}/favorite',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** logged in`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project`,
            },
        });
    }
    /**
     * Favorite Project
     * Adds the project to the current user's favorites.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/favorite`](https://www.openproject.org/docs/api/endpoints/workspaces/#favorite-workspace)
     * @param id Project id
     * @returns void
     * @throws ApiError
     */
    public favoriteProject(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/favorite',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** logged in`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project`,
            },
        });
    }
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
}
