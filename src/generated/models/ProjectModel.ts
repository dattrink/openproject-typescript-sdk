/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomCommentProperties } from './CustomCommentProperties';
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type ProjectModel = (CustomFieldProperties & CustomCommentProperties & {
    _type?: 'Project';
    /**
     * Projects' id
     */
    id?: number;
    identifier?: string;
    name?: string;
    /**
     * Indicates whether the project is currently active or already archived
     */
    active?: boolean;
    /**
     * Indicates whether the project is favorited by the current user
     */
    favorited?: boolean;
    statusExplanation?: Formattable;
    /**
     * Indicates whether the project is accessible for everybody
     */
    public?: boolean;
    description?: Formattable;
    /**
     * Time of creation. Can be writable by admins with the `apiv3_write_readonly_attributes` setting enabled.
     */
    createdAt?: string;
    /**
     * Time of the most recent change to the project
     */
    updatedAt?: string;
    _links?: {
        update?: Link;
        updateImmediately?: Link;
        delete?: Link;
        favor?: Link;
        disfavor?: Link;
        createWorkPackage?: Link;
        createWorkPackageImmediately?: Link;
        self: Link;
        categories: Link;
        types?: Link;
        versions?: Link;
        memberships?: Link;
        workPackages?: Link;
        parent?: Link;
        status?: Link;
        storages?: Array<Link>;
        projectStorages?: Link;
        ancestors?: Array<Link>;
    };
});

