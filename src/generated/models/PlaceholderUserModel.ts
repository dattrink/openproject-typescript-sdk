/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { PrincipalModel } from './PrincipalModel';
export type PlaceholderUserModel = (PrincipalModel & {
    _type: 'PlaceholderUser';
    /**
     * The current activation status of the placeholder user.
     *
     * # Conditions
     *
     * - User has `manage_placeholder_user` permission globally
     */
    status?: string;
    _links?: {
        showUser: Link;
        delete?: Link;
        updateImmediately?: Link;
    };
});

