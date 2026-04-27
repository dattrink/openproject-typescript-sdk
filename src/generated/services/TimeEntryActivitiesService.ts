/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeEntryActivityModel } from '../models/TimeEntryActivityModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TimeEntryActivitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View time entries activity
     * Fetches the time entry activity resource by the given id.
     * @param id Time entries activity id
     * @returns TimeEntryActivityModel OK
     * @throws ApiError
     */
    public getTimeEntriesActivity(
        id: number,
    ): CancelablePromise<TimeEntryActivityModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/time_entries/activity/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the activity does not exist or if the user does not have permission to view them.
                 **Required permission** \`view time entries\`, \`log time\`, \`edit time entries\`, \`edit own time entries\` or
                \`manage project activities\` in any project`,
            },
        });
    }
}
