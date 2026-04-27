/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type PostModel = {
    /**
     * Identifier of this post
     */
    readonly id?: number;
    /**
     * The post's subject
     */
    subject: string;
    _links?: {
        addAttachment?: Link;
    };
};

