/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
export type PaginatedCollectionModel = (CollectionModel & {
    /**
     * Amount of elements that a response will hold.
     */
    pageSize: number;
    /**
     * The page number that is requested from paginated collection.
     */
    offset: number;
    _links?: {
        jumpTo: Link;
        changeSize: Link;
    };
});

