/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { StorageReadModel } from './StorageReadModel';
export type StorageCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<StorageReadModel>;
    };
});

