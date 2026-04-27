/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OAuthApplicationReadModel } from '../models/OAuthApplicationReadModel';
import type { OAuthClientCredentialsReadModel } from '../models/OAuthClientCredentialsReadModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OAuth2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the oauth application.
     * Retrieves the OAuth 2 provider application for the given identifier. The secret will not be part of the response,
     * instead a `confidential` flag is indicating, whether there is a secret or not.
     * @param id OAuth application id
     * @returns OAuthApplicationReadModel OK
     * @throws ApiError
     */
    public getOauthApplication(
        id: number,
    ): CancelablePromise<OAuthApplicationReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/oauth_applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the application does not exist.`,
            },
        });
    }
    /**
     * Get the oauth client credentials object.
     * Retrieves the OAuth 2 client credentials for the given identifier. The secret will not be part of the response,
     * instead a `confidential` flag is indicating, whether there is a secret or not.
     * @param id OAuth Client Credentials id
     * @returns OAuthClientCredentialsReadModel OK
     * @throws ApiError
     */
    public getOauthClientCredentials(
        id: number,
    ): CancelablePromise<OAuthClientCredentialsReadModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/oauth_client_credentials/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** admin`,
                404: `Returned if the object does not exist.`,
            },
        });
    }
}
