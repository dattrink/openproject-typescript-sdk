/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { MeetingModel } from './MeetingModel';
import type { PaginatedCollectionModel } from './PaginatedCollectionModel';
export type MeetingCollectionModel = (PaginatedCollectionModel & {
    _embedded: {
        elements: Array<MeetingModel>;
    };
    _links: {
        self: Link;
    };
});

