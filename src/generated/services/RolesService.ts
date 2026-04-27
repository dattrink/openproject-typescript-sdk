/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleModel } from '../models/RoleModel';
import type { RolesModel } from '../models/RolesModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RolesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List roles
     * List all defined roles. This includes built in roles like 'Anonymous' and 'Non member'.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * + grantable: filters roles based on whether they are selectable for a membership
     *
     * + unit: filters roles based on the unit ('project' or 'system') for which they are selectable for a membership
     * @returns RolesModel OK
     * @throws ApiError
     */
    public listRoles(
        filters?: string,
    ): CancelablePromise<RolesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/roles',
            query: {
                'filters': filters,
            },
        });
    }
    /**
     * View role
     * Fetch an individual role.
     * @param id Role id
     * @returns RoleModel OK
     * @throws ApiError
     */
    public viewRole(
        id: number,
    ): CancelablePromise<RoleModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/roles/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see roles.
                 **Required permission:** view members **or** manage members`,
                404: `Returned if the role does not exist.`,
            },
        });
    }
}
