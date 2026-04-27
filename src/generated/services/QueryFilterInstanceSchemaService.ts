/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Query_Filter_Instance_SchemaModel } from '../models/Query_Filter_Instance_SchemaModel';
import type { Query_Filter_Instance_Schemas_For_WorkspaceModel } from '../models/Query_Filter_Instance_Schemas_For_WorkspaceModel';
import type { Query_Filter_Instance_SchemasModel } from '../models/Query_Filter_Instance_SchemasModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueryFilterInstanceSchemaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Query Filter Instance Schemas for Project
     * Returns the list of QueryFilterInstanceSchemas defined for a query
     * of the specified project.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/queries/filter_instance_schemas`](https://www.openproject.org/docs/api/endpoints/query-filter-instance-schema/#list-query-filter-instance-schemas-for-workspace)
     * @param id Project id
     * @returns Query_Filter_Instance_Schemas_For_WorkspaceModel OK
     * @throws ApiError
     */
    public listQueryFilterInstanceSchemasForProject(
        id: number,
    ): CancelablePromise<Query_Filter_Instance_Schemas_For_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/queries/filter_instance_schemas',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
            },
        });
    }
    /**
     * List Query Filter Instance Schemas
     * Returns the list of QueryFilterInstanceSchemas defined for a global query. That is a query not assigned to a project.
     * @returns Query_Filter_Instance_SchemasModel OK
     * @throws ApiError
     */
    public listQueryFilterInstanceSchemas(): CancelablePromise<Query_Filter_Instance_SchemasModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/filter_instance_schemas',
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
            },
        });
    }
    /**
     * View Query Filter Instance Schema
     * Retrieve an individual QueryFilterInstanceSchema as identified by the id parameter.
     * @param id QueryFilterInstanceSchema identifier. The identifier is the filter identifier.
     * @returns Query_Filter_Instance_SchemaModel OK
     * @throws ApiError
     */
    public viewQueryFilterInstanceSchema(
        id: string,
    ): CancelablePromise<Query_Filter_Instance_SchemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/filter_instance_schemas/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project`,
                404: `Returned if the QueryFilterInstanceSchema does not exist.`,
            },
        });
    }
    /**
     * List Query Filter Instance Schemas for Workspace
     * Returns the list of QueryFilterInstanceSchemas defined for a query of the specified workspace.
     * @param id Workspace id
     * @returns Query_Filter_Instance_Schemas_For_WorkspaceModel OK
     * @throws ApiError
     */
    public listQueryFilterInstanceSchemasForWorkspace(
        id: number,
    ): CancelablePromise<Query_Filter_Instance_Schemas_For_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspace/{id}/queries/filter_instance_schemas',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any workspace`,
            },
        });
    }
}
