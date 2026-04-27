/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { PortfolioModel } from './PortfolioModel';
import type { ProgramModel } from './ProgramModel';
import type { ProjectModel } from './ProjectModel';
export type TimeEntryActivityModel = {
    _type: 'TimeEntriesActivity';
    /**
     * Time entry id
     */
    id: number;
    /**
     * The human readable name chosen for this activity
     */
    name: string;
    /**
     * The rank the activity has in a list of activities
     */
    position: number;
    /**
     * Flag to signal whether this activity is the default activity
     */
    default: boolean;
    _embedded: {
        projects: Array<(ProjectModel | ProgramModel | PortfolioModel)>;
    };
    _links: {
        self: Link;
        projects: Array<Link>;
    };
};

