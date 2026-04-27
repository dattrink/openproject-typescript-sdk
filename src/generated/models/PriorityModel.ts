/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type PriorityModel = {
    /**
     * Priority id
     */
    readonly id?: number;
    /**
     * Priority name
     */
    readonly name?: string;
    /**
     * Sort index of the priority
     */
    readonly position?: number;
    /**
     * Indicates whether this is the default value
     */
    readonly isDefault?: boolean;
    /**
     * Indicates whether the priority is available
     */
    isActive?: boolean;
    _links?: {
        self: Link;
    };
};

