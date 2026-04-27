/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { UserNonWorkingTimeModel } from './UserNonWorkingTimeModel';
export type UserNonWorkingTimeCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * The array of personal non-working times for the user, ordered by start date ascending.
         */
        elements: Array<UserNonWorkingTimeModel>;
    };
});

