/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostModel } from '../models/PostModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PostsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Post
     * Retrieve an individual post as identified by the id parameter
     * @param id Post's identifier
     * @returns PostModel OK
     * @throws ApiError
     */
    public viewPost(
        id: number,
    ): CancelablePromise<PostModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the post does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view messages in the post's project`,
            },
        });
    }
}
