/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { SprintModel } from './SprintModel';
export type SprintCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<SprintModel>;
    };
});

