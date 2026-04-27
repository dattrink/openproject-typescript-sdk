/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembershipReadModel } from './MembershipReadModel';
import type { PaginatedCollectionModel } from './PaginatedCollectionModel';
export type MembershipCollectionModel = (PaginatedCollectionModel & {
    _embedded: {
        elements: Array<MembershipReadModel>;
    };
});

