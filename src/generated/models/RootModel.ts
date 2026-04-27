/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type RootModel = {
    _type: 'Root';
    /**
     * The name of the OpenProject instance
     */
    instanceName: string;
    /**
     * The OpenProject core version number for the instance
     *
     * # Conditions
     *
     * **Permission** requires admin privileges
     */
    coreVersion?: string;
    _links: {
        self: Link;
        configuration: Link;
        memberships: Link;
        priorities: Link;
        relations: Link;
        statuses: Link;
        time_entries: Link;
        types: Link;
        user: Link;
        userPreferences: Link;
        workPackages: Link;
    };
};

