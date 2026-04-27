/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Available_projects_for_queryModel } from '../models/Available_projects_for_queryModel';
import type { Default_Query_for_WorkspaceModel } from '../models/Default_Query_for_WorkspaceModel';
import type { Default_QueryModel } from '../models/Default_QueryModel';
import type { QueriesModel } from '../models/QueriesModel';
import type { Query_Create_Form } from '../models/Query_Create_Form';
import type { Query_Update_Form } from '../models/Query_Update_Form';
import type { QueryModel } from '../models/QueryModel';
import type { Schema_For_Global_QueriesModel } from '../models/Schema_For_Global_QueriesModel';
import type { Schema_For_Workspace_QueriesModel } from '../models/Schema_For_Workspace_QueriesModel';
import type { Star_QueryModel } from '../models/Star_QueryModel';
import type { Unstar_QueryModel } from '../models/Unstar_QueryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View default query for project
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries)
     * in its response, this resource returns an unpersisted query and by that allows
     * to get the default query configuration. The client may also provide additional
     * parameters which will modify the default query. The query will already be scoped
     * to the project.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/queries/default`](https://www.openproject.org/docs/api/endpoints/queries/#view-default-query-for-workspace)
     * @param id Id of the project the default query is requested for
     * @param filters JSON specifying filter conditions.
     * The filters provided as parameters are not applied to the query but are instead used to override the query's persisted filters.
     * All filters also accepted by the work packages endpoint are accepted. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param offset Page number inside the queries' result collection of work packages.
     * @param pageSize Number of elements to display per page for the queries' result collection of work packages.
     * @param sortBy JSON specifying sort criteria. The sort criteria is applied to the query's result collection of work packages overriding the query's persisted sort criteria.
     * @param groupBy The column to group by. The grouping criteria is applied to the to the query's result collection of work packages overriding the query's persisted group criteria.
     * @param showSums Indicates whether properties should be summed up if they support it. The showSums parameter is applied to the to the query's result collection of work packages overriding the query's persisted sums property.
     * @param timestamps Indicates the timestamps to filter by when showing changed attributes on work packages. Values can be either ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM", "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM". The first "HH:MM" part represents the zero paded hours and minutes. The last "+HH:MM" part represents the timezone offset from UTC associated with the time. Values older than 1 day are accepted only with valid Enterprise Token available.
     *
     * @param timelineVisible Indicates whether the timeline should be shown.
     * @param showHierarchies Indicates whether the hierarchy mode should be enabled.
     * @returns Default_Query_for_WorkspaceModel OK
     * @throws ApiError
     */
    public viewDefaultQueryForProject(
        id: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        offset: number = 1,
        pageSize?: number,
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        timestamps: string = 'PT0S',
        timelineVisible: boolean = false,
        showHierarchies: boolean = true,
    ): CancelablePromise<Default_Query_for_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/queries/default',
            path: {
                'id': id,
            },
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'timestamps': timestamps,
                'timelineVisible': timelineVisible,
                'showHierarchies': showHierarchies,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the default query.
                 **Required permission:** view work packages in the project`,
                404: `Returned if the client does not have sufficient permissions to see the project.
                 **Required permission:** any permission in the project`,
            },
        });
    }
    /**
     * View schema for project queries
     * Retrieve the schema for project queries.
     *
     * This endpoint is deprecated and replaced by ['/api/v3/workspaces/{id}/queries/schema`](https://www.openproject.org/docs/api/endpoints/queries/#view-schema-for-workspace-queries)
     * @param id Project id
     * @returns Schema_For_Workspace_QueriesModel OK
     * @throws ApiError
     */
    public viewSchemaForProjectQueries(
        id: number,
    ): CancelablePromise<Schema_For_Workspace_QueriesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/queries/schema',
            path: {
                'id': id,
            },
            errors: {
                403: `**Required permission:** view work package in the project`,
            },
        });
    }
    /**
     * List queries
     * Returns a collection of queries. The collection can be filtered via query parameters similar to how work packages are filtered. Please note however, that the filters are applied to the queries and not to the work packages the queries in turn might return.
     * @param filters JSON specifying filter conditions.
     * Currently supported filters are:
     *
     * + project: filters queries by the project they are assigned to. If the project filter is passed with the `!*` (not any) operator, global queries are returned.
     *
     * + id: filters queries based on their id
     *
     * + updated_at: filters queries based on the last time they where updated
     * @returns QueriesModel OK
     * @throws ApiError
     */
    public listQueries(
        filters?: string,
    ): CancelablePromise<QueriesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries',
            query: {
                'filters': filters,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see queries.
                 **Required permission:** view work packages or manage public queries in any project`,
            },
        });
    }
    /**
     * Create query
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     * The required fields of a Query can be found in its schema, which is embedded in the respective form.
     * Note that it is only allowed to provide properties or links supporting the write operation.
     * @param requestBody
     * @returns QueryModel Created
     * @throws ApiError
     */
    public createQuery(
        requestBody?: Query_Create_Form,
    ): CancelablePromise<QueryModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/queries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)
                 * the client provides a link to an invalid resource (\`ResourceTypeMismatch\`),
                e.g. a user, project or operator not found`,
            },
        });
    }
    /**
     * Available projects for query
     * Gets a list of projects that are available as projects a query can be assigned to.
     * @returns Available_projects_for_queryModel OK
     * @throws ApiError
     */
    public availableProjectsForQuery(): CancelablePromise<Available_projects_for_queryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/available_projects',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages`,
            },
        });
    }
    /**
     * View default query
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query.
     * @param filters JSON specifying filter conditions.
     * The filters provided as parameters are not applied to the query but are instead used to override the query's persisted filters.
     * All filters also accepted by the work packages endpoint are accepted. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param offset Page number inside the queries' result collection of work packages.
     * @param pageSize Number of elements to display per page for the queries' result collection of work packages.
     * @param sortBy JSON specifying sort criteria. The sort criteria is applied to the query's result collection of work packages overriding the query's persisted sort criteria.
     * @param groupBy The column to group by. The grouping criteria is applied to the to the query's result collection of work packages overriding the query's persisted group criteria.
     * @param showSums Indicates whether properties should be summed up if they support it. The showSums parameter is applied to the to the query's result collection of work packages overriding the query's persisted sums property.
     * @param timestamps Indicates the timestamps to filter by when showing changed attributes on work packages. Values can be either ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM", "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM". The first "HH:MM" part represents the zero paded hours and minutes. The last "+HH:MM" part represents the timezone offset from UTC associated with the time, the offset can be positive or negative e.g."oneDayAgo@01:00+01:00", "oneDayAgo@01:00-01:00". Values older than 1 day are accepted only with valid Enterprise Token available.
     *
     * @param timelineVisible Indicates whether the timeline should be shown.
     * @param timelineZoomLevel Indicates in what zoom level the timeline should be shown. Valid values are  `days`, `weeks`, `months`, `quarters`, and `years`.
     * @param showHierarchies Indicates whether the hierarchy mode should be enabled.
     * @returns Default_QueryModel OK
     * @throws ApiError
     */
    public viewDefaultQuery(
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        offset: number = 1,
        pageSize?: number,
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        timestamps: string = 'PT0S',
        timelineVisible: boolean = false,
        timelineZoomLevel: string = 'days',
        showHierarchies: boolean = true,
    ): CancelablePromise<Default_QueryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/default',
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'timestamps': timestamps,
                'timelineVisible': timelineVisible,
                'timelineZoomLevel': timelineZoomLevel,
                'showHierarchies': showHierarchies,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the default query.
                 **Required permission:** view work packages in any project`,
            },
        });
    }
    /**
     * Query Create Form
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public queryCreateForm(
        requestBody?: Query_Create_Form,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/queries/form',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * View schema for global queries
     * Retrieve the schema for global queries, those, that are not assigned to a project.
     * @returns Schema_For_Global_QueriesModel OK
     * @throws ApiError
     */
    public viewSchemaForGlobalQueries(): CancelablePromise<Schema_For_Global_QueriesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/schema',
            errors: {
                403: `**Required permission:** view work package in any project`,
            },
        });
    }
    /**
     * Delete query
     * Delete the query identified by the id parameter
     * @param id Query id
     * @returns void
     * @throws ApiError
     */
    public deleteQuery(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/queries/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** for own queries none; for public queries: manage public queries
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding query.*`,
                404: `Returned if the query does not exist or the client does not have sufficient permissions to see it.
                 **Required condition:** query belongs to user or query is public
                 **Required permission:** view work package in queries project`,
            },
        });
    }
    /**
     * View query
     * Retrieve an individual query as identified by the id parameter. Then endpoint accepts a number of parameters that can be used to override the resources' persisted parameters.
     * @param id Query id
     * @param filters JSON specifying filter conditions.
     * The filters provided as parameters are not applied to the query but are instead used to override the query's persisted filters.
     * All filters also accepted by the work packages endpoint are accepted. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param offset Page number inside the queries' result collection of work packages.
     * @param pageSize Number of elements to display per page for the queries' result collection of work packages.
     * @param columns Selected columns for the table view.
     * @param sortBy JSON specifying sort criteria. The sort criteria is applied to the query's result collection of work packages overriding the query's persisted sort criteria.
     * @param groupBy The column to group by. The grouping criteria is applied to the to the query's result collection of work packages overriding the query's persisted group criteria.
     * @param showSums Indicates whether properties should be summed up if they support it. The showSums parameter is applied to the to the query's result collection of work packages overriding the query's persisted sums property.
     * @param timestamps Indicates the timestamps to filter by when showing changed attributes on work packages. Values can be either ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM", "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM". The first "HH:MM" part represents the zero paded hours and minutes. The last "+HH:MM" part represents the timezone offset from UTC associated with the time, the offset can be positive or negative e.g."oneDayAgo@01:00+01:00", "oneDayAgo@01:00-01:00". Values older than 1 day are accepted only with valid Enterprise Token available.
     *
     * @param timelineVisible Indicates whether the timeline should be shown.
     * @param timelineLabels Overridden labels in the timeline view
     * @param highlightingMode Highlighting mode for the table view.
     * @param highlightedAttributes Highlighted attributes mode for the table view when `highlightingMode` is `inline`. When set to `[]` all highlightable attributes will be returned as `highlightedAttributes`.
     * @param showHierarchies Indicates whether the hierarchy mode should be enabled.
     * @returns QueryModel OK
     * @throws ApiError
     */
    public viewQuery(
        id: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        offset: number = 1,
        pageSize?: number,
        columns: string = '[\"type\",\"priority\"]',
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        timestamps: string = 'PT0S',
        timelineVisible: boolean = false,
        timelineLabels: string = '{}',
        highlightingMode: string = 'inline',
        highlightedAttributes: string = '[\"type\",\"priority\"]',
        showHierarchies: boolean = true,
    ): CancelablePromise<QueryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/queries/{id}',
            path: {
                'id': id,
            },
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
                'columns': columns,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'timestamps': timestamps,
                'timelineVisible': timelineVisible,
                'timelineLabels': timelineLabels,
                'highlightingMode': highlightingMode,
                'highlightedAttributes': highlightedAttributes,
                'showHierarchies': showHierarchies,
            },
            errors: {
                404: `Returned if the query does not exist or the client does not have sufficient permissions to see it.
                 **Required condition:** query belongs to user or query is public
                 **Required permission:** view work package in queries project`,
            },
        });
    }
    /**
     * Edit Query
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants to change, in the body.
     * Note that it is only allowed to provide properties or links supporting the **write** operation.
     * @param id Query id
     * @param requestBody
     * @returns QueryModel OK
     * @throws ApiError
     */
    public editQuery(
        id: number,
        requestBody?: Query_Update_Form,
    ): CancelablePromise<QueryModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/queries/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work package`,
                404: `Returned if the query does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work packages in the query's project (unless global)`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)
                 * the client provides a link to an invalid resource (\`ResourceTypeMismatch\`)`,
            },
        });
    }
    /**
     * Query Update Form
     * @param id Query id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public queryUpdateForm(
        id: number,
        requestBody?: Query_Update_Form,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/queries/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Star query
     * @param id Query id
     * @returns Star_QueryModel OK
     * @throws ApiError
     */
    public starQuery(
        id: number,
    ): CancelablePromise<Star_QueryModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/queries/{id}/star',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** for own queries none; for public queries: manage public queries
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding query.*`,
                404: `Returned if the query does not exist or the client does not have sufficient permissions to see it.
                 **Required condition:** query belongs to user or query is public
                 **Required permission:** view work package in queries project`,
            },
        });
    }
    /**
     * Unstar query
     * @param id Query id
     * @returns Unstar_QueryModel OK
     * @throws ApiError
     */
    public unstarQuery(
        id: number,
    ): CancelablePromise<Unstar_QueryModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/queries/{id}/unstar',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** for own queries none; for public queries: manage public queries
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding query.*`,
                404: `Returned if the query does not exist or the client does not have sufficient permissions to see it.
                 **Required condition:** query belongs to user or query is public
                 **Required permission:** view work package in queries project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View default query for workspace
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query. The query will already be scoped to the workspace.
     * @param id Id of the workspace the default query is requested for
     * @param filters JSON specifying filter conditions.
     * The filters provided as parameters are not applied to the query but are instead used to override the query's persisted filters.
     * All filters also accepted by the work packages endpoint are accepted. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param offset Page number inside the queries' result collection of work packages.
     * @param pageSize Number of elements to display per page for the queries' result collection of work packages.
     * @param sortBy JSON specifying sort criteria. The sort criteria is applied to the query's result collection of work packages overriding the query's persisted sort criteria.
     * @param groupBy The column to group by. The grouping criteria is applied to the to the query's result collection of work packages overriding the query's persisted group criteria.
     * @param showSums Indicates whether properties should be summed up if they support it. The showSums parameter is applied to the to the query's result collection of work packages overriding the query's persisted sums property.
     * @param timestamps Indicates the timestamps to filter by when showing changed attributes on work packages. Values can be either ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM", "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM". The first "HH:MM" part represents the zero paded hours and minutes. The last "+HH:MM" part represents the timezone offset from UTC associated with the time. Values older than 1 day are accepted only with valid Enterprise Token available.
     *
     * @param timelineVisible Indicates whether the timeline should be shown.
     * @param showHierarchies Indicates whether the hierarchy mode should be enabled.
     * @returns Default_Query_for_WorkspaceModel OK
     * @throws ApiError
     */
    public viewDefaultQueryForWorkspace(
        id: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        offset: number = 1,
        pageSize?: number,
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        timestamps: string = 'PT0S',
        timelineVisible: boolean = false,
        showHierarchies: boolean = true,
    ): CancelablePromise<Default_Query_for_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/queries/default',
            path: {
                'id': id,
            },
            query: {
                'filters': filters,
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'timestamps': timestamps,
                'timelineVisible': timelineVisible,
                'showHierarchies': showHierarchies,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the default query.
                 **Required permission:** view work packages in the workspace`,
                404: `Returned if the client does not have sufficient permissions to see the workspace.
                 **Required permission:** any permission in the workspace`,
            },
        });
    }
    /**
     * View schema for workspace queries
     * Retrieve the schema for workspace queries.
     * @param id Project id
     * @returns Schema_For_Workspace_QueriesModel OK
     * @throws ApiError
     */
    public viewSchemaForWorkspaceQueries(
        id: number,
    ): CancelablePromise<Schema_For_Workspace_QueriesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspace/{id}/queries/schema',
            path: {
                'id': id,
            },
            errors: {
                403: `**Required permission:** view work package in the workspace`,
            },
        });
    }
}
