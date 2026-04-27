/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type TypeModel = {
    /**
     * Type id
     */
    readonly id: number;
    /**
     * Type name
     */
    readonly name: string;
    /**
     * The color used to represent this type
     */
    readonly color: string | null;
    /**
     * Sort index of the type
     */
    readonly position: number;
    /**
     * Is this type active by default in new projects?
     */
    readonly isDefault: boolean;
    /**
     * Do work packages of this type represent a milestone?
     */
    readonly isMilestone: boolean;
    /**
     * Time of creation
     */
    readonly createdAt: string;
    /**
     * Time of the most recent change to the user
     */
    updatedAt: string;
    _links?: {
        self: Link;
    };
};

