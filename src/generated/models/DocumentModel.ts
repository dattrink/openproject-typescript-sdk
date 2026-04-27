/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type DocumentModel = {
    /**
     * Document's id
     */
    readonly id?: number;
    /**
     * The title chosen for the document
     */
    title?: string;
    description?: Formattable;
    /**
     * The time the document was created at
     */
    readonly createdAt?: string;
    _links?: {
        self: Link;
        project: Link;
        attachments: Link;
    };
};

