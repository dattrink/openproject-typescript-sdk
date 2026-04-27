/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { TypeModel } from './TypeModel';
export type Types_by_WorkspaceModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        readonly elements?: Array<TypeModel>;
    };
});

