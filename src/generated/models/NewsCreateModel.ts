/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type NewsCreateModel = {
    /**
     * The headline of the news
     */
    readonly title?: string;
    /**
     * A short summary
     */
    readonly summary?: string;
    description?: Formattable;
    _links?: {
        project: Link;
    };
};

