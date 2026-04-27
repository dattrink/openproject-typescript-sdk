/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ViewsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List views
     * Returns a collection of Views. The collection can be filtered via query parameters similar to how work packages are filtered.
     * @param filters JSON specifying filter conditions.
     * Currently supported filters are:
     *
     * + project: filters views by the project their associated query is assigned to. If the project filter is passed with the `!*` (not any) operator, global views are returned.
     *
     * + id: filters views based on their id
     *
     * + type: filters views based on their type
     * @returns any OK
     * @throws ApiError
     */
    public listViews(
        filters?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/views',
            query: {
                'filters': filters,
            },
        });
    }
    /**
     * View view
     * @param id View id
     * @returns any Returns the result of a single view, dependent of the view type.
     * @throws ApiError
     */
    public viewView(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/views/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** The required permission depends on the type of the view.`,
                404: `Returned if the resource can not be found.
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a view. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Create view
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     * The required fields of a View can be found in its schema, which is embedded in the respective form.
     * Note that it is only allowed to provide properties or links supporting the write operation.
     *
     * There are different subtypes of `Views` (e.g. `Views::WorkPackagesTable`) with each having its own
     * endpoint for creating that subtype e.g.
     *
     * * `/api/v3/views/work_packages_table` for `Views::WorkPackagesTable`
     * * `/api/v3/views/team_planner` for `Views::TeamPlanner`
     * * `/api/v3/views/work_packages_calendar` for `Views::WorkPackagesCalendar`
     *
     * **Not yet implemented** To get the list of available subtypes and by that the endpoints for creating a subtype, use the
     * ```
     * /api/v3/views/schemas
     * ```
     * endpoint.
     * @param id The view identifier
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public createViews(
        id: string,
        requestBody?: {
            _links?: {
                query?: {
                    href?: string;
                };
            };
        },
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/views/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)
                 * the client provides a link to an invalid resource (\`ResourceTypeMismatch\`),
                e.g. a query not found`,
            },
        });
    }
}
