/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GridReadModel } from './GridReadModel';
import type { PaginatedCollectionModel } from './PaginatedCollectionModel';
export type GridCollectionModel = (PaginatedCollectionModel & {
    _embedded: {
        elements: Array<GridReadModel>;
    };
});

