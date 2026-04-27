/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { List_available_parent_project_candidatesModel } from '../models/List_available_parent_project_candidatesModel';
import type { List_workspaces_by_versionModel } from '../models/List_workspaces_by_versionModel';
import type { ProjectCollectionModel } from '../models/ProjectCollectionModel';
import type { ProjectConfigurationModel } from '../models/ProjectConfigurationModel';
import type { ProjectModel } from '../models/ProjectModel';
import type { View_project_statusModel } from '../models/View_project_statusModel';
import type { Workspaces_schemaModel } from '../models/Workspaces_schemaModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List projects
     * Returns a collection of projects. The collection can be filtered via query parameters similar to how work packages are filtered. In addition to the provided filter, the result set is always limited to only contain projects the client is allowed to see.
     * Prior to OpenProject 17.0, only projects existed and the concept of workspaces wasn't implemented in the API. With 17.0 the other workspace types (program and portfolio) exist and will be returned alongside projects by this endpoint. This might surprise typed clients.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * + active: based on the active property of the project
     * + ancestor: filters projects by their ancestor. A project is not considered to be its own ancestor.
     * + available_project_attributes: filters projects based on the activated project project attributes.
     * + created_at: based on the time the project was created
     * + favorited: based on the favorited property of the project
     * + id: based on projects' id.
     * + latest_activity_at: based on the time the last activity was registered on a project.
     * + name_and_identifier: based on both the name and the identifier.
     * + parent_id: filters projects by their parent.
     * + principal: based on members of the project.
     * + project_phase_any: based on the project phases active in a project.
     * + project_status_code: based on status code of the project
     * + storage_id: filters projects by linked storages
     * + storage_url: filters projects by linked storages identified by the host url
     * + type_id: based on the types active in a project.
     * + user_action: based on the actions the current user has in the project.
     * + visible: based on the visibility for the user (id) provided as the filter value. This filter is useful for admins to identify the projects visible to a user.
     *
     * There might also be additional filters based on the custom fields that have been configured.
     *
     * Each defined lifecycle step will also define a filter in this list endpoint. Given that the elements are not
     * static but rather dynamically created on each OpenProject instance, a list cannot be provided. Those filters follow the schema:
     * + project_start_gate_[id]: a filter on a project phase's start gate active in a project. The id is the id of the phase the gate belongs to.
     * + project_finish_gate_[id]: a filter on a project phase's finish gate active in a project. The id is the id of the phase the gate belongs to.
     * + project_phase_[id]: a filter on a project phase active in a project. The id is the id of the phase queried for.
     * @param sortBy JSON specifying sort criteria.
     * Currently supported orders are:
     *
     * + id
     * + name
     * + typeahead (sorting by hierarchy and name)
     * + created_at
     * + public
     * + latest_activity_at
     * + required_disk_space
     *
     * There might also be additional orders based on the custom fields that have been configured.
     * @param select Comma separated list of properties to include.
     * @returns ProjectCollectionModel OK
     * @throws ApiError
     */
    public listProjects(
        filters?: string,
        sortBy?: string,
        select?: string,
    ): CancelablePromise<ProjectCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects',
            query: {
                'filters': filters,
                'sortBy': sortBy,
                'select': select,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * Create project
     * Creates a new project, applying the attributes provided in the body.
     *
     * You can use the form and schema to be retrieve the valid attribute values and by that be guided towards successful creation.
     * @param requestBody
     * @returns ProjectModel Created
     * @throws ApiError
     */
    public createProject(
        requestBody?: ProjectModel,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add project which is a global permission`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Project create form
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public projectCreateForm(
        requestBody?: Record<string, any>,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add project which is a global permission`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View project schema
     * Provides the schema describing a project resource.
     * This endpoint is deprecated. As projects are workspaces, an equivalent schema can be found fetching `/api/v3/workspaces/schema`.
     * @returns Workspaces_schemaModel OK
     * @throws ApiError
     */
    public viewProjectSchema(): CancelablePromise<Workspaces_schemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/schema',
        });
    }
    /**
     * Delete Project
     * Deletes the project permanently. As this is a lengthy process, the actual deletion is carried out asynchronously.
     * So the project might exist well after the request has returned successfully. To prevent unwanted changes to
     * the project scheduled for deletion, it is archived at once.
     * @param id Project id
     * @returns void
     * @throws ApiError
     */
    public deleteProject(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/projects/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** any permission in the project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the project cannot be deleted. This can happen when there are still references to the project in other workspaces
                that need to be severed at first.`,
            },
        });
    }
    /**
     * View project
     * @param id Project id
     * @returns ProjectModel OK
     * @throws ApiError
     */
    public viewProject(
        id: number,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Update Project
     * Updates the given project by applying the attributes provided in the body.
     * @param id Project id
     * @param requestBody
     * @returns ProjectModel OK
     * @throws ApiError
     */
    public updateProject(
        id: number,
        requestBody?: ProjectModel,
    ): CancelablePromise<ProjectModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/projects/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit project for the project to be altered`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Project update form
     * @param id Project id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public projectUpdateForm(
        id: number,
        requestBody?: Record<string, any>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit projects in the project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Create project copy
     * @param id Project id
     * @returns void
     * @throws ApiError
     */
    public createProjectCopy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/copy',
            path: {
                'id': id,
            },
            errors: {
                302: `Returned if the request is successful. It will redirect to the job statuses API with the backend job that got created. You can query that endpoint to check the status of the copy, and eventually get the created project.`,
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** copy projects in the source project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Project copy form
     * @param id Project id
     * @returns any OK
     * @throws ApiError
     */
    public projectCopyForm(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/copy/form',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** copy projects in the source project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View project status
     * @param id Project status id
     * @returns View_project_statusModel OK
     * @throws ApiError
     */
    public viewProjectStatus(
        id: string,
    ): CancelablePromise<View_project_statusModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_statuses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project status does not exist.`,
            },
        });
    }
    /**
     * List available parent project candidates
     * Lists projects which can become parent to another project. Only sound candidates are returned.
     * For instance a project cannot become parent of itself or its children.
     *
     * To specify the project for which a parent is queried for, the `of` parameter can be provided. If no `of`
     * parameter is provided, a new project is assumed. Then, the check for the hierarchy is omitted as a new project cannot be
     * part of a hierarchy yet, instead `workspace_type` parameter can be passed defining it for new project.
     *
     * Candidates can be filtered. Most commonly one will want to filter by name or identifier.
     * You can do this through the `filters` parameter which works just like the work package index.
     *
     * For instance to find all parent candidates with "rollout" in their name:
     *
     * ```
     * ?filters=[{"name_and_identifier":{"operator":"~","values":["rollout"]}}]
     * ```
     * @param filters JSON specifying filter conditions.
     * @param of The id or identifier of the project the parent candidate is determined for
     * @param workspaceType The workspace type of the new project the parent candidate is determined for. Ignored when `of` parameter is provided.
     * Note that while 'portfolio' is supported as a type (since it is a type of Workspace), the endpoint will currently always return an empty resultset as portfolios cannot have parents.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint and allows all the filters and sortBy supported by the project list endpoint.
     * @returns List_available_parent_project_candidatesModel OK
     * @throws ApiError
     */
    public listAvailableParentProjectCandidates(
        filters?: string,
        of?: string,
        workspaceType?: 'project' | 'program' | 'portfolio',
        sortBy?: string,
    ): CancelablePromise<List_available_parent_project_candidatesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/available_parent_projects',
            query: {
                'filters': filters,
                'of': of,
                'workspace_type': workspaceType,
                'sortBy': sortBy,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit project in a project or the global add project permission`,
            },
        });
    }
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
     * View project configuration
     * Returns the configuration scoped to a specific project, including all global
     * configuration properties plus project-specific settings.
     * @param id Project id
     * @returns ProjectConfigurationModel OK
     * @throws ApiError
     */
    public viewProjectConfiguration(
        id: number,
    ): CancelablePromise<ProjectConfigurationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/configuration',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the user cannot view it.`,
            },
        });
    }
    /**
     * List projects having version
     * This endpoint lists the projects where the given version is available.
     *
     * The projects returned depend on the sharing settings of the given version,
     * but are also limited to the projects that the current user is allowed to see.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/versions/{id}/workspaces`](https://www.openproject.org/docs/api/endpoints/projects/#list-workspaces-having-version)
     * @param id Version id
     * @returns List_workspaces_by_versionModel OK
     * @throws ApiError
     */
    public listProjectsWithVersion(
        id: number,
    ): CancelablePromise<List_workspaces_by_versionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions/{id}/projects',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the version does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (any project where the given version is available)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a version.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List workspaces having version
     * This endpoint lists the workspaces where the given version is available.
     *
     * The workspaces returned depend on the sharing settings of the given version,
     * but are also limited to the workspaces that the current user is allowed to see.
     * @param id Version id
     * @returns List_workspaces_by_versionModel OK
     * @throws ApiError
     */
    public listWorkspacesWithVersion(
        id: number,
    ): CancelablePromise<List_workspaces_by_versionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions/{id}/workspaces',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the version does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (any workspace where the given version is available)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a version.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
