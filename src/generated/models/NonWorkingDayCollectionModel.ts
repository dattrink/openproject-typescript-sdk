/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { NonWorkingDayModel } from './NonWorkingDayModel';
export type NonWorkingDayCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * The array of non working days. Each day has a name and a date.
         */
        elements: Array<NonWorkingDayModel>;
    };
});

