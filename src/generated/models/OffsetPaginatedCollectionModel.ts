/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { OffsetPaginatedCollectionLinks } from './OffsetPaginatedCollectionLinks';
export type OffsetPaginatedCollectionModel = (CollectionModel & {
    /**
     * The amount of elements per page. If not set by the request this value defaults to the server's system
     * settings.
     */
    pageSize: number;
    /**
     * The page offset indicating on which page the element collection starts.
     */
    offset: number;
    _links: OffsetPaginatedCollectionLinks;
});

