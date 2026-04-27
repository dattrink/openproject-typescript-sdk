/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { StatusModel } from './StatusModel';
export type StatusCollectionModel = (CollectionModel & {
    _embedded: {
        elements: Array<StatusModel>;
    };
});

