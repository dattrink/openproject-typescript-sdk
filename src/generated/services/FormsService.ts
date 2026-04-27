/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Example_FormModel } from '../models/Example_FormModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FormsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * show or validate form
     * This is an example of how a form might look like. Note that this endpoint does not exist in the actual implementation.
     * @param requestBody
     * @returns Example_FormModel OK
     * @throws ApiError
     */
    public showOrValidateForm(
        requestBody?: {
            _type?: string;
            lockVersion?: number;
            subject?: string;
        },
    ): CancelablePromise<Example_FormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/example/form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body and the request body
                was not empty.
                Note that this error only occurs when the content is not at all a single JSON object.
                It **does not occur** for requests containing undefined properties or invalid property values.`,
                403: `Returned if the client does not have sufficient permissions to modify the associated resource.`,
                406: `Occurs when the client did not send a Content-Type header`,
                409: `Returned if underlying resource was changed since the client requested the form. This is determined using the \`lockVersion\` property.`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
}
