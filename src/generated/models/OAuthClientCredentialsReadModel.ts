/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type OAuthClientCredentialsReadModel = {
    id: number;
    _type: 'OAuthClientCredentials';
    /**
     * OAuth 2 client id
     */
    clientId: string;
    /**
     * true, if OAuth 2 credentials are confidential, false, if no secret is stored
     */
    confidential: boolean;
    /**
     * The time the OAuth client credentials were created at
     */
    createdAt?: string;
    /**
     * The time the OAuth client credentials were last updated
     */
    updatedAt?: string;
    _links: {
        self: Link;
        integration: Link;
    };
};

