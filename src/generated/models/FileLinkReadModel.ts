/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileLinkOriginDataModel } from './FileLinkOriginDataModel';
import type { Link } from './Link';
import type { StorageReadModel } from './StorageReadModel';
export type FileLinkReadModel = {
    /**
     * File link id
     */
    id?: number;
    _type?: 'FileLink';
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Time of the most recent change to the file link
     */
    updatedAt?: string;
    originData?: FileLinkOriginDataModel;
    _embedded?: {
        storage: StorageReadModel;
    };
    _links?: {
        self?: Link;
        storage?: Link;
        container?: Link;
        creator?: Link;
        delete?: Link;
        status?: Link;
        originOpen?: Link;
        staticOriginOpen?: Link;
        originOpenLocation?: Link;
        staticOriginOpenLocation?: Link;
        staticOriginDownload?: Link;
    };
};

