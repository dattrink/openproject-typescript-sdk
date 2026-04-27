/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryModel } from './CategoryModel';
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
export type Categories_by_WorkspaceModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        readonly elements?: Array<CategoryModel>;
    };
});

