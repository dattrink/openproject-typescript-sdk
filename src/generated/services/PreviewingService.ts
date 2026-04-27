/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarkdownModel } from '../models/MarkdownModel';
import type { Plain_TextModel } from '../models/Plain_TextModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PreviewingService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Preview Markdown document
     * @param context API-Link to the context in which the rendering occurs, for example a specific work package.
     *
     * If left out only context-agnostic rendering takes place.
     * Please note that OpenProject features markdown-extensions on top of the extensions GitHub Flavored Markdown (gfm) already
     * provides that can only work given a context (e.g. display attached images).
     *
     * **Supported contexts:**
     *
     * * `/api/v3/work_packages/{id}` - an existing work package
     * @returns MarkdownModel OK
     * @throws ApiError
     */
    public previewMarkdownDocument(
        context?: string,
    ): CancelablePromise<MarkdownModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/render/markdown',
            query: {
                'context': context,
            },
            errors: {
                400: `Returned if the context passed by the client is not valid (e.g. unknown).
                Note that this response will also occur when the requesting user
                is not allowed to see the context resource (e.g. limited work package visibility).`,
                415: `Returned if the Content-Type indicated in the request is not \`text/plain\`.`,
            },
        });
    }
    /**
     * Preview plain document
     * @returns Plain_TextModel OK
     * @throws ApiError
     */
    public previewPlainDocument(): CancelablePromise<Plain_TextModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/render/plain',
            errors: {
                415: `Returned if the Content-Type indicated in the request is not \`text/plain\`.`,
            },
        });
    }
}
