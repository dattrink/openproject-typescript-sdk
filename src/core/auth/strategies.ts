import type { ApiRequestOptions } from '../../generated/core/ApiRequestOptions';
import type { OpenAPIConfig } from '../../generated/core/OpenAPI';

/**
 * Lazily resolved token provider used for auth flows that require token refresh.
 */
export type TokenProvider = string | (() => string | Promise<string>);

/**
 * Shared HTTP header map.
 */
export type HeaderMap = Record<string, string>;

/**
 * Disables explicit authentication while still allowing custom headers.
 */
export interface NoAuthStrategy {
  type: 'none';
  headers?: HeaderMap;
}

/**
 * Bearer token strategy for API token or OAuth2 access token usage.
 */
export interface BearerAuthStrategy {
  type: 'bearer';
  token: TokenProvider;
  headers?: HeaderMap;
}

/**
 * Basic authentication strategy using OpenProject API key style credentials.
 */
export interface BasicApiKeyAuthStrategy {
  type: 'basic';
  apiKey: TokenProvider;
  username?: string;
  headers?: HeaderMap;
}

/**
 * OAuth2 strategy represented by an access token provider.
 */
export interface OAuth2AuthStrategy {
  type: 'oauth2';
  accessToken: TokenProvider;
  headers?: HeaderMap;
}

/**
 * Session-based strategy for browser flows that rely on existing cookies.
 */
export interface SessionAuthStrategy {
  type: 'session';
  headers?: HeaderMap;
  credentials?: 'include' | 'omit' | 'same-origin';
}

/**
 * Union of all supported authentication strategies.
 */
export type OpenProjectAuthStrategy =
  | NoAuthStrategy
  | BearerAuthStrategy
  | BasicApiKeyAuthStrategy
  | OAuth2AuthStrategy
  | SessionAuthStrategy;

/**
 * Normalized OpenAPI config fragment derived from auth strategy.
 */
export interface ResolvedAuthConfig {
  TOKEN?: OpenAPIConfig['TOKEN'];
  USERNAME?: OpenAPIConfig['USERNAME'];
  PASSWORD?: OpenAPIConfig['PASSWORD'];
  HEADERS?: OpenAPIConfig['HEADERS'];
  WITH_CREDENTIALS?: boolean;
  CREDENTIALS?: OpenAPIConfig['CREDENTIALS'];
}

/**
 * Resolves a static or lazy token into the resolver format expected by the generated client.
 */
function resolveTokenProvider(provider: TokenProvider): string | ((_: ApiRequestOptions) => Promise<string>) {
  if (typeof provider === 'string') {
    return provider;
  }

  return async () => Promise.resolve(provider());
}

/**
 * Converts an SDK auth strategy into generated OpenAPI client config values.
 */
export function resolveAuthConfig(auth?: OpenProjectAuthStrategy): ResolvedAuthConfig {
  if (!auth || auth.type === 'none') {
    return {
      HEADERS: auth?.headers,
    };
  }

  if (auth.type === 'bearer') {
    return {
      TOKEN: resolveTokenProvider(auth.token),
      HEADERS: auth.headers,
    };
  }

  if (auth.type === 'oauth2') {
    return {
      TOKEN: resolveTokenProvider(auth.accessToken),
      HEADERS: auth.headers,
    };
  }

  if (auth.type === 'basic') {
    return {
      USERNAME: auth.username ?? 'apikey',
      PASSWORD: resolveTokenProvider(auth.apiKey),
      HEADERS: auth.headers,
    };
  }

  return {
    HEADERS: {
      'X-Requested-With': 'XMLHttpRequest',
      ...auth.headers,
    },
    WITH_CREDENTIALS: true,
    CREDENTIALS: auth.credentials ?? 'include',
  };
}
