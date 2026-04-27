/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type RoleModel = {
    _type?: 'Role';
    /**
     * Role id
     */
    readonly id?: number;
    /**
     * Role name
     */
    name: string;
    _links?: {
        self: Link;
    };
};

