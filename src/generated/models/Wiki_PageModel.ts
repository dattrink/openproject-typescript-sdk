/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type Wiki_PageModel = {
    /**
     * Identifier of this wiki page
     */
    readonly id?: number;
    /**
     * The wiki page's title
     */
    title: string;
    _links?: {
        addAttachment?: Link;
    };
};

