/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type NewsModel = {
    /**
     * News' id
     */
    readonly id?: number;
    /**
     * The headline of the news
     */
    readonly title?: string;
    /**
     * A short summary
     */
    readonly summary?: string;
    description?: Formattable;
    /**
     * The time the news was created at
     */
    readonly createdAt?: string;
    _links?: {
        self: Link;
        project: Link;
        author: Link;
        updateImmediately?: Link;
        delete?: Link;
    };
};

