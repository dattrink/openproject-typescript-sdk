/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Link } from './Link';
import type { PrincipalModel } from './PrincipalModel';
import type { UserModel } from './UserModel';
export type GroupModel = (PrincipalModel & CustomFieldProperties & {
    _type: 'Group';
    _embedded: {
        /**
         * Embedded list of members.
         */
        members?: Array<UserModel>;
    };
    _links?: {
        self?: Link;
        members?: Array<Link>;
        memberships?: Link;
        delete?: Link;
        updateImmediately?: Link;
    };
});

