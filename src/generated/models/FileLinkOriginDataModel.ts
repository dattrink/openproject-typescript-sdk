/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FileLinkOriginDataModel = {
    /**
     * Linked file's id on the origin
     */
    id: string;
    /**
     * Linked file's name on the origin
     */
    name: string;
    /**
     * MIME type of the linked file.
     *
     * To link a folder entity, the custom MIME type `application/x-op-directory` MUST be provided. Otherwise it defaults back to
     * an unknown MIME type.
     */
    mimeType?: string;
    /**
     * file size on origin in bytes
     */
    size?: number;
    /**
     * Timestamp of the creation datetime of the file on the origin
     */
    createdAt?: string;
    /**
     * Timestamp of the datetime of the last modification of the file on the origin
     */
    lastModifiedAt?: string;
    /**
     * Display name of the author that created the file on the origin
     */
    createdByName?: string;
    /**
     * Display name of the author that modified the file on the origin last
     */
    lastModifiedByName?: string;
};

