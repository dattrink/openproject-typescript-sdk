/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Available_projects_for_versionsModel } from '../models/Available_projects_for_versionsModel';
import type { Version_schemaModel } from '../models/Version_schemaModel';
import type { VersionCollectionModel } from '../models/VersionCollectionModel';
import type { VersionReadModel } from '../models/VersionReadModel';
import type { Versions_by_WorkspaceModel } from '../models/Versions_by_WorkspaceModel';
import type { VersionWriteModel } from '../models/VersionWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VersionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List versions available in a project
     * This endpoint lists the versions that are *available* in a given project.
     * Note that due to sharing this might be more than the versions *defined* by that project.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/versions`](https://www.openproject.org/docs/api/endpoints/versions/#list-versions-available-in-a-workspace)
     * @param id ID of the project whose versions will be listed
     * @returns Versions_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listVersionsAvailableInAProject(
        id: number,
    ): CancelablePromise<Versions_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/versions',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (on given project)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List versions
     * Returns a collection of versions. The client can choose to filter the versions similar to how work packages are
     * filtered. In addition to the provided filters, the server will reduce the result set to only contain versions,
     * for which the requesting client has sufficient permissions (*view_work_packages*).
     * @param filters JSON specifying filter conditions. Accepts the same format as returned by
     * the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported
     * filters are:
     *
     * - sharing: filters versions by how they are shared within the server (*none*, *descendants*, *hierarchy*, *tree*, *system*).
     * - name: filters versions by their name.
     * @param sortBy JSON specifying sort criteria. Accepts the same format as returned by
     * the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported
     * attributes are:
     *
     * - id: Sort by the version id
     * - name: Sort by the version name using numeric collation, comparing sequences of decimal digits by their numeric value
     * @returns VersionCollectionModel OK
     * @throws ApiError
     */
    public listVersions(
        filters?: string,
        sortBy?: string,
    ): CancelablePromise<VersionCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions',
            query: {
                'filters': filters,
                'sortBy': sortBy,
            },
        });
    }
    /**
     * Create version
     * Creates a new version applying the attributes provided in the body. Please note that while there is a fixed set
     * of attributes, custom fields can extend a version's attributes and are accepted by the endpoint.
     *
     * You can use the form and schema to be retrieve the valid attribute values and by that be guided towards
     * successful creation.
     * @param requestBody
     * @returns VersionReadModel Created
     * @throws ApiError
     */
    public createVersion(
        requestBody?: VersionWriteModel,
    ): CancelablePromise<VersionReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/versions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Manage versions`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Available projects for versions
     * Gets a list of projects in which a version can be created in. The list contains all projects in which the user issuing the request has the manage versions permissions.
     * @returns Available_projects_for_versionsModel OK
     * @throws ApiError
     */
    public availableProjectsForVersions(): CancelablePromise<Available_projects_for_versionsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions/available_projects',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage versions`,
            },
        });
    }
    /**
     * Version create form
     * @returns any OK
     * @throws ApiError
     */
    public versionCreateForm(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/versions/form',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage versions in any project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View version schema
     * @returns Version_schemaModel OK
     * @throws ApiError
     */
    public viewVersionSchema(): CancelablePromise<Version_schemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions/schema',
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the schema.
                 **Required permission:** view work packages or manage versions on any project`,
            },
        });
    }
    /**
     * Get version
     * Retrieves a version defined by its unique identifier.
     * @param id Version id
     * @returns VersionReadModel OK
     * @throws ApiError
     */
    public getVersion(
        id: number,
    ): CancelablePromise<VersionReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/versions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the version does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (any project where the version is available)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Delete version
     * Deletes the version. Entities associated to the version will no longer be assigned to it.
     * @param id Version id
     * @returns void
     * @throws ApiError
     */
    public deleteVersion(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/versions/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage versions`,
                404: `Returned if the version does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (any project where the version is available)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Update Version
     * Updates the given version by applying the attributes provided in the body. Please note that while there is a fixed
     * set of attributes, custom fields can extend a version's attributes and are accepted by the endpoint.
     * @param id Version id
     * @param requestBody
     * @returns VersionReadModel OK
     * @throws ApiError
     */
    public updateVersion(
        id: number,
        requestBody?: VersionWriteModel,
    ): CancelablePromise<VersionReadModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/versions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Manage versions in the version's project.`,
                404: `Returned if the version does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (any project where the version is available)
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
     * Version update form
     * @param id Project id
     * @returns any OK
     * @throws ApiError
     */
    public versionUpdateForm(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/versions/{id}/form',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage versions in the version's project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * List versions available in a workspace
     * This endpoint lists the versions that are *available* in a given workspace.
     * Note that due to sharing this might be more than the versions *defined* by that workspace.
     * @param id ID of the workspace whose versions will be listed
     * @returns Versions_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listVersionsAvailableInAWorkspace(
        id: number,
    ): CancelablePromise<Versions_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/versions',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages **or** manage versions (on given workspace)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a workspace.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
