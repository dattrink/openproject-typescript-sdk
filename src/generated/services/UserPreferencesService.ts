/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreferencesModel } from '../models/UserPreferencesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserPreferencesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Show my preferences
     * @returns UserPreferencesModel OK
     * @throws ApiError
     */
    public showMyPreferences(): CancelablePromise<UserPreferencesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/my_preferences',
            errors: {
                401: `Returned if no user is currently authenticated`,
            },
        });
    }
    /**
     * Update my preferences
     * When calling this endpoint the client provides a single object, containing the properties that it wants to change, in the body.
     * @param requestBody
     * @returns UserPreferencesModel OK
     * @throws ApiError
     */
    public updateUserPreferences(
        requestBody?: {
            autoHidePopups?: boolean;
            timeZone?: string;
        },
    ): CancelablePromise<UserPreferencesModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/my_preferences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                401: `Returned if no user is currently authenticated`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the update contains invalid properties.
                Reasons are:
                 * Specifying an invalid type
                 * Using an unknown time zone`,
            },
        });
    }
}
