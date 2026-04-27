/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type PrincipalModel = {
    _type: 'User' | 'Group' | 'PlaceholderUser';
    /**
     * The principal's unique identifier.
     */
    id: number;
    /**
     * The principal's display name, layout depends on instance settings.
     */
    name: string;
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Time of the most recent change to the principal
     */
    updatedAt?: string;
    _links: {
        self: Link;
        memberships?: Link;
    };
};

