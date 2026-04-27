/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type MembershipWriteModel = {
    _links: {
        principal?: Link;
        roles?: Array<Link>;
        project?: Link;
    };
    _meta?: {
        notificationMessage?: Formattable;
        /**
         * Set to false, if no notification should get sent.
         */
        sendNotification?: boolean;
    };
};

