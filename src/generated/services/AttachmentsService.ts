/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentModel } from '../models/AttachmentModel';
import type { Attachments_Model } from '../models/Attachments_Model';
import type { FileUploadForm } from '../models/FileUploadForm';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List attachments by activity
     * List all attachments of a single activity.
     * @param id ID of the activity whose attachments will be listed
     * @returns Attachments_Model OK
     * @throws ApiError
     */
    public listActivityAttachments(
        id: number,
    ): CancelablePromise<Attachments_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/activities/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the activity does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:**
                - \`view_work_packages\`
                - for internal comments: \`view_internal_comments\`
                 *Note: A client without sufficient permissions shall not be able to test for the existence of an activity.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Add attachment to activity
     * Adds an attachment to the specified activity.
     * @param id ID of the activity to receive the attachment
     * @param formData
     * @returns AttachmentModel OK
     * @throws ApiError
     */
    public createActivityAttachment(
        id: number,
        formData?: FileUploadForm,
    ): CancelablePromise<AttachmentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/activities/{id}/attachments',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view_work_packages or view_internal_comments (for internal comments)
                 *Note that you will only receive this error, if you are at least allowed to see the activity*`,
                404: `Returned if the activity does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view_work_packages or view_internal_comments (for internal comments)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of an activity.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
    /**
     * Create Attachment
     * Clients can create attachments without a container first and attach them later on.
     * This is useful if the container does not exist at the time the attachment is uploaded.
     * After the upload, the client can then claim such containerless attachments for any resource eligible (e.g. WorkPackage) on subsequent requests.
     * The upload and the claiming *must* be done for the same user account. Attachments uploaded by another user cannot be claimed and
     * once claimed for a resource, they cannot be claimed by another.
     *
     * The upload request must be of type `multipart/form-data` with exactly two parts.
     *
     * The first part *must* be called `metadata`. Its content type is expected to be `application/json`,
     * the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.
     *
     * The second part *must* be called `file`, its content type *should* match the mime type of the file.
     * The body *must* be the raw content of the file.
     * Note that a `filename` *must* be indicated in the `Content-Disposition` of this part, although it will be ignored.
     * Instead the `fileName` inside the JSON of the metadata part will be used.
     * @returns AttachmentModel OK
     * @throws ApiError
     */
    public createAttachment(): CancelablePromise<AttachmentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/attachments',
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** At least one permission in any project: edit work package, add work package, edit messages, edit wiki pages (plugins might extend this list)`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
    /**
     * Delete attachment
     * Permanently deletes the specified attachment.
     * @param id Attachment id
     * @returns void
     * @throws ApiError
     */
    public deleteAttachment(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/attachments/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit permission for the container of the attachment or being the author for attachments without container
                 *Note that you will only receive this error, if you are at least allowed to see the attachment.*`,
                404: `Returned if the attachment does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view permission for the container of the attachment or being the author for attachments without container
                 *Note: A client without sufficient permissions shall not be able to test for the existence of an attachment.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View attachment
     * @param id Attachment id
     * @returns AttachmentModel OK
     * @throws ApiError
     */
    public viewAttachment(
        id: number,
    ): CancelablePromise<AttachmentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/attachments/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the attachment does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view permission for the container of the attachment or being the author for attachments without container
                 *Note: A client without sufficient permissions shall not be able to test for the existence of an attachment.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List attachments by meeting
     * @param id ID of the meeting whose attachments will be listed
     * @returns Attachments_Model OK
     * @throws ApiError
     */
    public listAttachmentsByMeeting(
        id: number,
    ): CancelablePromise<Attachments_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/meetings/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the meeting does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view meetings
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a meeting.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Add attachment to meeting
     * Adds an attachment with the meeting as its container.
     * @param id ID of the meeting to receive the attachment
     * @returns any OK
     * @throws ApiError
     */
    public addAttachmentToMeeting(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/meetings/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit meetings
                 *Note that you will only receive this error, if you are at least allowed to see the meeting*`,
                404: `Returned if the meeting does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view meetings
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a meeting
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
    /**
     * List attachments by post
     * @param id ID of the post whose attachments will be listed
     * @returns Attachments_Model OK
     * @throws ApiError
     */
    public listAttachmentsByPost(
        id: number,
    ): CancelablePromise<Attachments_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/posts/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the post does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view messages
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a post.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Add attachment to post
     * Adds an attachment with the post as its container.
     * @param id ID of the post to receive the attachment
     * @returns any OK
     * @throws ApiError
     */
    public addAttachmentToPost(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/posts/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit messages
                 *Note that you will only receive this error, if you are at least allowed to see the wiki page*`,
                404: `Returned if the post does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view messages
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a post.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
    /**
     * List attachments by wiki page
     * @param id ID of the wiki page whose attachments will be listed
     * @returns Attachments_Model OK
     * @throws ApiError
     */
    public listAttachmentsByWikiPage(
        id: number,
    ): CancelablePromise<Attachments_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/wiki_pages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the wiki page does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view wiki pages
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a work package.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Add attachment to wiki page
     * Adds an attachment with the wiki page as its container.
     * @param id ID of the wiki page to receive the attachment
     * @returns any OK
     * @throws ApiError
     */
    public addAttachmentToWikiPage(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/wiki_pages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit wiki pages
                 *Note that you will only receive this error, if you are at least allowed to see the wiki page*`,
                404: `Returned if the wiki page does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view wiki pages
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a wiki page
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
    /**
     * List attachments by work package
     * @param id ID of the work package whose attachments will be listed
     * @returns Attachments_Model OK
     * @throws ApiError
     */
    public listWorkPackageAttachments(
        id: number,
    ): CancelablePromise<Attachments_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work package
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a work package.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Create work package attachment
     * To add an attachment to a work package, a client needs to issue a request of type `multipart/form-data`
     * with exactly two parts.
     *
     * The first part *must* be called `metadata`. Its content type is expected to be `application/json`,
     * the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.
     *
     * The second part *must* be called `file`, its content type *should* match the mime type of the file.
     * The body *must* be the raw content of the file.
     * Note that a `filename` must be indicated in the `Content-Disposition` of this part, however it will be ignored.
     * Instead the `fileName` inside the JSON of the metadata part will be used.
     * @param id ID of the work package to receive the attachment
     * @returns AttachmentModel OK
     * @throws ApiError
     */
    public createWorkPackageAttachment(
        id: number,
    ): CancelablePromise<AttachmentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/attachments',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the client sends a not understandable request. Reasons include:
                 * Omitting one of the required parts (metadata and file)
                 * sending unparsable JSON in the metadata part`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** edit work package or add work package
                 *Note that you will only receive this error, if you are at least allowed to see the work package.*`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work package
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a work package.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if the client tries to send an invalid attachment.
                Reasons are:
                 * Omitting the file name (\`fileName\` property of metadata part)
                 * Sending a file that is too large`,
            },
        });
    }
}
