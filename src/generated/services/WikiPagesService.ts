/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wiki_PageModel } from '../models/Wiki_PageModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WikiPagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Wiki Page
     * Retrieve an individual wiki page as identified by the id parameter
     * @param id Wiki page identifier
     * @returns Wiki_PageModel OK
     * @throws ApiError
     */
    public viewWikiPage(
        id: number,
    ): CancelablePromise<Wiki_PageModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/wiki_pages/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the wiki page does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view wiki page in the page's project`,
            },
        });
    }
}
