/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type StorageWriteModel = {
    /**
     * Storage name, if not provided, falls back to a default.
     */
    name?: string;
    /**
     * The audience that the storage expects in tokens for requests to it,
     * usually the storage's client ID at the identity provider.
     *
     * This is only required for authentication through single-sign-on and so far
     * only supported for provider type Nextcloud.
     */
    storageAudience?: string;
    /**
     * The scope that will be requested when requesting a token for the storage through token exchange. Has no effect if no
     * token exchange is performed.
     *
     * This is only required for authentication through single-sign-on and so far only supported for provider type Nextcloud.
     */
    tokenExchangeScope?: string;
    /**
     * The application password to use for the Nextcloud storage. Ignored if the provider type is not Nextcloud.
     *
     * If a string is provided, the password is set and automatic management is enabled for the storage.
     * If null is provided, the password is unset and automatic management is disabled for the storage.
     */
    applicationPassword?: string | null;
    /**
     * A string with all the characters forbidden to be used for file and folder names in the storage. Used by OpenProject to avoid
     * creating files with unsupported names (e.g. when creating project folders).
     *
     * Only supported for provider type Nextcloud so far.
     */
    forbiddenFileNameCharacters?: string;
    _links?: {
        origin: Link;
        type: Link;
        authenticationMethod?: Link;
    };
};

