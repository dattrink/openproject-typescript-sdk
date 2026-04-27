/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaModel } from '../models/SchemaModel';
import type { ValuesPropertyModel } from '../models/ValuesPropertyModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ValuesPropertyService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a notification detail
     * Returns an individual detail of a notification identified by the notification id and the id of the detail.
     * @param notificationId notification id
     * @param id detail id
     * @returns ValuesPropertyModel OK
     * @throws ApiError
     */
    public viewNotificationDetail(
        notificationId: number,
        id: number,
    ): CancelablePromise<ValuesPropertyModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/notifications/{notification_id}/details/{id}',
            path: {
                'notification_id': notificationId,
                'id': id,
            },
            errors: {
                404: `Returned if the notification or the detail of it does not exist or if the user does not have permission to view it.
                 **Required permission** being recipient of the notification`,
            },
        });
    }
    /**
     * View Values schema
     * The schema of a `Values` resource.
     * @param id The identifier of the value. This is typically the value of the `property` property of
     * the `Values` resource. It should be in lower camelcase format.
     * @returns SchemaModel OK
     * @throws ApiError
     */
    public viewValuesSchema(
        id: string,
    ): CancelablePromise<SchemaModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/values/schema/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the requested property id is not in a lower camel case format.`,
                404: `Returned if the schema does not exist.`,
            },
        });
    }
}
