/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileLinkOriginDataModel } from './FileLinkOriginDataModel';
import type { Link } from './Link';
export type StorageFileModel = (FileLinkOriginDataModel & {
    _type: 'StorageFile';
    /**
     * Location identification for file in storage
     */
    location: string;
    _links: {
        self: Link;
    };
});

