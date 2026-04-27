/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { HelpTextModel } from './HelpTextModel';
import type { Link } from './Link';
export type HelpTextCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        elements: Array<HelpTextModel>;
    };
});

