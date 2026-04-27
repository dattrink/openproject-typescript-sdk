/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeModel } from '../models/TypeModel';
import type { Types_by_WorkspaceModel } from '../models/Types_by_WorkspaceModel';
import type { TypesModel } from '../models/TypesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List types available in a project
     * This endpoint lists the types that are *available* in a given project.
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/types`](https://www.openproject.org/docs/api/endpoints/types/#list-types-available-in-a-workspace)
     * @param id ID of the project whose types will be listed
     * @returns Types_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listTypesAvailableInAProject(
        id: number,
    ): CancelablePromise<Types_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/types',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage types (on given project)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List all Types
     * @returns TypesModel OK
     * @throws ApiError
     */
    public listAllTypes(): CancelablePromise<TypesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/types',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package or manage types (on any project)`,
            },
        });
    }
    /**
     * View Type
     * @param id Type id
     * @returns TypeModel OK
     * @throws ApiError
     */
    public viewType(
        id: number,
    ): CancelablePromise<TypeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/types/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package or manage types (on any project)`,
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
}
