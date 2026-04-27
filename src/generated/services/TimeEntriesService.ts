/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Available_projects_for_time_entriesModel } from '../models/Available_projects_for_time_entriesModel';
import type { TimeEntryCollectionModel } from '../models/TimeEntryCollectionModel';
import type { TimeEntryModel } from '../models/TimeEntryModel';
import type { View_time_entry_schemaModel } from '../models/View_time_entry_schemaModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TimeEntriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List time entries
     * Lists time entries. The time entries returned depend on the filters
     * provided and also on the permission of the requesting user.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     *
     * + hours: Sort by logged hours
     *
     * + spent_on: Sort by spent on date
     *
     * + created_at: Sort by time entry creation datetime
     *
     * + updated_at: Sort by the time the time entry was updated last
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported filters are:
     *
     * + entity_type: Filter time entries depending on the entity they are logged on. Can either be `WorkPackage` or `Meeting`.
     *
     * + entity_id: Filter time entries for the specified entity IDs.
     *
     * + project_id: Filter time entries by project
     *
     * + user_id: Filter time entries by users
     *
     * + ongoing: Filter to only recevie ongoing timers
     *
     * + spent_on: Filter time entries by spent on date
     *
     * + created_at: Filter time entries by creation datetime
     *
     * + updated_at: Filter time entries by the last time they where updated
     *
     * + activity_id: Filter time entries by time entry activity
     * @returns TimeEntryCollectionModel OK
     * @throws ApiError
     */
    public listTimeEntries(
        offset: number = 1,
        pageSize?: number,
        sortBy: string = '["spent_on", "asc"]',
        filters?: string,
    ): CancelablePromise<TimeEntryCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/time_entries',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client is not logged in and login is required.`,
            },
        });
    }
    /**
     * Create time entry
     * Creates a new time entry applying the attributes provided in the body.
     * Please note that while there is a fixed set of attributes, custom fields can extend
     * a time entries' attributes and are accepted by the endpoint.
     * @param requestBody
     * @returns TimeEntryModel Created
     * @throws ApiError
     */
    public createTimeEntry(
        requestBody?: TimeEntryModel,
    ): CancelablePromise<TimeEntryModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/time_entries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Log time`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Time entry update form
     * @param id Time entries activity id
     * @param requestBody Time entries activity id
     * @returns any OK
     * @throws ApiError
     */
    public timeEntryUpdateForm(
        id: number,
        requestBody: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/time_entries/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions to edit the time entry.
                 **Required permission:** *edit time entries* for every time entry of a project, or *edit own time entries* for time entries belonging to the user.`,
                404: `Returned if the time entry does not exist or if the client does not have sufficient permissions to view it.
                 **Required permission** \`view time entries\` in the project the time entry is assigned to or \`view own time entries\` for time entries belonging to the user`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Available projects for time entries
     * Gets a list of projects in which a time entry can be created in or be assigned to on update. The list contains all projects in which the user issuing the request has the necessary permissions.
     * @returns Available_projects_for_time_entriesModel OK
     * @throws ApiError
     */
    public availableProjectsForTimeEntries(): CancelablePromise<Available_projects_for_time_entriesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/time_entries/available_projects',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** *log time*, *edit time entries* or *edit own time entries* in any project`,
            },
        });
    }
    /**
     * Time entry create form
     * @returns any OK
     * @throws ApiError
     */
    public timeEntryCreateForm(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/time_entries/form',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** *log time* in any project`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View time entry schema
     * @returns View_time_entry_schemaModel OK
     * @throws ApiError
     */
    public viewTimeEntrySchema(): CancelablePromise<View_time_entry_schemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/time_entries/schema',
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the schema.
                 **Required permission:** *log time* or *view time entries* or *edit time entries* or *edit own time entries* on any project`,
            },
        });
    }
    /**
     * Delete time entry
     * Permanently deletes the specified time entry.
     * @param id Time entry id
     * @returns void
     * @throws ApiError
     */
    public deleteTimeEntry(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/time_entries/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions`,
                404: `Returned if the time entry does not exist or if the user does not have sufficient permissions to see the time entry.
                 **Required permission** \`view time entries\` in the project the time entry is assigned to or \`view own time entries\` for time entries belonging to the user`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Get time entry
     * Retrieves a single time entry identified by the given id.
     * @param id time entry id
     * @returns TimeEntryModel OK
     * @throws ApiError
     */
    public getTimeEntry(
        id: number,
    ): CancelablePromise<TimeEntryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/time_entries/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the time entry does not exist or if the user does not have permission to view them.
                 **Required permission**
                - \`view time entries\` in the project the time entry is assigned to or
                - \`view own time entries\` for time entries belonging to the user`,
            },
        });
    }
    /**
     * update time entry
     * Updates the given time entry by applying the attributes provided in
     * the body. Please note that while there is a fixed set of attributes, custom fields
     * can extend a time entries' attributes and are accepted by the endpoint.
     * @param id Time entry id
     * @returns TimeEntryModel OK
     * @throws ApiError
     */
    public updateTimeEntry(
        id: number,
    ): CancelablePromise<TimeEntryModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/time_entries/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Edit (own) time entries, depending on what time entry is being modified.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
}
