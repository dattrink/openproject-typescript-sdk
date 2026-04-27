/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectPhaseModel } from '../models/ProjectPhaseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectPhasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a project phase
     * Gets a project phase resource. This resource contains an instance of a ProjectPhaseDefinition within a project which can
     * then have project specific dates.
     * @param id Project phase id
     * @returns ProjectPhaseModel OK
     * @throws ApiError
     */
    public getProjectPhase(
        id: number,
    ): CancelablePromise<ProjectPhaseModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_phases/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project phase does not exist or the client does not have sufficient permissions to see it.
                 **Required permission:** view project phase`,
            },
        });
    }
}
