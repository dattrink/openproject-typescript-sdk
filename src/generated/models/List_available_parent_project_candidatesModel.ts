/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { PortfolioModel } from './PortfolioModel';
import type { ProgramModel } from './ProgramModel';
import type { ProjectModel } from './ProjectModel';
export type List_available_parent_project_candidatesModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * Collection of projects
         */
        readonly elements?: Array<(ProjectModel & ProgramModel & PortfolioModel)>;
    };
});

