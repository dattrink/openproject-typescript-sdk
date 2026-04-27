/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlaceholderUserCreateModel } from '../models/PlaceholderUserCreateModel';
import type { PlaceholderUserModel } from '../models/PlaceholderUserModel';
import type { PrincipalCollectionModel } from '../models/PrincipalCollectionModel';
import type { UserCollectionModel } from '../models/UserCollectionModel';
import type { UserCreateModel } from '../models/UserCreateModel';
import type { UserModel } from '../models/UserModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PrincipalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List placehoder users
     * List all placeholder users. This can only be accessed if the requesting user has the global permission
     * `manage_placeholder_user` or `manage_members` in any project.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * - name: filters placeholder users by the name.
     * - group: filters placeholder by the group it is contained in.
     * - status: filters placeholder by the status it has.
     * @param select Comma separated list of properties to include.
     * @returns PrincipalCollectionModel OK
     * @throws ApiError
     */
    public listPlaceholderUsers(
        filters?: string,
        select?: string,
    ): CancelablePromise<PrincipalCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/placeholder_users',
            query: {
                'filters': filters,
                'select': select,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * Create placeholder user
     * Creates a new placeholder user. Only administrators and users with `manage_placeholder_user` global permission are
     * allowed to do so. When calling this endpoint the client provides a single object, containing at least the
     * properties and links that are required, in the body.
     * @param requestBody
     * @returns PlaceholderUserModel Created
     * @throws ApiError
     */
    public createPlaceholderUser(
        requestBody?: PlaceholderUserCreateModel,
    ): CancelablePromise<PlaceholderUserModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/placeholder_users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Delete placeholder user
     * Set the specified placeholder user to deleted status.
     * @param id Placeholder user id
     * @returns any Returned if the group was marked for deletion.
     *
     * Note that the response body is empty as of now. In future versions of the API a body
     * *might* be returned, indicating the progress of deletion.
     * @throws ApiError
     */
    public deletePlaceholderUser(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/placeholder_users/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** \`manage_placeholder_users\``,
                404: `Returned if the placeholder user does not exist.`,
            },
        });
    }
    /**
     * View placeholder user
     * Return the placeholder user resource.
     * @param id The placeholder user id
     * @returns PlaceholderUserModel OK
     * @throws ApiError
     */
    public viewPlaceholderUser(
        id: string,
    ): CancelablePromise<PlaceholderUserModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/placeholder_users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the user does not exist or if the API user does not have permission to view them.
                 **Required permission**: \`manage_placeholder_users\``,
            },
        });
    }
    /**
     * Update placeholder user
     * Updates the placeholder user's writable attributes.
     * When calling this endpoint the client provides a single object, containing at least the properties and links
     * that are required, in the body.
     * @param id Placeholder user id
     * @param requestBody
     * @returns PlaceholderUserModel OK
     * @throws ApiError
     */
    public updatePlaceholderUser(
        id: number,
        requestBody?: PlaceholderUserCreateModel,
    ): CancelablePromise<PlaceholderUserModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/placeholder_users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission**: \`manage_placeholder_users\``,
                404: `Returned if the placeholder user does not exist.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                - the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                - a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * List principals
     * List all principals. The client can choose to filter the principals similar to how work packages are filtered. In
     * addition to the provided filters, the server will reduce the result set to only contain principals who are members
     * in projects the client is allowed to see.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * Currently supported filters are:
     *
     * - type: filters principals by their type (*User*, *Group*, *PlaceholderUser*).
     * - member: filters principals by the projects they are members in.
     * - name: filters principals by the user or group name.
     * - any_name_attribute: filters principals by the user or group first- and last name, email or login.
     * - status: filters principals by their status number (active = *1*, registered = *2*, locked = *3*, invited = *4*)
     * @param select Comma separated list of properties to include.
     * @returns PrincipalCollectionModel OK
     * @throws ApiError
     */
    public listPrincipals(
        filters?: string,
        select?: string,
    ): CancelablePromise<PrincipalCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/principals',
            query: {
                'filters': filters,
                'select': select,
            },
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * List Users
     * Lists users. Only administrators or users with the following global permission can access this resource:
     * - `manage_user`
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + status: Status the user has
     *
     * + group: Name of the group in which to-be-listed users are members.
     *
     * + name: Filter users in whose first or last names, or email addresses the given string occurs.
     *
     * + login: User's login
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @param select Comma separated list of properties to include.
     * @returns UserCollectionModel OK
     * @throws ApiError
     */
    public listUsers(
        offset: number = 1,
        pageSize?: number,
        filters?: string,
        sortBy?: string,
        select?: string,
    ): CancelablePromise<UserCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'filters': filters,
                'sortBy': sortBy,
                'select': select,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator or any of: 'manage_members', 'manage_user', 'share_work_packages'.`,
            },
        });
    }
    /**
     * Create User
     * Creates a new user. Only administrators and users with manage_user global permission are allowed to do so.
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     *
     * Valid values for `status`:
     *
     * 1) "active" - In this case a password has to be provided in addition to the other attributes.
     *
     * 2) "invited" - In this case nothing but the email address is required. The rest is optional. An invitation will be sent to the user.
     * @param requestBody
     * @returns UserModel Created
     * @throws ApiError
     */
    public createUser(
        requestBody?: UserCreateModel,
    ): CancelablePromise<UserModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrator`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Delete user
     * Permanently deletes the specified user account.
     * @param id User id. Use `me` to reference current user, if any.
     * @returns any Returned if the account was deleted successfully.
     *
     * Note that the response body is empty as of now. In future versions of the API a body
     * *might* be returned, indicating the progress of deletion.
     * @throws ApiError
     */
    public deleteUser(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions or if deletion of users was disabled in the instance wide settings.
                 **Required permission:** Administrators only (exception: users might be able to delete their own accounts)`,
                404: `Returned if the user does not exist.`,
            },
        });
    }
    /**
     * View user
     * @param id User id. Use `me` to reference current user, if any.
     * @returns UserModel OK
     * @throws ApiError
     */
    public viewUser(
        id: string,
    ): CancelablePromise<UserModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the user does not exist or if the API user does not have permission to view them.
                 **Required permission** The user needs to be locked in if the installation is configured to prevent anonymous access`,
            },
        });
    }
    /**
     * Update user
     * Updates the user's writable attributes.
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     *
     * Password updates for self-service account changes require both `password` and `currentPassword`.
     * @param id User id. Use `me` to reference current user, if any.
     * @param requestBody
     * @returns UserModel OK
     * @throws ApiError
     */
    public updateUser(
        id: string,
        requestBody?: UserCreateModel,
    ): CancelablePromise<UserModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Administrators, manage_user global permission`,
                404: `Returned if the user does not exist or if the API user does not have the necessary permissions to update it.
                 **Required permission:** Administrators only (exception: users may update their own accounts)`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
}
