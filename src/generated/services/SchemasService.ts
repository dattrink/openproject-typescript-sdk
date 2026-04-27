/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Example_SchemaModel } from '../models/Example_SchemaModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SchemasService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * view the schema
     * This is an example of how a schema might look like. Note that this endpoint does not exist in the actual implementation.
     * @returns Example_SchemaModel OK
     * @throws ApiError
     */
    public viewTheSchema(): CancelablePromise<Example_SchemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/example/schema',
        });
    }
}
