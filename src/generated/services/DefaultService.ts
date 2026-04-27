/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HierarchyItemCollectionModel } from '../models/HierarchyItemCollectionModel';
import type { HierarchyItemReadModel } from '../models/HierarchyItemReadModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the custom field hierarchy items
     * Retrieves the hierarchy of custom fields.
     *
     * The hierarchy is a tree structure of hierarchy items. It is represented as a flat list of items, where each item
     * has a reference to its parent and children. The list is ordered in a depth-first manner. The first item is the
     * requested parent. If parent was unset, the root item is returned as first element.
     *
     * Passing the `depth` query parameter allows to limit the depth of the hierarchy. If the depth is unset, the full
     * hierarchy tree is returned. If the depth is set to `0`, only the requested parent is returned. Any other positive
     * integer will return the number of children levels specified by this value.
     *
     * This endpoint only returns, if the custom field is of type `hierarchy`.
     * @param id The custom field's unique identifier
     * @param parent The identifier of the parent hierarchy item
     * @param depth The level of hierarchy depth
     * @returns HierarchyItemCollectionModel OK
     * @throws ApiError
     */
    public getCustomFieldItems(
        id: number,
        parent?: number,
        depth?: number,
    ): CancelablePromise<HierarchyItemCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/custom_fields/{id}/items',
            path: {
                'id': id,
            },
            query: {
                'parent': parent,
                'depth': depth,
            },
            errors: {
                403: `Returned if the user is not logged in.`,
                404: `Returned if the custom field does not exist or the user lacks the permission to view it.`,
                422: `Returned if the custom field is not of type hierarchy.`,
            },
        });
    }
    /**
     * Get a custom field hierarchy item
     * Retrieves a single custom field item specified by its unique identifier.
     * @param id The custom field item's unique identifier
     * @returns HierarchyItemReadModel OK
     * @throws ApiError
     */
    public getCustomFieldItem(
        id: number,
    ): CancelablePromise<HierarchyItemReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/custom_field_items/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the user is not logged in.`,
                404: `Returned if the custom field item does not exist or the user lacks permission to see it.
                The permission required to view the item depends on the custom field it belongs to.`,
            },
        });
    }
    /**
     * Get a custom field hierarchy item's branch
     * Retrieves the branch of a single custom field item specified by its unique identifier.
     *
     * A branch is list of all ancestors, starting with the root item and finishing with the item itself.
     * @param id The custom field item's unique identifier
     * @returns HierarchyItemCollectionModel OK
     * @throws ApiError
     */
    public getCustomFieldItemBranch(
        id: number,
    ): CancelablePromise<HierarchyItemCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/custom_field_items/{id}/branch',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the user is not logged in.`,
                404: `Returned if the custom field does not exist or the user lacks permission to view it.`,
                422: `Returned if the custom field is not of type hierarchy.`,
            },
        });
    }
}
