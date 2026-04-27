/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfigurationModel } from '../models/ConfigurationModel';
import type { ProjectConfigurationModel } from '../models/ProjectConfigurationModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConfigurationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View configuration
     * @returns ConfigurationModel OK
     * @throws ApiError
     */
    public viewConfiguration(): CancelablePromise<ConfigurationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/configuration',
        });
    }
    /**
     * View project configuration
     * Returns the configuration scoped to a specific project, including all global
     * configuration properties plus project-specific settings.
     * @param id Project id
     * @returns ProjectConfigurationModel OK
     * @throws ApiError
     */
    public viewProjectConfiguration(
        id: number,
    ): CancelablePromise<ProjectConfigurationModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/configuration',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the user cannot view it.`,
            },
        });
    }
}
