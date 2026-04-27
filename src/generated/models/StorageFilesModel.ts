/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { StorageFileModel } from './StorageFileModel';
export type StorageFilesModel = {
    _type: 'StorageFiles';
    /**
     * List of files provided by the selected storage.
     */
    files: Array<StorageFileModel>;
    parent: StorageFileModel;
    /**
     * List of ancestors of the parent directory. Can be empty, if parent directory was root directory.
     */
    ancestors: Array<StorageFileModel>;
    _links: {
        self: Link;
    };
};

