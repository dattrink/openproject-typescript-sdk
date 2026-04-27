/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { OffsetPaginatedCollectionLinks } from './OffsetPaginatedCollectionLinks';
import type { OffsetPaginatedCollectionModel } from './OffsetPaginatedCollectionModel';
import type { PortfolioModel } from './PortfolioModel';
export type PortfolioCollectionModel = (OffsetPaginatedCollectionModel & {
    _links: (OffsetPaginatedCollectionLinks & {
        representations?: Array<Link>;
    });
    _embedded: {
        elements: Array<PortfolioModel>;
    };
});

