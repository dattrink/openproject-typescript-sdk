/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorResponse } from './ErrorResponse';
import type { Link } from './Link';
import type { MembershipSchemaModel } from './MembershipSchemaModel';
import type { MembershipWriteModel } from './MembershipWriteModel';
export type MembershipFormModel = {
    _type: 'Form';
    _embedded: {
        payload: MembershipWriteModel;
        schema: MembershipSchemaModel;
        validationError: {
            base?: ErrorResponse;
            principal?: ErrorResponse;
            roles?: ErrorResponse;
        };
    };
    _links: {
        self: Link;
        validate: Array<Link>;
        commit: Link;
    };
};

