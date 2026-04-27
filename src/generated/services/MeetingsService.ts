/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeetingCollectionModel } from '../models/MeetingCollectionModel';
import type { MeetingModel } from '../models/MeetingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MeetingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all visible meetings
     * Retrieve a paginated collection of meetings visible to the authenticated user.
     * @returns MeetingCollectionModel OK
     * @throws ApiError
     */
    public listMeetings(): CancelablePromise<MeetingCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/meetings',
        });
    }
    /**
     * Get a meeting
     * Retrieve an individual meeting as identified by the id parameter
     * @param id Meeting identifier
     * @returns MeetingModel OK
     * @throws ApiError
     */
    public getMeeting(
        id: number,
    ): CancelablePromise<MeetingModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/meetings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the meeting does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view meetings in the page's project`,
            },
        });
    }
}
