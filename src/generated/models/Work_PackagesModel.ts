/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { WorkPackageModel } from './WorkPackageModel';
export type Work_PackagesModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<WorkPackageModel>;
    };
});

