/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Link } from './Link';
import type { PrincipalModel } from './PrincipalModel';
export type UserModel = (PrincipalModel & CustomFieldProperties & {
    _type: 'User';
    /**
     * URL to user's avatar
     */
    avatar: string | null;
    /**
     * The user's login name
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    login?: string;
    /**
     * The user's first name
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    firstName?: string;
    /**
     * The user's last name
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    lastName?: string;
    /**
     * The user's email address
     *
     * # Conditions
     *
     * - E-Mail address not hidden
     * - User is not a new record
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    email?: string;
    /**
     * Flag indicating whether or not the user is an admin
     *
     * # Conditions
     *
     * - `admin`
     */
    admin?: boolean;
    /**
     * The current activation status of the user.
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    status?: string;
    /**
     * User's language | ISO 639-1 format
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     */
    language?: string;
    /**
     * User's identity_url for OmniAuth authentication.
     * **Deprecated:** It will be removed in the near future.
     *
     * # Conditions
     *
     * - User is self, or `create_user` or `manage_user` permission globally
     * @deprecated
     */
    identityUrl?: string | null;
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Time of the most recent change to the user
     */
    updatedAt?: string;
    _links?: {
        showUser?: Link;
        updateImmediately?: Link;
        lock?: Link;
        unlock?: Link;
        delete?: Link;
        authSource?: Link;
    };
});

