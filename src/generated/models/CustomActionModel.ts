/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type CustomActionModel = {
    _type?: 'CustomAction';
    /**
     * The name of the custom action
     */
    name?: string;
    /**
     * The description for the custom action
     */
    description?: string;
    _links?: {
        self: Link;
        executeImmediately: Link;
    };
};

