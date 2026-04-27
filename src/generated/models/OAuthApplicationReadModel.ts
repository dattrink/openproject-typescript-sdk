/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type OAuthApplicationReadModel = {
    id: number;
    _type: 'OAuthApplication';
    /**
     * The name of the OAuth 2 application
     */
    name: string;
    /**
     * OAuth 2 client id
     */
    clientId: string;
    /**
     * OAuth 2 client secret. This is only returned when creating a new OAuth application.
     */
    clientSecret?: string;
    /**
     * true, if OAuth 2 credentials are confidential, false, if no secret is stored
     */
    confidential: boolean;
    /**
     * The time the OAuth 2 Application was created at
     */
    createdAt?: string;
    /**
     * The time the OAuth 2 Application was last updated
     */
    updatedAt?: string;
    /**
     * An array of the scopes of the OAuth 2 Application
     */
    scopes?: Array<string>;
    _links: {
        self: Link;
        owner: Link;
        integration?: Link;
        redirectUri: Array<Link>;
    };
};

