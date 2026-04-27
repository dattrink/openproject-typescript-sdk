/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { List_actionsModel } from '../models/List_actionsModel';
import type { List_capabilitiesModel } from '../models/List_capabilitiesModel';
import type { View_actionModel } from '../models/View_actionModel';
import type { View_capabilitiesModel } from '../models/View_capabilitiesModel';
import type { View_global_contextModel } from '../models/View_global_contextModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActionsCapabilitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List actions
     * Returns a collection of actions. The client can choose to filter the actions similar to how work packages are filtered.
     * In addition to the provided filters, the server will reduce the result set to only contain actions, for which the requesting client
     * has sufficient permissions.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * + id: Returns only the action having the id or all actions except those having the id(s).
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + *No sort supported yet*
     * @returns List_actionsModel OK
     * @throws ApiError
     */
    public listActions(
        filters?: string,
        sortBy: string = '[["id", "asc"]]',
    ): CancelablePromise<List_actionsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/actions',
            query: {
                'filters': filters,
                'sortBy': sortBy,
            },
        });
    }
    /**
     * View action
     * Returns an individual action.
     * @param id action id which is the name of the action
     * @returns View_actionModel OK
     * @throws ApiError
     */
    public viewAction(
        id: string,
    ): CancelablePromise<View_actionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/actions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the action does not exist.`,
            },
        });
    }
    /**
     * List capabilities
     * Returns a collection of actions assigned to a principal in a context. The client can choose to filter the actions similar to how work packages are filtered. In addition to the provided filters, the server will reduce the result set to only contain actions, for which the requesting client has sufficient permissions
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     *
     * + action: Get all capabilities of a certain action
     *
     * + principal: Get all capabilities of a principal
     *
     * + context: Get all capabilities within a context. Note that for a workspace context the client needs to
     * provide `w{id}`, e.g. `w5` and for the global context a `g`.
     *
     * + **Deprecation**: The now deprecated context `p` for project still works, but must eventually be replaced
     * with the `w` for the workspace context.
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Currently supported sorts are:
     *
     * + id: Sort by the capabilities id
     * @returns List_capabilitiesModel OK
     * @throws ApiError
     */
    public listCapabilities(
        filters?: string,
        sortBy: string = '[["id", "asc"]]',
    ): CancelablePromise<List_capabilitiesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/capabilities',
            query: {
                'filters': filters,
                'sortBy': sortBy,
            },
        });
    }
    /**
     * View global context
     * Returns the global capability context. This context is necessary to consistently link to a context even if the context is not a project.
     * @returns View_global_contextModel OK
     * @throws ApiError
     */
    public viewGlobalContext(): CancelablePromise<View_global_contextModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/capabilities/context/global',
            errors: {
                404: `Returned if the action does not exist.`,
            },
        });
    }
    /**
     * View capabilities
     * @param id capability id
     * @returns View_capabilitiesModel OK
     * @throws ApiError
     */
    public viewCapabilities(
        id: string,
    ): CancelablePromise<View_capabilitiesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/capabilities/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the capability does not exist.`,
            },
        });
    }
}
