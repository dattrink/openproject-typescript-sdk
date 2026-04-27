/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { UserModel } from './UserModel';
export type WatchersModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        readonly elements?: Array<UserModel>;
    };
});

