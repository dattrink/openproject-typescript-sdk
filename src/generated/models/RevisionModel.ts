/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type RevisionModel = {
    /**
     * Revision's id, assigned by OpenProject
     */
    readonly id?: number;
    /**
     * The raw SCM identifier of the revision (e.g. full SHA hash)
     */
    readonly identifier: string;
    /**
     * The SCM identifier of the revision, formatted (e.g. shortened unambiguous SHA hash). May be identical to identifier in many cases
     */
    readonly formattedIdentifier: string;
    /**
     * The name of the author that committed this revision. Note that this name is retrieved from the repository and does not identify a user in OpenProject.
     */
    readonly authorName: string;
    message: Formattable;
    /**
     * The time this revision was committed to the repository
     */
    createdAt: string;
    _links?: {
        self: Link;
        project: Link;
        author?: Link;
        showRevision: Link;
    };
};

