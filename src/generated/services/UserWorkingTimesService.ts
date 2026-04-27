/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserNonWorkingTimeCollectionModel } from '../models/UserNonWorkingTimeCollectionModel';
import type { UserNonWorkingTimeModel } from '../models/UserNonWorkingTimeModel';
import type { UserWorkingHoursCollectionModel } from '../models/UserWorkingHoursCollectionModel';
import type { UserWorkingHoursModel } from '../models/UserWorkingHoursModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserWorkingTimesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List personal non-working times for a user
     * Returns all personal non-working times for the given user, ordered by start date ascending.
     *
     * Personal non-working times mark date ranges as non-working for a user
     * (e.g., a local holiday or personal day off not covered by the system-wide non-working days).
     *
     * **Required permissions:**
     * - Administrators can view non-working days for any user.
     * - Users with the global `manage_own_working_times` permission can view their own records.
     * - Users with the global `manage_working_times` permission can view non-working days for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param year Filter results to the given year. Defaults to the current year if not provided.
     * @returns UserNonWorkingTimeCollectionModel OK
     * @throws ApiError
     */
    public listUserNonWorkingTimes(
        id: string,
        year?: number,
    ): CancelablePromise<UserNonWorkingTimeCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users/{id}/non_working_times',
            path: {
                'id': id,
            },
            query: {
                'year': year,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                404: `Returned if the user does not exist or is not visible to the requesting user.`,
            },
        });
    }
    /**
     * Create a personal non-working day for a user
     * Creates a personal non-working time range for the given user.
     *
     * The date range must not overlap with an existing non-working time record for the same user.
     *
     * **Required permissions:**
     * - Administrators can create non-working days for any user.
     * - Users with the global `manage_own_working_times` permission can create records for themselves.
     * - Users with the global `manage_working_times` permission can create non-working days for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param requestBody
     * @returns UserNonWorkingTimeModel Created
     * @throws ApiError
     */
    public createUserNonWorkingTime(
        id: string,
        requestBody?: UserNonWorkingTimeModel,
    ): CancelablePromise<UserNonWorkingTimeModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/users/{id}/non_working_times',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user does not exist or is not visible to the requesting user.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the request body contains invalid parameters, or if the date range
                overlaps with an existing non-working time record for the user.`,
            },
        });
    }
    /**
     * View a personal non-working time record
     * Returns a single personal non-working time record for the given user.
     *
     * **Required permissions:**
     * - Administrators can view non-working time records for any user.
     * - Users with the global `manage_own_working_times` permission can view their own records.
     * - Users with the global `manage_working_times` permission can view non-working time records for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param nonWorkingTimeId The id of the personal non-working time record.
     * @returns UserNonWorkingTimeModel OK
     * @throws ApiError
     */
    public viewUserNonWorkingTime(
        id: string,
        nonWorkingTimeId: number,
    ): CancelablePromise<UserNonWorkingTimeModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users/{id}/non_working_times/{non_working_time_id}',
            path: {
                'id': id,
                'non_working_time_id': nonWorkingTimeId,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                404: `Returned if the user or non-working time record does not exist,
                or if the requesting user does not have permission to view it.`,
            },
        });
    }
    /**
     * Update a personal non-working time record
     * Updates the given personal non-working time record.
     *
     * **Required permissions:**
     * - Administrators can update non-working time records for any user.
     * - Users with the global `manage_own_working_times` permission can update their own records.
     * - Users with the global `manage_working_times` permission can update non-working time records for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param nonWorkingTimeId The id of the personal non-working time record.
     * @param requestBody
     * @returns UserNonWorkingTimeModel OK
     * @throws ApiError
     */
    public updateUserNonWorkingTime(
        id: string,
        nonWorkingTimeId: number,
        requestBody?: UserNonWorkingTimeModel,
    ): CancelablePromise<UserNonWorkingTimeModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/users/{id}/non_working_times/{non_working_time_id}',
            path: {
                'id': id,
                'non_working_time_id': nonWorkingTimeId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user or non-working time record does not exist,
                or if the requesting user does not have permission to view it.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the request body contains invalid parameters, or if the date range
                overlaps with an existing non-working time record for the user.`,
            },
        });
    }
    /**
     * Delete a personal non-working time record
     * Removes the personal non-working time record for the given user.
     *
     * **Required permissions:**
     * - Administrators can delete non-working time records for any user.
     * - Users with the global `manage_own_working_times` permission can delete their own records.
     * - Users with the global `manage_working_times` permission can delete non-working time records for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param nonWorkingTimeId The id of the personal non-working time record.
     * @returns void
     * @throws ApiError
     */
    public deleteUserNonWorkingTime(
        id: string,
        nonWorkingTimeId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/users/{id}/non_working_times/{non_working_time_id}',
            path: {
                'id': id,
                'non_working_time_id': nonWorkingTimeId,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user or non-working time record does not exist,
                or if the requesting user does not have permission to view it.`,
            },
        });
    }
    /**
     * List working hours for a user
     * Returns all working hours records for the given user, ordered by `validFrom` descending.
     *
     * Multiple records may exist for a user; each represents a period of their working time
     * configuration. The most recently effective record (the one with the latest `validFrom`
     * that is not in the future) is used for capacity calculations.
     *
     * **Required permissions:**
     * - Administrators can view working hours for any user.
     * - Users with the global `manage_working_times` permission can view working hours for any user.
     * - Any user can view their own working hours records.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @returns UserWorkingHoursCollectionModel OK
     * @throws ApiError
     */
    public listUserWorkingHours(
        id: string,
    ): CancelablePromise<UserWorkingHoursCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users/{id}/working_hours',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                404: `Returned if the user does not exist or is not visible to the requesting user.`,
            },
        });
    }
    /**
     * Create a working hours record for a user
     * Creates a new working hours record for the given user, effective from the given date.
     *
     * **Required permissions:**
     * - Administrators can create working hours records for any user.
     * - Users with the global `manage_own_working_times` permission can create records for themselves.
     * - Users with the global `manage_working_times` permission can create working hours records for any user.
     *
     * Use `me` as the `id` to reference the current user.
     * @param id User id. Use `me` to reference the current user.
     * @param requestBody
     * @returns UserWorkingHoursModel Created
     * @throws ApiError
     */
    public createUserWorkingHours(
        id: string,
        requestBody?: UserWorkingHoursModel,
    ): CancelablePromise<UserWorkingHoursModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/users/{id}/working_hours',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user does not exist or is not visible to the requesting user.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the request body contains invalid parameters.`,
            },
        });
    }
    /**
     * View a working hours record
     * Returns a single working hours record for the given user.
     *
     * **Required permissions:**
     * - Administrators can view working hours records for any user.
     * - Users with the global `manage_working_times` permission can view working hours for any user.
     * - Any user can view their own working hours records.
     * @param id User id.
     * @param workingHoursId Working hours record id.
     * @returns UserWorkingHoursModel OK
     * @throws ApiError
     */
    public viewUserWorkingHoursRecord(
        id: number,
        workingHoursId: number,
    ): CancelablePromise<UserWorkingHoursModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users/{id}/working_hours/{working_hours_id}',
            path: {
                'id': id,
                'working_hours_id': workingHoursId,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                404: `Returned if the user or working hours record does not exist,
                or if the requesting user does not have permission to view it.`,
            },
        });
    }
    /**
     * Update a working hours record
     * Updates the given working hours record.
     *
     * Only records that have not yet taken effect (i.e., `validFrom` is in the future) can be
     * updated. Attempting to update a record that is already in effect will return a `422` error.
     *
     * **Required permissions:**
     * - Administrators can update working hours records for any user.
     * - Users with the global `manage_own_working_times` permission can update their own records.
     * - Users with the global `manage_working_times` permission can update working hours for any user.
     * @param id User id.
     * @param workingHoursId Working hours record id.
     * @param requestBody
     * @returns UserWorkingHoursModel OK
     * @throws ApiError
     */
    public updateUserWorkingHoursRecord(
        id: number,
        workingHoursId: number,
        requestBody?: UserWorkingHoursModel,
    ): CancelablePromise<UserWorkingHoursModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/users/{id}/working_hours/{working_hours_id}',
            path: {
                'id': id,
                'working_hours_id': workingHoursId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user or working hours record does not exist,
                or if the requesting user does not have permission to view it.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the request body contains invalid parameters, or if the record has
                already taken effect and cannot be modified.`,
            },
        });
    }
    /**
     * Delete a working hours record
     * Deletes the given working hours record.
     *
     * **Required permissions:**
     * - Administrators can delete working hours records for any user.
     * - Users with the global `manage_own_working_times` permission can delete their own records.
     * - Users with the global `manage_working_times` permission can delete working hours records for any user.
     * @param id User id.
     * @param workingHoursId Working hours record id.
     * @returns void
     * @throws ApiError
     */
    public deleteUserWorkingHoursRecord(
        id: number,
        workingHoursId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/users/{id}/working_hours/{working_hours_id}',
            path: {
                'id': id,
                'working_hours_id': workingHoursId,
            },
            errors: {
                401: `Returned if the client is not authenticated.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_working_times\` globally (for other users) or
                \`manage_own_working_times\` globally (for own records).`,
                404: `Returned if the user or working hours record does not exist,
                or if the requesting user does not have permission to view it.`,
            },
        });
    }
}
