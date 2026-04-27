/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileLinkReadModel } from './FileLinkReadModel';
import type { Link } from './Link';
import type { PaginatedCollectionModel } from './PaginatedCollectionModel';
export type FileLinkCollectionReadModel = (PaginatedCollectionModel & {
    _links?: {
        self?: Link;
    };
    _embedded?: {
        elements?: Array<FileLinkReadModel>;
    };
});

