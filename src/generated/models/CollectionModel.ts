/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionLinks } from './CollectionLinks';
export type CollectionModel = {
    _type: 'Collection';
    /**
     * The total amount of elements available in the collection.
     */
    total: number;
    /**
     * Actual amount of elements in this response.
     */
    count: number;
    _links: CollectionLinks;
};

