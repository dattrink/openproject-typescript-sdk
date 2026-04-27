/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentModel } from './AttachmentModel';
import type { CollectionModel } from './CollectionModel';
import type { Link } from './Link';
export type Attachments_Model = (CollectionModel & {
    _links: {
        self: Link;
    };
    _embedded: {
        readonly elements?: Array<AttachmentModel>;
    };
});

