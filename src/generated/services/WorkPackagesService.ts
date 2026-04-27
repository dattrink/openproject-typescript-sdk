/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCommentWriteModel } from '../models/ActivityCommentWriteModel';
import type { Available_AssigneesModel } from '../models/Available_AssigneesModel';
import type { Available_projects_for_work_packageModel } from '../models/Available_projects_for_work_packageModel';
import type { Available_relation_candidatesModel } from '../models/Available_relation_candidatesModel';
import type { Available_WatchersModel } from '../models/Available_WatchersModel';
import type { EmojiReactions_Model } from '../models/EmojiReactions_Model';
import type { FileLinkCollectionReadModel } from '../models/FileLinkCollectionReadModel';
import type { FileLinkCollectionWriteModel } from '../models/FileLinkCollectionWriteModel';
import type { ReminderModel } from '../models/ReminderModel';
import type { RevisionsModel } from '../models/RevisionsModel';
import type { WatchersModel } from '../models/WatchersModel';
import type { Work_Package_activitiesModel } from '../models/Work_Package_activitiesModel';
import type { Work_PackagesModel } from '../models/Work_PackagesModel';
import type { WorkPackageFormModel } from '../models/WorkPackageFormModel';
import type { WorkPackageModel } from '../models/WorkPackageModel';
import type { WorkPackagePatchModel } from '../models/WorkPackagePatchModel';
import type { WorkPackageWriteModel } from '../models/WorkPackageWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkPackagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get work packages of project
     * Returns the collection of work packages that are related to the given project.
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/work_packages`](https://www.openproject.org/docs/api/endpoints/work-packages/#get-work-packages-of-workspace)
     * @param id Project id
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @param groupBy The column to group by.
     * @param showSums Indicates whether properties should be summed up if they support it.
     * @param select Comma separated list of properties to include.
     * @returns Work_PackagesModel OK
     * @throws ApiError
     */
    public getProjectWorkPackageCollection(
        id: number,
        offset: number = 1,
        pageSize?: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        select?: string,
    ): CancelablePromise<Work_PackagesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/work_packages',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'filters': filters,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'select': select,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding project.*`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view project`,
            },
        });
    }
    /**
     * Create work package in project
     * When calling this endpoint the client provides a single object, containing at least the properties and links that
     * are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in
     * the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/work_packages`](https://www.openproject.org/docs/api/endpoints/work-packages/#create-work-package-in-workspace)
     * @param id Project id
     * @param notify Indicates whether change notifications (e.g. via E-Mail) should be sent.
     * Note that this controls notifications for all users interested in changes to the work package (e.g. watchers, author and assignee),
     * not just the current user.
     * @param requestBody
     * @returns WorkPackageModel OK
     * @throws ApiError
     */
    public createProjectWorkPackage(
        id: number,
        notify: boolean = true,
        requestBody?: WorkPackageModel,
    ): CancelablePromise<WorkPackageModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/work_packages',
            path: {
                'id': id,
            },
            query: {
                'notify': notify,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding project.*`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permissions:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to write a read-only property
                 * a constraint for a property was violated
                 * a property was provided in an unreadable format`,
            },
        });
    }
    /**
     * Form for creating Work Packages in a Project
     * This endpoint allows you to validation a new work package creation body in a specific project. It works similarly
     * to the `/api/v3/work_packages/form` endpoint, but already specifies the work package's project in the path, so that
     * it does not have to be defined in the request body.
     *
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/work_packages/form`](https://www.openproject.org/docs/api/endpoints/work-packages/#form-for-creating-work-packages-in-a-workspace)
     * @param id ID of the project in which the work package will be created
     * @param requestBody
     * @returns WorkPackageFormModel OK
     * @throws ApiError
     */
    public formCreateWorkPackageInProject(
        id: number,
        requestBody?: WorkPackageWriteModel,
    ): CancelablePromise<WorkPackageFormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/projects/{id}/work_packages/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Project Available assignees
     * Gets a list of users that can be assigned to work packages in the given project.
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/available_assignees`](https://www.openproject.org/docs/api/endpoints/work-packages/#workspace-available-assignees)
     * @param id Project id
     * @returns Available_AssigneesModel OK
     * @throws ApiError
     */
    public projectAvailableAssignees(
        id: number,
    ): CancelablePromise<Available_AssigneesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/available_assignees',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding project.*`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view project`,
            },
        });
    }
    /**
     * List work packages
     * Returns a collection of work packages.
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. If no filter is to be applied, the client should send an empty array (`[]`), otherwise a default
     * filter is applied. A Currently supported filters are (there are additional filters added by modules):
     *
     * - assigned_to
     * - assignee_or_group
     * - attachment_base
     * - attachment_content
     * - attachment_file_name
     * - author
     * - blocked
     * - blocks
     * - category
     * - comment
     * - created_at
     * - custom_field
     * - dates_interval
     * - description
     * - done_ratio
     * - due_date
     * - duplicated
     * - duplicates
     * - duration
     * - estimated_hours
     * - file_link_origin_id
     * - follows
     * - group
     * - id
     * - includes
     * - linkable_to_storage_id
     * - linkable_to_storage_url
     * - manual_sort
     * - milestone
     * - only_subproject
     * - parent
     * - partof
     * - precedes
     * - principal_base
     * - priority
     * - project
     * - relatable
     * - relates
     * - required
     * - requires
     * - responsible
     * - role
     * - search
     * - start_date
     * - status
     * - storage_id
     * - storage_url
     * - subject
     * - subject_or_id
     * - subproject
     * - type
     * - typeahead
     * - updated_at
     * - version
     * - watcher
     * - work_package
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @param groupBy The column to group by.
     * @param showSums Indicates whether properties should be summed up if they support it.
     * @param select Comma separated list of properties to include.
     * @param timestamps In order to perform a [baseline comparison](/docs/api/baseline-comparisons), you may provide one or several timestamps
     * in ISO-8601 format as comma-separated list. The timestamps may be absolute or relative,
     * such as ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM",
     * "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM".
     * The first "HH:MM" part represents the zero paded hours and minutes.
     * The last "+HH:MM" part represents the timezone offset from UTC associated with the time,
     * the offset can be positive or negative e.g."oneDayAgo@01:00+01:00", "oneDayAgo@01:00-01:00".
     *
     * Usually, the first timestamp is the baseline date, the last timestamp is the current date.
     * Values older than 1 day are accepted only with valid Enterprise Token available.
     * @returns Work_PackagesModel OK
     * @throws ApiError
     */
    public listWorkPackages(
        offset: number = 1,
        pageSize?: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        select?: string,
        timestamps: string = 'PT0S',
    ): CancelablePromise<Work_PackagesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages',
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'filters': filters,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'select': select,
                'timestamps': timestamps,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages (globally or in any project)`,
            },
        });
    }
    /**
     * Create Work Package
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body.
     * The required fields of a WorkPackage can be found in its schema, which is embedded in the respective form.
     * Note that it is only allowed to provide properties or links supporting the write operation.
     *
     * A project link must be set when creating work packages through this route.
     *
     * When setting start date, finish date, and duration together, their correctness will be checked and a 422 error will be returned if one value does not match with the two others. You can make the server compute a value: set only two values in the request and the third one will be computed and returned in the response. For instance, when sending `{ "startDate": "2022-08-23", duration: "P2D" }`, the response will include `{ "dueDate": "2022-08-24" }`.
     * @param notify Indicates whether change notifications (e.g. via E-Mail) should be sent.
     * Note that this controls notifications for all users interested in changes to the work package (e.g. watchers, author and assignee),
     * not just the current user.
     * @param requestBody
     * @returns WorkPackageModel OK
     * @throws ApiError
     */
    public createWorkPackage(
        notify: boolean = true,
        requestBody?: WorkPackageModel,
    ): CancelablePromise<WorkPackageModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages',
            query: {
                'notify': notify,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding project.*`,
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permissions:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to write a read-only property
                 * a constraint for a property was violated
                 * a property was provided in an unreadable format`,
            },
        });
    }
    /**
     * Form for creating a Work Package
     * When calling this endpoint, the client provides a single object containing the properties and links to be
     * created, in the body. The input is validated and a schema response is returned. If the validation errors of the
     * response is empty, the same payload can be used to create a work package.
     *
     * Only the properties of the work package write model are allowed to set on a work package on creation.
     *
     * When setting start date, finish date, and duration together, their correctness will be checked and a validation
     * error will be returned if one value does not match with the two others. You can make the server compute a value:
     * set only two values in the request and the third one will be computed and returned in the response. For instance,
     * when sending `{ "startDate": "2022-08-23", duration: "P2D" }`, the response will
     * include `{ "dueDate": "2022-08-24" }`.
     * @param requestBody
     * @returns WorkPackageFormModel OK
     * @throws ApiError
     */
    public formCreateWorkPackage(
        requestBody?: WorkPackageWriteModel,
    ): CancelablePromise<WorkPackageFormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/form',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * List Work Package Schemas
     * List all work package schemas that match the given filters. This endpoint does not return a successful response,
     * if no filter is given.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + id: The schema's id
     *
     * Schema id has the form `project_id-work_package_type_id`.
     * @returns any OK
     * @throws ApiError
     */
    public listWorkPackageSchemas(
        filters: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/schemas',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** View work packages in any project.`,
            },
        });
    }
    /**
     * View Work Package Schema
     * @param identifier Identifier of the schema
     * @returns any OK
     * @throws ApiError
     */
    public viewWorkPackageSchema(
        identifier: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/schemas/{identifier}',
            path: {
                'identifier': identifier,
            },
            errors: {
                404: `Returned if the schema does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work packages (on the project where this schema is used)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Delete Work Package
     * Deletes the work package, as well as:
     *
     * - all associated time entries
     * - its hierarchy of child work packages
     * @param id Work package id
     * @returns void
     * @throws ApiError
     */
    public deleteWorkPackage(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/work_packages/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** delete work package`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View Work Package
     * Returns the specified work package.
     * @param id Work package id
     * @param timestamps In order to perform a [baseline comparison](/docs/api/baseline-comparisons) of the work-package attributes, you may
     * provide one or several timestamps in ISO-8601 format as comma-separated list. The timestamps may be absolute or relative,
     * such as ISO8601 dates, ISO8601 durations and the following relative date keywords: "oneDayAgo@HH:MM+HH:MM",
     * "lastWorkingDay@HH:MM+HH:MM", "oneWeekAgo@HH:MM+HH:MM", "oneMonthAgo@HH:MM+HH:MM".
     * The first "HH:MM" part represents the zero paded hours and minutes.
     * The last "+HH:MM" part represents the timezone offset from UTC associated with the time,
     * the offset can be positive or negative e.g."oneDayAgo@01:00+01:00", "oneDayAgo@01:00-01:00".
     *
     * Usually, the first timestamp is the baseline date, the last timestamp is the current date.
     * Values older than 1 day are accepted only with valid Enterprise Token available.
     * @returns WorkPackageModel OK
     * @throws ApiError
     */
    public viewWorkPackage(
        id: number,
        timestamps: string = 'PT0S',
    ): CancelablePromise<WorkPackageModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}',
            path: {
                'id': id,
            },
            query: {
                'timestamps': timestamps,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Update a Work Package
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants
     * to change, in the body. Note that it is only allowed to provide properties or links supporting the **write**
     * operation.
     *
     * Additionally to the fields the client wants to change, it is mandatory to provide the value of `lockVersion` which
     * was received by the `GET` request this change originates from.
     *
     * The value of `lockVersion` is used to implement
     * [optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control).
     *
     * **Custom Field Validation**
     *
     * Required custom fields are only validated when they are explicitly provided in the request body. If a custom field
     * is not included in the update request, it will not be validated. This enables clients to update
     * specific attributes independently without having to provide values for all required custom fields.
     *
     * To override this behavior and validate all required custom fields regardless of whether they are included in the
     * request, set `validateCustomFields` to `true` in the `_meta` object of the request body.
     * @param id Work package id
     * @param notify Indicates whether change notifications should be sent. Note that this controls notifications for all users
     * interested in changes to the work package (e.g. watchers, author and assignee), not just the current user.
     * @param requestBody
     * @returns WorkPackageModel OK
     * @throws ApiError
     */
    public updateWorkPackage(
        id: number,
        notify: boolean = true,
        requestBody?: WorkPackagePatchModel,
    ): CancelablePromise<WorkPackageModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/work_packages/{id}',
            path: {
                'id': id,
            },
            query: {
                'notify': notify,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work package, assign version, change work package status, manage subtasks or move work package`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                406: `Occurs when the client did not send a Content-Type header`,
                409: `Returned if the resource was changed since the client requested it. This is determined using the \`lockVersion\` property.`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                - the client tries to modify a read-only property (\`PropertyIsReadOnly\`)
                - a constraint for a property was violated (\`PropertyConstraintViolation\`)
                - the client provides a link to an invalid resource (\`ResourceTypeMismatch\`)`,
            },
        });
    }
    /**
     * List work package activities
     * @param id Work package id
     * @returns Work_Package_activitiesModel OK
     * @throws ApiError
     */
    public listWorkPackageActivities(
        id: number,
    ): CancelablePromise<Work_Package_activitiesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/activities',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Comment work package
     * Creates an activity for the selected work package and, on success, returns the
     * updated activity.
     * @param id Work package id
     * @param notify Indicates whether change notifications (e.g. via E-Mail) should be sent.
     * Note that this controls notifications for all users interested in changes to the work package (e.g. watchers, author and assignee),
     * not just the current user.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public commentWorkPackage(
        id: number,
        notify: boolean = true,
        requestBody?: ActivityCommentWriteModel,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/activities',
            path: {
                'id': id,
            },
            query: {
                'notify': notify,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** create journals
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * List emoji reactions by work package activities
     * List all emoji reactions of all activities of a single work package.
     * @param id ID of the work package whose activities' emoji reactions will be listed
     * @returns EmojiReactions_Model OK
     * @throws ApiError
     */
    public listWorkPackageActivitiesEmojiReactions(
        id: number,
    ): CancelablePromise<EmojiReactions_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/activities_emoji_reactions',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:**
                - \`view_work_packages\`
                - for internal comments: \`view_internal_comments\`
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a work package.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Work Package Available assignees
     * Gets a list of users that can be assigned to the given work package.
     * @param id Work package id
     * @returns Available_AssigneesModel OK
     * @throws ApiError
     */
    public workPackageAvailableAssignees(
        id: number,
    ): CancelablePromise<Available_AssigneesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/available_assignees',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work packages`,
            },
        });
    }
    /**
     * Available projects for work package
     * Gets a list of projects that are available as projects to which the work package can be moved.
     * @param id work package id
     * @returns Available_projects_for_work_packageModel OK
     * @throws ApiError
     */
    public availableProjectsForWorkPackage(
        id: number,
    ): CancelablePromise<Available_projects_for_work_packageModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/available_projects',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work package
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Available relation candidates
     * @param id Project id
     * @param pageSize Maximum number of candidates to list (default 10)
     * @param filters JSON specifying filter conditions.
     * Accepts the same filters as the [work packages](https://www.openproject.org/docs/api/endpoints/work-packages/) endpoint.
     * @param query Shortcut for filtering by ID or subject
     * @param type Type of relation to find candidates for (default "relates")
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same sort criteria as the [work packages](https://www.openproject.org/docs/api/endpoints/work-packages/) endpoint.
     * @returns Available_relation_candidatesModel OK
     * @throws ApiError
     */
    public listAvailableRelationCandidates(
        id: number,
        pageSize?: number,
        filters?: string,
        query?: string,
        type?: string,
        sortBy: string = '[["id", "asc"]]',
    ): CancelablePromise<Available_relation_candidatesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/available_relation_candidates',
            path: {
                'id': id,
            },
            query: {
                'pageSize': pageSize,
                'filters': filters,
                'query': query,
                'type': type,
                'sortBy': sortBy,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Available watchers
     * Gets a list of users that are able to be watchers of the specified work package.
     * @param id work package id
     * @returns Available_WatchersModel OK
     * @throws ApiError
     */
    public availableWatchers(
        id: number,
    ): CancelablePromise<Available_WatchersModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/available_watchers',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work package watchers
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Creates file links.
     * Creates file links on a work package.
     *
     * The request is interpreted as a bulk insert, where every element of the collection is validated separately. Each
     * element contains the origin meta data and a link to the storage, the file link is about to point to. The storage
     * link can be provided as a resource link with id or as the host url.
     *
     * The file's id and name are considered mandatory information. The rest of the origin meta data SHOULD be provided
     * by the client. The _mimeType_ SHOULD be a standard mime type. An empty mime type will be handled as unknown. To link
     * a folder, the custom mime type `application/x-op-directory` MUST be used.
     *
     * Up to 20 file links can be submitted at once.
     *
     * If any element data is invalid, no file links will be created.
     *
     * If a file link with matching origin id, work package, and storage already exists, then it will not create an
     * additional file link or update the meta data. Instead the information from the existing file link will be returned.
     * @param id Work package id
     * @param requestBody
     * @returns FileLinkCollectionReadModel Created
     * @throws ApiError
     */
    public createWorkPackageFileLink(
        id: number,
        requestBody?: FileLinkCollectionWriteModel,
    ): CancelablePromise<FileLinkCollectionReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/file_links',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage file links
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package, view file links`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Occurs if the request body was correctly formatted, but some properties lead to errors in the validation
                process. This happens e.g. if the provided storage url is not available on the server.`,
            },
        });
    }
    /**
     * Gets all file links of a work package
     * Gets all file links of a work package.
     *
     * As a side effect, for every file link a request is sent to the storage's origin to fetch live data and patch
     * the file link's data before returning, as well as retrieving permissions of the user on this origin file.
     * @param id Work package id
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. The following filters are supported:
     *
     * - storage
     * @returns FileLinkCollectionReadModel OK
     * @throws ApiError
     */
    public listWorkPackageFileLinks(
        id: number,
        filters?: string,
    ): CancelablePromise<FileLinkCollectionReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/file_links',
            path: {
                'id': id,
            },
            query: {
                'filters': filters,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view file links
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Form for editing a Work Package
     * When calling this endpoint, the client provides a single object containing the properties and links to be
     * edited, in the body. The input is validated and a schema response is returned. If the validation errors of the
     * response is empty, the same payload can be used to edit the work package.
     *
     * Only the properties of the work package write model are allowed to set on a work package on editing.
     *
     * When setting start date, finish date, and duration together, their correctness will be checked and a validation
     * error will be returned if one value does not match with the two others. You can make the server compute a value:
     * set only two values in the request and the third one will be computed and returned in the response. For instance,
     * when sending `{ "startDate": "2022-08-23", duration: "P2D" }`, the response will
     * include `{ "dueDate": "2022-08-24" }`.
     *
     * **Custom Field Validation**
     *
     * Required custom fields are only validated when they are explicitly provided in the request body. If a custom field
     * is not included in the form request, it will not be validated, allowing clients to validate partial updates
     * without triggering validation errors for unrelated required custom fields.
     *
     * To override this behavior and validate all required custom fields regardless of whether they are included in the
     * request, set `validateCustomFields` to `true` in the `_meta` object of the request body.
     * @param id ID of the work package being modified
     * @param requestBody
     * @returns WorkPackageFormModel OK
     * @throws ApiError
     */
    public formEditWorkPackage(
        id: number,
        requestBody?: WorkPackageWriteModel,
    ): CancelablePromise<WorkPackageFormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Revisions
     * Gets a list of revisions that are linked to this work package, e.g., because it is referenced in the commit message of the revision.
     * Only linked revisions from repositories are shown if the user has the view changesets permission in the defining project.
     * @param id Work package id
     * @returns RevisionsModel OK
     * @throws ApiError
     */
    public revisions(
        id: number,
    ): CancelablePromise<RevisionsModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/revisions',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages for the project the work package is contained in.
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * List work package reminders
     * Gets a list of your upcoming reminders for this work package.
     *
     * Only active reminders that belong to the current user are returned.
     * @param workPackageId Work package id
     * @returns any OK
     * @throws ApiError
     */
    public listWorkPackageReminders(
        workPackageId: number,
    ): CancelablePromise<{
        _type: 'Collection';
        /**
         * The total amount of elements available in the collection.
         */
        total: number;
        /**
         * Actual amount of elements in this response.
         */
        count: number;
        _embedded: {
            elements: Array<ReminderModel>;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{work_package_id}/reminders',
            path: {
                'work_package_id': workPackageId,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages for the project the work package is contained in.`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
            },
        });
    }
    /**
     * Create a work package reminder
     * Creates a new reminder for the specified work package.
     *
     * **Note:** A user can only have one **active** reminder at a time for a given work package.
     * @param workPackageId Work package id
     * @param requestBody
     * @returns ReminderModel Reminder created successfully
     * @throws ApiError
     */
    public createWorkPackageReminder(
        workPackageId: number,
        requestBody: {
            /**
             * The date and time when the reminder is due
             */
            remindAt: string;
            /**
             * The note of the reminder
             */
            note?: string;
        },
    ): CancelablePromise<ReminderModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{work_package_id}/reminders',
            path: {
                'work_package_id': workPackageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package`,
                409: `Returned if the user already has an active reminder for this work package.
                 **Error message**: You can only set one reminder at a time for a work package. Please delete or update the existing reminder.`,
            },
        });
    }
    /**
     * List watchers
     * @param id Work package id
     * @returns WatchersModel OK
     * @throws ApiError
     */
    public listWatchers(
        id: number,
    ): CancelablePromise<WatchersModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/watchers',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work package watchers
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package
                 *Note that you will effectively not be able to see the watchers of a work package without being able to see the work package.*`,
            },
        });
    }
    /**
     * Add watcher
     * Adds a watcher to the specified work package.
     *
     * The request is expected to contain a single JSON object, that contains a link object under the `user` key.
     *
     * The response will be user added as watcher.
     * In case the user was already watching the work package an `HTTP 200` is returned, an
     * `HTTP 201` if the user was added as a new watcher.
     * @param id Work package id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public addWatcher(
        id: number,
        requestBody?: {
            user?: {
                href?: string;
            };
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/watchers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.
                For example:
                 * The request did not contain a single JSON object
                 * The JSON object did not contain the key \`user\`
                 * The value of \`users\` was not a link object`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permissions:**
                 * view work package (for self)
                 * add work package watchers (for other users)
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package
                 *Note that you will effectively not be able to change the watchers of a work package without being able to see the work package.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to specify a link to a resource that is not a user (\`ResourceTypeMismatch\`)
                 * the user specified is not allowed to watch that work package (\`PropertyConstraintViolation\`)
                 * the user specified does not exist (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Remove watcher
     * Removes the specified user from the list of watchers for the given work package.
     *
     * If the request succeeds, the specified user is not watching the work package anymore.
     *
     * *Note: This might also be the case, if the specified user did not watch the work package prior to the request.*
     * @param id Work package id
     * @param userId User id
     * @returns void
     * @throws ApiError
     */
    public removeWatcher(
        id: number,
        userId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/work_packages/{id}/watchers/{user_id}',
            path: {
                'id': id,
                'user_id': userId,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** delete work package watchers
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned in one of the following cases:
                Either the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package
                Or the specified user does not exist at all.
                 *Note that you will effectively not be able to change the watchers of a work package without being able to see the work package.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Workspace Available assignees
     * Gets a list of users that can be assigned to work packages in the given workspace.
     * @param id Workspace id
     * @returns Available_AssigneesModel OK
     * @throws ApiError
     */
    public workspaceAvailableAssignees(
        id: number,
    ): CancelablePromise<Available_AssigneesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/available_assignees',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding workspace.*`,
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view workspace`,
            },
        });
    }
    /**
     * Get work packages of workspace
     * Returns the collection of work packages that are related to the given workspace.
     * @param id Workspace id
     * @param offset Page number inside the requested collection.
     * @param pageSize Number of elements to display per page.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint. If no filter is to be applied, the client should send an empty array (`[]`).
     * @param sortBy JSON specifying sort criteria.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/) endpoint.
     * @param groupBy The column to group by.
     * @param showSums Indicates whether properties should be summed up if they support it.
     * @param select Comma separated list of properties to include.
     * @returns Work_PackagesModel OK
     * @throws ApiError
     */
    public getWorkspaceWorkPackageCollection(
        id: number,
        offset: number = 1,
        pageSize?: number,
        filters: string = '[{ "status_id": { "operator": "o", "values": null }}]',
        sortBy: string = '[["id", "asc"]]',
        groupBy?: string,
        showSums: boolean = false,
        select?: string,
    ): CancelablePromise<Work_PackagesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/work_packages',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'pageSize': pageSize,
                'filters': filters,
                'sortBy': sortBy,
                'groupBy': groupBy,
                'showSums': showSums,
                'select': select,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding workspace.*`,
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view workspace`,
            },
        });
    }
    /**
     * Create work package in workspace
     * When calling this endpoint the client provides a single object, containing at least the properties and links that
     * are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in
     * the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * @param id Project id
     * @param notify Indicates whether change notifications (e.g. via E-Mail) should be sent.
     * Note that this controls notifications for all users interested in changes to the work package (e.g. watchers, author and assignee),
     * not just the current user.
     * @param requestBody
     * @returns WorkPackageModel OK
     * @throws ApiError
     */
    public createWorkspaceWorkPackage(
        id: number,
        notify: boolean = true,
        requestBody?: WorkPackageModel,
    ): CancelablePromise<WorkPackageModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/workspaces/{id}/work_packages',
            path: {
                'id': id,
            },
            query: {
                'notify': notify,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** add work packages
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding workspace.*`,
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permissions:** view workspace
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a workspace.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * the client tries to write a read-only property
                 * a constraint for a property was violated
                 * a property was provided in an unreadable format`,
            },
        });
    }
    /**
     * Form for creating Work Packages in a Workspace
     * This endpoint allows you to validation a new work package creation body in a specific workspace. It works similarly
     * to the `/api/v3/work_packages/form` endpoint, but already specifies the work package's workspace in the path, so that
     * it does not have to be defined in the request body.
     * @param id ID of the workspace in which the work package will be created
     * @param requestBody
     * @returns WorkPackageFormModel OK
     * @throws ApiError
     */
    public formCreateWorkPackageInWorkspace(
        id: number,
        requestBody?: WorkPackageWriteModel,
    ): CancelablePromise<WorkPackageFormModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/workspaces/{id}/work_packages/form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
}
