/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RelationCollectionModel } from '../models/RelationCollectionModel';
import type { RelationReadModel } from '../models/RelationReadModel';
import type { RelationWriteModel } from '../models/RelationWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RelationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Relations
     * Lists all relations according to the given (optional, logically conjunctive) filters and ordered by ID.
     * The response only includes relations between work packages which the user is allowed to see.
     * @param filters JSON specifying filter conditions. Accepts the same format as returned by
     * the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. Valid fields to filter by are:
     *
     * - id - ID of relation
     * - from - ID of work package from which the filtered relations emanates.
     * - to - ID of work package to which this related points.
     * - involved - ID of either the `from` or the `to` work package.
     * - type - The type of relation to filter by, e.g. "follows".
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @returns RelationCollectionModel OK
     * @throws ApiError
     */
    public listRelations(
        filters?: string,
        sortBy?: string,
    ): CancelablePromise<RelationCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/relations',
            query: {
                'filters': filters,
                'sortBy': sortBy,
            },
            errors: {
                400: `Returned if the client provides invalid filter parameters.`,
            },
        });
    }
    /**
     * Get Relation
     * Get a single relation specified by its unique identifier.
     * @param id Relation id
     * @returns RelationReadModel OK
     * @throws ApiError
     */
    public getRelation(
        id: number,
    ): CancelablePromise<RelationReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/relations/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the relation does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work packages for the involved work packages`,
            },
        });
    }
    /**
     * Delete Relation
     * Deletes the relation.
     * @param id The unique identifier of the relation resource
     * @returns void
     * @throws ApiError
     */
    public deleteRelation(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/relations/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage work package relations`,
                404: `Returned if the relation does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work packages`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Update Relation
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants
     * to change, in the body. It is only allowed to provide properties or links supporting the **write** operation.
     *
     * Note that changing the `type` of a relation invariably also changes the respective `reverseType` as well as the
     * "name" of it. The returned Relation object will reflect that change. For instance if you change a Relation's
     * `type` to "follows" then the `reverseType` will be changed to `precedes`.
     *
     * It is not allowed to change a relation's involved work packages.
     * @param id Relation ID
     * @param requestBody
     * @returns RelationReadModel OK
     * @throws ApiError
     */
    public updateRelation(
        id: number,
        requestBody?: RelationWriteModel,
    ): CancelablePromise<RelationReadModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/relations/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if the relation does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work packages`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                - the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                - a constraint for a property was violated (\`PropertyConstraintViolation\`)
                - the client provides a link to an invalid resource (\`ResourceTypeMismatch\`) or a
                work package that does not exist or for which the client does not have sufficient permissions
                to see it (**required permissions**: \`view work packages\` for the involved work packages).`,
            },
        });
    }
    /**
     * Create relation
     * Create a work package relation on the given work package. A successful creation will result in a relation between
     * two work packages, thus appearing on both involved work package resources.
     * @param id Work package id
     * @param requestBody
     * @returns RelationReadModel Created
     * @throws ApiError
     */
    public createRelation(
        id: number,
        requestBody?: RelationWriteModel,
    ): CancelablePromise<RelationReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/relations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage work package relations`,
                406: `Occurs when the client did not send a Content-Type header`,
                409: `Returned if there already exists a relation between the given work packages of **any** type
                or if the relation is not allowed.`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                - the client tries to write a read-only property (\`PropertyIsReadOnly\`)
                - a constraint for a property was violated (\`PropertyConstraintViolation\`)
                - the client provides a link to an invalid resource (\`ResourceTypeMismatch\`)`,
            },
        });
    }
}
