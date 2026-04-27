/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { PriorityModel } from './PriorityModel';
export type PriorityCollectionModel = (CollectionModel & {
    _links: {
        readonly self: Link;
    };
    _embedded: {
        elements: Array<PriorityModel>;
    };
});

