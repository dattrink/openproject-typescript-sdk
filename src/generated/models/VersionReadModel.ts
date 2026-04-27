/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldLinkedProperties } from './CustomFieldLinkedProperties';
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type VersionReadModel = (CustomFieldProperties & {
    /**
     * Version id
     */
    id: number;
    _type: 'Version';
    /**
     * Version name
     */
    name: string;
    description: Formattable;
    startDate: string | null;
    endDate: string | null;
    /**
     * The current status of the version. This could be:
     *
     * - *open*: if the version is available to be assigned to work packages in all shared projects
     * - *locked*: if the version is not finished, but locked for further assignments to work packages
     * - *closed*: if the version is finished
     */
    status: 'open' | 'locked' | 'closed';
    /**
     * The indicator of how the version is shared between projects. This could be:
     *
     * - *none*: if the version is only available in the defining project
     * - *descendants*: if the version is shared with the descendants of the defining project
     * - *hierarchy*: if the version is shared with the descendants and the ancestors of the defining project
     * - *tree*: if the version is shared with the root project of the defining project and all descendants of the root project
     * - *system*: if the version is shared globally
     */
    sharing: 'none' | 'descendants' | 'hierarchy' | 'tree' | 'system';
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Time of the most recent change to the version
     */
    updatedAt: string;
    _links?: (CustomFieldLinkedProperties & {
        self: Link;
        schema: Link;
        update?: Link;
        delete?: Link;
        updateImmediately?: Link;
        definingProject: Link;
        availableInProjects: Link;
    });
});

