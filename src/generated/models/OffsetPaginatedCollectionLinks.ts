/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionLinks } from './CollectionLinks';
import type { Link } from './Link';
export type OffsetPaginatedCollectionLinks = (CollectionLinks & {
    jumpTo: Link;
    changeSize: Link;
    previousByOffset?: Link;
    nextByOffset?: Link;
});

