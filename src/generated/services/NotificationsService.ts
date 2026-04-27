/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationCollectionModel } from '../models/NotificationCollectionModel';
import type { NotificationModel } from '../models/NotificationModel';
import type { ValuesPropertyModel } from '../models/ValuesPropertyModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotificationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get notification collection
     * Returns the collection of available in-app notifications. The notifications returned depend on the provided
     * parameters and also on the requesting user's permissions.
     *
     * Contrary to most collections, this one also links to and embeds schemas for the `details` properties of the notifications returned.
     * This is an optimization. Clients will receive the information necessary to display the various types of details that a notification
     * can carry.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by primary key
     *
     * + reason: Sort by notification reason
     *
     * + readIAN: Sort by read status
     * @param groupBy string specifying group_by criteria.
     *
     * + reason: Group by notification reason
     *
     * + project: Sort by associated project
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported filters are:
     *
     * + id: Filter by primary key
     *
     * + project: Filter by the project the notification was created in
     *
     * + readIAN: Filter by read status
     *
     * + reason: Filter by the reason, e.g. 'mentioned' or 'assigned' the notification was created because of
     *
     * + resourceId: Filter by the id of the resource the notification was created for. Ideally used together with the `resourceType` filter.
     *
     * + resourceType: Filter by the type of the resource the notification was created for. Ideally used together with the `resourceId` filter.
     * @returns NotificationCollectionModel OK
     * @throws ApiError
     */
    public listNotifications(
        offset: number = 1,
        pageSize: number = 20,
        sortBy?: string,
        groupBy?: string,
        filters?: string,
    ): CancelablePromise<NotificationCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/notifications',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'filters': filters,
            },
            errors: {
                403: `Returned if the client is not logged in and login is required.`,
                422: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * Read all notifications
     * Marks the whole notification collection as read. The collection contains only elements the authenticated user can
     * see, and can be further reduced with filters.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + id: Filter by primary key
     *
     * + project: Filter by the project the notification was created in
     *
     * + reason: Filter by the reason, e.g. 'mentioned' or 'assigned' the notification was created because of
     *
     * + resourceId: Filter by the id of the resource the notification was created for. Ideally used together with the
     * `resourceType` filter.
     *
     * + resourceType: Filter by the type of the resource the notification was created for. Ideally used together with
     * the `resourceId` filter.
     * @returns void
     * @throws ApiError
     */
    public readNotifications(
        filters?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/notifications/read_ian',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Returned if the request is not properly formatted.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Unread all notifications
     * Marks the whole notification collection as unread. The collection contains only elements the authenticated user can
     * see, and can be further reduced with filters.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + id: Filter by primary key
     *
     * + project: Filter by the project the notification was created in
     *
     * + reason: Filter by the reason, e.g. 'mentioned' or 'assigned' the notification was created because of
     *
     * + resourceId: Filter by the id of the resource the notification was created for. Ideally used together with the
     * `resourceType` filter.
     *
     * + resourceType: Filter by the type of the resource the notification was created for. Ideally used together with
     * the `resourceId` filter.
     * @returns void
     * @throws ApiError
     */
    public unreadNotifications(
        filters?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/notifications/unread_ian',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Get the notification
     * Returns the notification identified by the notification id.
     * @param id notification id
     * @returns NotificationModel OK
     * @throws ApiError
     */
    public viewNotification(
        id: number,
    ): CancelablePromise<NotificationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/notifications/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the notification does not exist or if the user does not have permission to view it.
                 **Required permission** being recipient of the notification`,
            },
        });
    }
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
     * Read notification
     * Marks the given notification as read.
     * @param id notification id
     * @returns void
     * @throws ApiError
     */
    public readNotification(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/notifications/{id}/read_ian',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the notification does not exist or if the user does not have permission to view it.
                 **Required permission** being recipient of the notification`,
            },
        });
    }
    /**
     * Unread notification
     * Marks the given notification as unread.
     * @param id notification id
     * @returns void
     * @throws ApiError
     */
    public unreadNotification(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/notifications/{id}/unread_ian',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the notification does not exist or if the user does not have permission to view it.
                 **Required permission** being recipient of the notification`,
            },
        });
    }
}
