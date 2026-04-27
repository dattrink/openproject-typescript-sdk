/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RootModel } from '../models/RootModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RootService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View root
     * Returns the root resource, containing basic information about the server instance and a collection of useful links.
     * @returns RootModel OK
     * @throws ApiError
     */
    public viewRoot(): CancelablePromise<RootModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3',
        });
    }
}
