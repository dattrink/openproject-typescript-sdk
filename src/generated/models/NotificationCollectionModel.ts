/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
import type { NotificationModel } from './NotificationModel';
import type { SchemaModel } from './SchemaModel';
export type NotificationCollectionModel = (CollectionModel & {
    _links: {
        self: Link;
        jumpTo?: Link;
        changeSize?: Link;
    };
    _embedded: {
        elements: Array<NotificationModel>;
        detailsSchemas: Array<SchemaModel>;
    };
});

