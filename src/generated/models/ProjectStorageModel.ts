/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type ProjectStorageModel = {
    _type: 'ProjectStorage';
    /**
     * The project storage's id
     */
    id: number;
    projectFolderMode: 'inactive' | 'manual';
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Time of the most recent change to the project storage
     */
    updatedAt: string;
    _links?: {
        self: Link;
        creator: Link;
        storage: Link;
        project: Link;
        projectFolder?: Link;
        open?: Link;
        openWithConnectionEnsured?: Link;
    };
};

