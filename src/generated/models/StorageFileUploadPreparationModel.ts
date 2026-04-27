/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type StorageFileUploadPreparationModel = {
    /**
     * The project identifier, from where a user starts uploading a file.
     */
    projectId: number;
    /**
     * The file name.
     */
    fileName: string;
    /**
     * The directory to which the file is to be uploaded. For root directories, the value `/` must
     * be provided.
     */
    parent: string;
};

