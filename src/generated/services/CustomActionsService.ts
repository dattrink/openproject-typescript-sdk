/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomActionModel } from '../models/CustomActionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomActionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a custom action
     * Retrieves a custom action by id.
     * @param id The id of the custom action to fetch
     * @returns CustomActionModel OK
     * @throws ApiError
     */
    public getCustomAction(
        id: number,
    ): CancelablePromise<CustomActionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/custom_actions/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work packages in any project`,
                404: `Returned if the custom action does not exist.`,
            },
        });
    }
    /**
     * Execute custom action
     * A POST to this endpoint executes the custom action on the work package provided in the payload. The altered work package will be returned. In order to avoid executing
     * the custom action unbeknown to a change that has already taken place, the client has to provide the work package's current lockVersion.
     * @param id The id of the custom action to execute
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public executeCustomAction(
        id: number,
        requestBody?: {
            _links?: {
                workPackage?: {
                    href?: string;
                };
            };
            lockVersion?: string;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/custom_actions/{id}/execute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work packages - Additional permissions might be required based on the custom action.`,
                404: `Returned if the custom action does not exist.`,
                406: `Occurs when the client did not send a Content-Type header`,
                409: `Returned if the client provided an outdated lockVersion or no lockVersion at all.`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the custom action was not executed successfully e.g. when a constraint on a work package property was violated.`,
            },
        });
    }
}
