/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { UserWorkingHoursModel } from './UserWorkingHoursModel';
export type UserWorkingHoursCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * The array of working hours records for the user, ordered by `validFrom` descending.
         */
        elements: Array<UserWorkingHoursModel>;
    };
});

