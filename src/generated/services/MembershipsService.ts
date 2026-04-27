/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembershipCollectionModel } from '../models/MembershipCollectionModel';
import type { MembershipFormModel } from '../models/MembershipFormModel';
import type { MembershipReadModel } from '../models/MembershipReadModel';
import type { MembershipSchemaModel } from '../models/MembershipSchemaModel';
import type { MembershipWriteModel } from '../models/MembershipWriteModel';
import type { ProjectCollectionModel } from '../models/ProjectCollectionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MembershipsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List memberships
     * Returns a collection of memberships. The client can choose to filter
     * the memberships similar to how work packages are filtered. In addition to the
     * provided filters, the server will reduce the result set to only contain memberships,
     * for which the requesting client has sufficient permissions (*view_members*, *manage_members*).
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + any_name_attribute: filters memberships based on the name of the principal. All possible name variants
     * (and also email and login) are searched.
     * + blocked: reduces the result set to all memberships that are temporarily blocked or that are not blocked
     * temporarily.
     * + group: filters memberships based on the name of a group. The group however is not the principal used for
     * filtering. Rather, the memberships of the group are used as the filter values.
     * + name: filters memberships based on the name of the principal. Note that only the name is used which depends
     * on a setting in the OpenProject instance.
     * + principal: filters memberships based on the id of the principal.
     * + project: filters memberships based on the id of the project.
     * + role: filters memberships based on the id of any role assigned to the membership.
     * + status: filters memberships based on the status of the principal.
     * + created_at: filters memberships based on the time the membership was created.
     * + updated_at: filters memberships based on the time the membership was updated last.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     * + name: Sort by the name of the principal. Note that this depends on the setting for how the name is to be
     * displayed at least for users.
     * + email: Sort by the email address of the principal. Groups and principal users, which do not have an email,
     * are sorted last.
     * + status: Sort by the status of the principal. Groups and principal users, which do not have a status, are
     * sorted together with the active users.
     * + created_at: Sort by membership creation datetime
     * + updated_at: Sort by the time the membership was updated last
     * @returns MembershipCollectionModel OK
     * @throws ApiError
     */
    public listMemberships(
        filters?: string,
        sortBy: string = '[["id", "asc"]]',
    ): CancelablePromise<MembershipCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/memberships',
            query: {
                'filters': filters,
                'sortBy': sortBy,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
                403: `Returned if the client is not logged in and login is required.`,
            },
        });
    }
    /**
     * Create a membership
     * Creates a new membership applying the attributes provided in the body.
     *
     * You can use the form and schema to retrieve the valid attribute values and by that be guided towards successful
     * creation.
     *
     * By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized
     * message to the user of the newly created membership. In case of a group, the message will be sent to every user
     * belonging to the group.
     *
     * By including `{ "sendNotifications": false }` within the `_meta` block of the payload, no notifications is send
     * out at all.
     * @param requestBody
     * @returns MembershipReadModel Created
     * @throws ApiError
     */
    public createMembership(
        requestBody?: MembershipWriteModel,
    ): CancelablePromise<MembershipReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/memberships',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Manage members`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                - a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Available projects for memberships
     * Gets a list of projects in which a membership can be created in. The list contains all projects in which the user
     * issuing the request has the manage members permissions.
     * @returns ProjectCollectionModel OK
     * @throws ApiError
     */
    public getMembershipsAvailableProjects(): CancelablePromise<ProjectCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/memberships/available_projects',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage members`,
            },
        });
    }
    /**
     * Form create membership
     * Requests and validates the creation form for memberships. The request payload, if sent, is validated. The form
     * endpoint itself does not create a membership.
     * @param requestBody
     * @returns MembershipFormModel OK
     * @throws ApiError
     */
    public formCreateMembership(
        requestBody?: MembershipWriteModel,
    ): CancelablePromise<MembershipFormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/memberships/form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage memberships in any project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Schema membership
     * Retrieves the schema for the membership resource object.
     * @returns MembershipSchemaModel OK
     * @throws ApiError
     */
    public getMembershipSchema(): CancelablePromise<MembershipSchemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/memberships/schema',
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the schema.
                 **Required permission:** manage members or view memberships on any project`,
            },
        });
    }
    /**
     * Delete membership
     * Deletes the membership.
     * @param id Membership id
     * @returns void
     * @throws ApiError
     */
    public deleteMembership(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/memberships/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage members`,
                404: `Returned if the membership does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view members
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a version. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Get a membership
     * Retrieves a membership resource identified by the given id.
     * @param id Membership id
     * @returns MembershipReadModel OK
     * @throws ApiError
     */
    public getMembership(
        id: number,
    ): CancelablePromise<MembershipReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/memberships/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the membership does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view members **or** manage members
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a membership. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Update membership
     * Updates the given membership by applying the attributes provided in the body.
     *
     * By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized message to the user
     * of the updated membership. In case of a group, the message will be sent to every user belonging to the group.
     *
     * By including `{ "sendNotifications": false }` within the `_meta` block of the payload, no notifications is send out at all.
     * @param id Membership id
     * @param requestBody
     * @returns MembershipReadModel OK
     * @throws ApiError
     */
    public updateMembership(
        id: number,
        requestBody?: MembershipWriteModel,
    ): CancelablePromise<MembershipReadModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/memberships/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Manage members in the membership's project.`,
                404: `Returned if the membership does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view member
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
     * Form update membership
     * Requests and validates the update form for a membership identified by the given id. The request payload, if sent,
     * is validated. The form endpoint itself does not change the membership.
     * @param id Membership id
     * @param requestBody
     * @returns MembershipReadModel OK
     * @throws ApiError
     */
    public formUpdateMembership(
        id: number,
        requestBody?: MembershipWriteModel,
    ): CancelablePromise<MembershipReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/memberships/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage versions in the version's project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
}
