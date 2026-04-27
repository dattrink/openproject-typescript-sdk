/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomOptionModel } from '../models/CustomOptionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomOptionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Custom Option
     * @param id The custom option's identifier
     * @returns CustomOptionModel OK
     * @throws ApiError
     */
    public viewCustomOption(
        id: number,
    ): CancelablePromise<CustomOptionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/custom_options/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the custom option does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package in any project the custom option's custom field is active in.`,
            },
        });
    }
}
