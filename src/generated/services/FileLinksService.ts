/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileLinkCollectionReadModel } from '../models/FileLinkCollectionReadModel';
import type { FileLinkCollectionWriteModel } from '../models/FileLinkCollectionWriteModel';
import type { FileLinkReadModel } from '../models/FileLinkReadModel';
import type { OAuthClientCredentialsWriteModel } from '../models/OAuthClientCredentialsWriteModel';
import type { ProjectStorageCollectionModel } from '../models/ProjectStorageCollectionModel';
import type { ProjectStorageModel } from '../models/ProjectStorageModel';
import type { StorageCollectionModel } from '../models/StorageCollectionModel';
import type { StorageFileModel } from '../models/StorageFileModel';
import type { StorageFilesModel } from '../models/StorageFilesModel';
import type { StorageFileUploadLinkModel } from '../models/StorageFileUploadLinkModel';
import type { StorageFileUploadPreparationModel } from '../models/StorageFileUploadPreparationModel';
import type { StorageFolderWriteModel } from '../models/StorageFolderWriteModel';
import type { StorageReadModel } from '../models/StorageReadModel';
import type { StorageWriteModel } from '../models/StorageWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FileLinksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a file link.
     * Gets a single file link resource of a work package.
     * @param id File link id
     * @returns FileLinkReadModel OK
     * @throws ApiError
     */
    public viewFileLink(
        id: number,
    ): CancelablePromise<FileLinkReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/file_links/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package, view file links`,
            },
        });
    }
    /**
     * Removes a file link.
     * Removes a file link on a work package.
     *
     * The request contains only the file link identifier as a path parameter. No request body is needed.
     * @param id File link id
     * @returns any OK
     * @throws ApiError
     */
    public deleteFileLink(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/file_links/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage file links
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding work package.*`,
                404: `Returned if the work package or the file link does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view work package, view file links`,
            },
        });
    }
    /**
     * Creates an opening uri of the linked file.
     * Creates a uri to open the origin file linked by the given file link. This uri depends on the storage type and
     * is always located on the origin storage itself.
     * @param id File link id
     * @param location Boolean flag indicating, if the file should be opened directly or rather the directory location.
     * @returns void
     * @throws ApiError
     */
    public openFileLink(
        id: number,
        location?: boolean,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/file_links/{id}/open',
            path: {
                'id': id,
            },
            query: {
                'location': location,
            },
            errors: {
                303: `Returned if the request was successful. In the \`Location\` header is the uri where the client can open the origin
                file on the storage.`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package, view file links`,
            },
        });
    }
    /**
     * Creates a download uri of the linked file.
     * Creates a uri to download the origin file linked by the given file link. This uri depends on the storage type and
     * is always located on the origin storage itself.
     * @param id File link id
     * @returns void
     * @throws ApiError
     */
    public downloadFileLink(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/file_links/{id}/download',
            path: {
                'id': id,
            },
            errors: {
                303: `Returned if the request was successful. In the \`Location\` header is the uri where the client can download the
                origin file from the storage.`,
                404: `Returned if the work package does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view work package, view file links`,
            },
        });
    }
    /**
     * Gets a list of project storages
     * Gets a collection of all project storages that meet the provided filters and the user has permission to see them.
     * @param filters JSON specifying filter conditions.
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * - project_id
     * - storage_id
     * - storage_url
     * @returns ProjectStorageCollectionModel OK
     * @throws ApiError
     */
    public listProjectStorages(
        filters: string = '[]',
    ): CancelablePromise<ProjectStorageCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_storages',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Returned if any given filter is invalid.`,
            },
        });
    }
    /**
     * Gets a project storage
     * Gets a project storage resource. This resource contains all data that is applicable on the relation between a
     * storage and a project.
     * @param id Project storage id
     * @returns ProjectStorageModel OK
     * @throws ApiError
     */
    public getProjectStorage(
        id: number,
    ): CancelablePromise<ProjectStorageModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_storages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Open the project storage
     * Gets a redirect to the location of the project storage's remote origin. If the project storage has a project
     * folder, it is opened at this location. If not, the storage root is opened.
     * @param id Project storage id
     * @returns void
     * @throws ApiError
     */
    public openProjectStorage(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_storages/{id}/open',
            path: {
                'id': id,
            },
            errors: {
                303: `Redirect`,
                403: `Returned if the authorization token of the current user grants no permission to access the remote storage.`,
                404: `Returned if the project storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Get Storages
     * Returns a collection of storages.
     * @returns StorageCollectionModel OK
     * @throws ApiError
     */
    public listStorages(): CancelablePromise<StorageCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/storages',
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * Creates a storage.
     * Creates a storage resource. When creating a storage, a confidential OAuth 2 provider application is created
     * automatically. The oauth client id and secret of the created OAuth application are returned in the response.
     *
     * **IMPORTANT:** This is the only time, the oauth client secret is visible to the consumer. After that, the secret is
     * hidden.
     *
     * To update the storage with OAuth client credentials, which enable the storage resource to behave as an OAuth 2
     * client against an external OAuth 2 provider application, another request must be made to create those, see
     * `POST /api/v3/storages/{id}/oauth_client_credentials`.
     * @param requestBody
     * @returns StorageReadModel Created
     * @throws ApiError
     */
    public createStorage(
        requestBody?: StorageWriteModel,
    ): CancelablePromise<StorageReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/storages',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** Depends on the page the grid is defined for.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
                422: `Returned if:
                 * a constraint for a property was violated (\`PropertyConstraintViolation\`)`,
            },
        });
    }
    /**
     * Get a storage
     * Gets a storage resource. As a side effect, a live connection to the storages origin is established to retrieve
     * connection state data.
     * @param id Storage id
     * @returns StorageReadModel OK
     * @throws ApiError
     */
    public getStorage(
        id: number,
    ): CancelablePromise<StorageReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/storages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Update a storage
     * Updates a storage resource. Only data that is not generated by the server can be updated. This excludes the OAuth 2
     * application data.
     * @param id Storage id
     * @param requestBody
     * @returns StorageReadModel OK
     * @throws ApiError
     */
    public updateStorage(
        id: number,
        requestBody?: StorageWriteModel,
    ): CancelablePromise<StorageReadModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/storages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Delete a storage
     * Deletes a storage resource. This also deletes all related records, like the created oauth application, client, and
     * any file links created within this storage.
     * @param id Storage id
     * @returns void
     * @throws ApiError
     */
    public deleteStorage(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/storages/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Gets files of a storage.
     * Gets a collection of files from a storage.
     *
     * If no `parent` context is given, the result is the content of the document root. With `parent` context given, the
     * result contains the collections of files/directories from within the given parent file id.
     *
     * If given `parent` context is no directory, `400 Bad Request` is returned.
     * @param id Storage id
     * @param parent Parent file identification
     * @returns StorageFilesModel OK
     * @throws ApiError
     */
    public getStorageFiles(
        id: number,
        parent?: string,
    ): CancelablePromise<StorageFilesModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/storages/{id}/files',
            path: {
                'id': id,
            },
            query: {
                'parent': parent,
            },
            errors: {
                400: `Returned if the given parent parameter value does not refer to a directory.`,
                404: `Returned in either of those cases:
                - if the storage does not exist or the client does not have sufficient permissions to see it
                 **Required permission:** view file links
                - if the document root file identification does not exist on the storage`,
            },
        });
    }
    /**
     * Preparation of a direct upload of a file to the given storage.
     * Executes a request that prepares a link for a direct upload to the storage.
     *
     * The background here is, that the client needs to make a direct request to the storage instance for file uploading,
     * but should not get access to the credentials, which are stored in the backend. The response contains a link object,
     * that enables the client to execute a file upload without the real credentials.
     * @param id Storage id
     * @param requestBody
     * @returns StorageFileUploadLinkModel OK
     * @throws ApiError
     */
    public prepareStorageFileUpload(
        id: number,
        requestBody?: StorageFileUploadPreparationModel,
    ): CancelablePromise<StorageFileUploadLinkModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/storages/{id}/files/prepare_upload',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the given parent parameter value does not refer to a directory.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage file links`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
                500: `Returned if the outbound request to the storage has failed with any reason.`,
            },
        });
    }
    /**
     * Creation of a new folder
     * Creates a new folder under the given parent
     * @param id Storage id
     * @param requestBody
     * @returns StorageFileModel Created
     * @throws ApiError
     */
    public createStorageFolder(
        id: number,
        requestBody?: StorageFolderWriteModel,
    ): CancelablePromise<StorageFileModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/storages/{id}/folders',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is missing a required parameter.`,
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** manage file links`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Creates an oauth client credentials object for a storage.
     * Inserts the OAuth 2 credentials into the storage, to allow the storage to act as an OAuth 2 client. Calling this
     * endpoint on a storage that already contains OAuth 2 client credentials will replace them.
     * @param id Storage id
     * @param requestBody
     * @returns StorageReadModel Created
     * @throws ApiError
     */
    public createStorageOauthCredentials(
        id: number,
        requestBody?: OAuthClientCredentialsWriteModel,
    ): CancelablePromise<StorageReadModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/storages/{id}/oauth_client_credentials',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
            },
        });
    }
    /**
     * Open the storage
     * Gets a redirect to the location of the storage's remote origin. The storage's files root should be the target
     * location.
     * @param id Storage id
     * @returns void
     * @throws ApiError
     */
    public openStorage(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/storages/{id}/open',
            path: {
                'id': id,
            },
            errors: {
                303: `Redirect`,
                404: `Returned if the storage does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view file links`,
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
}
