/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { DayModel } from './DayModel';
import type { Link } from './Link';
export type DayCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * The array of days. Each day has a name and a working status
         * indicating if it is a working or a non-working day.
         */
        elements: Array<DayModel>;
    };
});

