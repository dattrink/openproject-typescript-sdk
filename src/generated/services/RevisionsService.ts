/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RevisionModel } from '../models/RevisionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevisionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View revision
     * @param id Revision id
     * @returns RevisionModel OK
     * @throws ApiError
     */
    public viewRevision(
        id: number,
    ): CancelablePromise<RevisionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/revisions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the revision does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view changesets for the project the repository is created in.
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a revision.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
