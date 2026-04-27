/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { HierarchyItemReadModel } from './HierarchyItemReadModel';
import type { Link } from './Link';
export type HierarchyItemCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<HierarchyItemReadModel>;
    };
});

