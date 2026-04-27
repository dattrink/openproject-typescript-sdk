/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { OAuthApplicationReadModel } from './OAuthApplicationReadModel';
import type { OAuthClientCredentialsReadModel } from './OAuthClientCredentialsReadModel';
export type StorageReadModel = {
    /**
     * Storage id
     */
    id: number;
    _type: 'Storage';
    /**
     * Storage name
     */
    name: string;
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
     * The tenant id of a file storage of type OneDrive.
     *
     * Ignored if the provider type is not OneDrive. May be null if the storage is not configured completely.
     */
    tenantId?: string | null;
    /**
     * The drive id of a file storage of type OneDrive.
     *
     * Ignored if the provider type is not OneDrive. May be null if the storage is not configured completely.
     */
    driveId?: string | null;
    /**
     * Whether the storage has the application password to use for the Nextcloud storage.
     *
     * Ignored if the provider type is not Nextcloud.
     */
    hasApplicationPassword?: boolean;
    /**
     * A string with all the characters forbidden to be used for file and folder names in the storage. Used by OpenProject to avoid
     * creating files with unsupported names (e.g. when creating project folders).
     *
     * Only supported for provider type Nextcloud so far.
     */
    forbiddenFileNameCharacters?: string;
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Time of the most recent change to the storage
     */
    updatedAt?: string;
    /**
     * Indication, if the storage is fully configured
     */
    configured?: boolean;
    _embedded?: {
        oauthApplication?: OAuthApplicationReadModel;
        oauthClientCredentials?: OAuthClientCredentialsReadModel;
    };
    _links: {
        self: Link;
        type: Link;
        authenticationMethod?: Link;
        origin?: Link;
        open: Link;
        authorizationState: Link;
        authorize?: Link;
        oauthApplication?: Link;
        oauthClientCredentials?: Link;
    };
};

