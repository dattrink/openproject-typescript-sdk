/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { OffsetPaginatedCollectionModel } from './OffsetPaginatedCollectionModel';
import type { ProjectPhaseDefinitionModel } from './ProjectPhaseDefinitionModel';
export type ProjectPhaseDefinitionCollectionModel = (OffsetPaginatedCollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<ProjectPhaseDefinitionModel>;
    };
});

