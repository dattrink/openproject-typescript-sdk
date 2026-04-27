/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProgramCollectionModel } from '../models/ProgramCollectionModel';
import type { ProgramModel } from '../models/ProgramModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProgramsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List programs
     * Returns a collection of programs. The collection can be filtered via query parameters similar to how work packages are filtered. In addition to the provided filter, the result set is always limited to only contain programs the client is allowed to see.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * + active: based on the active property of the program
     * + ancestor: filters programs by their ancestor. A program is not considered to be its own ancestor.
     * + available_project_attributes: filters programs based on the activated project attributes.
     * + created_at: based on the time the program was created
     * + favorited: based on the favorited property of the program
     * + id: based on programs' id.
     * + latest_activity_at: based on the time the last activity was registered on a program.
     * + name_and_identifier: based on both the name and the identifier.
     * + parent_id: filters programs by their parent.
     * + principal: based on members of the program.
     * + project_phase_any: based on the project phases active in a program.
     * + project_status_code: based on status code of the program
     * + storage_id: filters programs by linked storages
     * + storage_url: filters programs by linked storages identified by the host url
     * + type_id: based on the types active in a program.
     * + user_action: based on the actions the current user has in the program.
     * + visible: based on the visibility for the user (id) provided as the filter value. This filter is useful for admins to identify the programs visible to a user.
     *
     * There might also be additional filters based on the custom fields that have been configured.
     *
     * Each defined lifecycle step will also define a filter in this list endpoint. Given that the elements are not
     * static but rather dynamically created on each OpenProject instance, a list cannot be provided. Those filters follow the schema:
     * + project_start_gate_[id]: a filter on a project phase's start gate active in a program. The id is the id of the phase the gate belongs to.
     * + project_finish_gate_[id]: a filter on a project phase's finish gate active in a program. The id is the id of the phase the gate belongs to.
     * + project_phase_[id]: a filter on a project phase active in a program. The id is the id of the phase queried for.
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
     * @returns ProgramCollectionModel OK
     * @throws ApiError
     */
    public listPrograms(
        filters?: string,
        sortBy?: string,
        select?: string,
    ): CancelablePromise<ProgramCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/programs',
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
     * View program
     * @param id Program id
     * @returns ProgramModel OK
     * @throws ApiError
     */
    public viewProgram(
        id: number,
    ): CancelablePromise<ProgramModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/programs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the program does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** any permission in the program
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a program.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Update Program
     * Updates the given program by applying the attributes provided in the body.
     * @param id Program id
     * @param requestBody
     * @returns ProgramModel OK
     * @throws ApiError
     */
    public updateProgram(
        id: number,
        requestBody?: ProgramModel,
    ): CancelablePromise<ProgramModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/programs/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit project for the program to be altered`,
                404: `Returned if the program does not exist or the client does not have sufficient permissions
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
     * Delete Program
     * Deletes the program permanently. As this is a lengthy process, the actual deletion is carried out asynchronously.
     * So the program might exist well after the request has returned successfully. To prevent unwanted changes to
     * the program scheduled for deletion, it is archived at once.
     * @param id Program id
     * @returns void
     * @throws ApiError
     */
    public deleteProgram(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/programs/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the program does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** any permission in the program
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the program cannot be deleted. This can happen when there are still references to the program in other workspaces
                that need to be severed at first.`,
            },
        });
    }
    /**
     * Program update form
     * @param id Program id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public programUpdateForm(
        id: number,
        requestBody?: Record<string, any>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/programs/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit workspace in the program`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
}
