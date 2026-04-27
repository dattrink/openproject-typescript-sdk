/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectPhaseDefinitionCollectionModel } from '../models/ProjectPhaseDefinitionCollectionModel';
import type { ProjectPhaseDefinitionModel } from '../models/ProjectPhaseDefinitionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectPhaseDefinitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List project phase definitions
     * Returns a collection of all project phase definitions.
     * The result set is always limited to only contain project phase definitions the client is allowed to see.
     * @returns ProjectPhaseDefinitionCollectionModel OK
     * @throws ApiError
     */
    public listProjectPhaseDefinitions(): CancelablePromise<ProjectPhaseDefinitionCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_phase_definitions',
            errors: {
                400: `Returned if the client sends invalid request parameters e.g. filters`,
            },
        });
    }
    /**
     * Get a project phase definition
     * Gets a project phase definition resource. This resource is part of the abstract definition of a project life
     * cycle shaping the phases of a project.
     * @param id Project phase definition id
     * @returns ProjectPhaseDefinitionModel OK
     * @throws ApiError
     */
    public getProjectPhaseDefinition(
        id: number,
    ): CancelablePromise<ProjectPhaseDefinitionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/project_phase_definitions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the user does not have permission to see project phases.
                 **Required permission:** view project phase OR select project phase`,
            },
        });
    }
}
