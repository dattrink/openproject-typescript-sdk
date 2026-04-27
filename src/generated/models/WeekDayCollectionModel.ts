/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { WeekDayModel } from './WeekDayModel';
export type WeekDayCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        /**
         * The array of week days.
         */
        elements: Array<WeekDayModel>;
    };
});

