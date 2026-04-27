/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type AttachmentModel = {
    /**
     * Attachment's id
     */
    id?: number;
    /**
     * The name of the uploaded file
     */
    fileName: string;
    /**
     * The size of the uploaded file in Bytes
     */
    fileSize?: number;
    description: Formattable;
    status: 'uploaded' | 'prepared' | 'scanned' | 'quarantined' | 'rescan';
    /**
     * The files MIME-Type as determined by the server
     */
    contentType: string;
    /**
     * A checksum for the files content
     */
    digest: {
        /**
         * The algorithm used to generate the digest.
         */
        algorithm: string;
        /**
         * The hexadecimal representation of the digested hash value.
         */
        hash: string;
    };
    /**
     * Time of creation
     */
    createdAt: string;
    _links?: {
        delete?: Link;
        self: Link;
        container: Link;
        author: Link;
        downloadLocation: Link;
    };
};

