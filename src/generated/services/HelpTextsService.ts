/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HelpTextCollectionModel } from '../models/HelpTextCollectionModel';
import type { HelpTextModel } from '../models/HelpTextModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HelpTextsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List help texts
     * List the complete collection of help texts.
     * @returns HelpTextCollectionModel OK
     * @throws ApiError
     */
    public listHelpTexts(): CancelablePromise<HelpTextCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/help_texts',
        });
    }
    /**
     * Get help text
     * Fetches the help text from the given id.
     * @param id Help text id
     * @returns HelpTextModel OK
     * @throws ApiError
     */
    public getHelpText(
        id: number,
    ): CancelablePromise<HelpTextModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/help_texts/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the help text does not exist.`,
            },
        });
    }
}
