/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileLinkOriginDataModel } from './FileLinkOriginDataModel';
import type { Link } from './Link';
export type FileLinkWriteModel = {
    originData: FileLinkOriginDataModel;
    _links: ({
        storage: Link;
    } | {
        storageUrl: Link;
    });
};

