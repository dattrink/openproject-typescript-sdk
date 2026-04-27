/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReminderModel } from '../models/ReminderModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RemindersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all active reminders
     * Gets a list of all active reminders for the user.
     * @returns any OK
     * @throws ApiError
     */
    public listReminders(): CancelablePromise<{
        _type: 'Collection';
        /**
         * The total amount of elements available in the collection.
         */
        total: number;
        /**
         * Actual amount of elements in this response.
         */
        count: number;
        _embedded: {
            elements: Array<ReminderModel>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/reminders',
        });
    }
    /**
     * Update a reminder
     * Updates an existing reminder.
     *
     * A user can only update their own active reminder.
     *
     * **Required permission:** view work packages for the project the reminder is contained in.
     * @param id Reminder ID
     * @param requestBody
     * @returns ReminderModel Reminder updated successfully
     * @throws ApiError
     */
    public updateReminder(
        id: number,
        requestBody: {
            /**
             * The date and time when the reminder is due
             */
            remindAt?: string;
            /**
             * The note of the reminder (optional)
             */
            note?: string;
        },
    ): CancelablePromise<ReminderModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/reminders/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the reminder does not exist or the client does not have sufficient permissions to see it.`,
            },
        });
    }
    /**
     * Delete a reminder
     * Deletes an existing reminder.
     *
     * A user can only delete their own active reminder.
     *
     * **Required permission:** view work packages for the project the reminder is contained in.
     * @param id Reminder ID
     * @returns void
     * @throws ApiError
     */
    public deleteReminder(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/reminders/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the reminder does not exist or the client does not have sufficient permissions to see it.`,
            },
        });
    }
    /**
     * List work package reminders
     * Gets a list of your upcoming reminders for this work package.
     *
     * Only active reminders that belong to the current user are returned.
     * @param workPackageId Work package id
     * @returns any OK
     * @throws ApiError
     */
    public listWorkPackageReminders(
        workPackageId: number,
    ): CancelablePromise<{
        _type: 'Collection';
        /**
         * The total amount of elements available in the collection.
         */
        total: number;
        /**
         * Actual amount of elements in this response.
         */
        count: number;
        _embedded: {
            elements: Array<ReminderModel>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{work_package_id}/reminders',
            path: {
                'work_package_id': workPackageId,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages for the project the work package is contained in.`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Create a work package reminder
     * Creates a new reminder for the specified work package.
     *
     * **Note:** A user can only have one **active** reminder at a time for a given work package.
     * @param workPackageId Work package id
     * @param requestBody
     * @returns ReminderModel Reminder created successfully
     * @throws ApiError
     */
    public createWorkPackageReminder(
        workPackageId: number,
        requestBody: {
            /**
             * The date and time when the reminder is due
             */
            remindAt: string;
            /**
             * The note of the reminder
             */
            note?: string;
        },
    ): CancelablePromise<ReminderModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{work_package_id}/reminders',
            path: {
                'work_package_id': workPackageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                409: `Returned if the user already has an active reminder for this work package.
                 **Error message**: You can only set one reminder at a time for a work package. Please delete or update the existing reminder.`,
            },
        });
    }
}
