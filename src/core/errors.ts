import type { ErrorResponse } from '../generated/models/ErrorResponse';

/**
 * Well-known error categories for OpenProject SDK operations.
 */
export type OpenProjectErrorCode =
  | 'AUTHENTICATION_ERROR'
  | 'AUTHORIZATION_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'CONFLICT_ERROR'
  | 'VALIDATION_ERROR'
  | 'REQUEST_ERROR'
  | 'SERVER_ERROR'
  | 'UNKNOWN_ERROR';

/**
 * Normalized details extracted from OpenProject API error payload.
 */
export interface OpenProjectErrorDetails {
  attribute?: string;
  errorIdentifier?: string;
  raw?: unknown;
}

/**
 * Base error type used by this SDK.
 */
export class OpenProjectError extends Error {
  /** HTTP status code returned by server when available. */
  public readonly status?: number;

  /** Categorical code assigned by SDK mapper. */
  public readonly code: OpenProjectErrorCode;

  /** Error metadata extracted from server payload. */
  public readonly details?: OpenProjectErrorDetails;

  /** Original thrown error object. */
  public override readonly cause?: unknown;

  /** Raw response body returned by server when available. */
  public readonly responseBody?: unknown;

  public constructor(params: {
    message: string;
    code: OpenProjectErrorCode;
    status?: number;
    details?: OpenProjectErrorDetails;
    cause?: unknown;
    responseBody?: unknown;
  }) {
    super(params.message);
    this.name = 'OpenProjectError';
    this.status = params.status;
    this.code = params.code;
    this.details = params.details;
    this.cause = params.cause;
    this.responseBody = params.responseBody;
  }
}

/**
 * API-specific error raised when an HTTP response was returned with an error status.
 */
export class OpenProjectApiError extends OpenProjectError {
  public constructor(params: ConstructorParameters<typeof OpenProjectError>[0]) {
    super(params);
    this.name = 'OpenProjectApiError';
  }
}

/**
 * Authentication/authorization failure error.
 */
export class OpenProjectAuthError extends OpenProjectApiError {
  public constructor(params: ConstructorParameters<typeof OpenProjectError>[0]) {
    super(params);
    this.name = 'OpenProjectAuthError';
  }
}

/**
 * Validation error for malformed requests or invalid model state.
 */
export class OpenProjectValidationError extends OpenProjectApiError {
  public constructor(params: ConstructorParameters<typeof OpenProjectError>[0]) {
    super(params);
    this.name = 'OpenProjectValidationError';
  }
}

/**
 * Checks whether a payload looks like an OpenProject ErrorResponse.
 */
function isOpenProjectErrorPayload(payload: unknown): payload is ErrorResponse {
  if (!payload || typeof payload !== 'object') {
    return false;
  }

  const candidate = payload as Partial<ErrorResponse>;
  return candidate._type === 'Error' && typeof candidate.message === 'string';
}

/**
 * Maps HTTP status code into an SDK error category.
 */
function getErrorCodeByStatus(status?: number): OpenProjectErrorCode {
  if (status === 401) {
    return 'AUTHENTICATION_ERROR';
  }

  if (status === 403) {
    return 'AUTHORIZATION_ERROR';
  }

  if (status === 404) {
    return 'NOT_FOUND_ERROR';
  }

  if (status === 409) {
    return 'CONFLICT_ERROR';
  }

  if (status === 400) {
    return 'REQUEST_ERROR';
  }

  if (status === 422) {
    return 'VALIDATION_ERROR';
  }

  if (typeof status === 'number' && status >= 500) {
    return 'SERVER_ERROR';
  }

  return 'UNKNOWN_ERROR';
}

/**
 * Converts unknown thrown errors into typed SDK errors.
 */
export function mapToOpenProjectError(error: unknown): OpenProjectError {
  if (error instanceof OpenProjectError) {
    return error;
  }

  const candidate = error as {
    status?: number;
    body?: unknown;
    message?: string;
  };

  const payload = candidate?.body;
  const status = candidate?.status;
  const code = getErrorCodeByStatus(status);

  const message = isOpenProjectErrorPayload(payload)
    ? payload.message
    : typeof candidate?.message === 'string'
      ? candidate.message
      : 'OpenProject request failed';

  const details: OpenProjectErrorDetails | undefined = isOpenProjectErrorPayload(payload)
    ? {
        attribute: payload._embedded?.details?.attribute,
        errorIdentifier: payload.errorIdentifier,
        raw: payload,
      }
    : payload !== undefined
      ? { raw: payload }
      : undefined;

  const baseParams = {
    message,
    code,
    status,
    details,
    cause: error,
    responseBody: payload,
  };

  if (code === 'AUTHENTICATION_ERROR' || code === 'AUTHORIZATION_ERROR') {
    return new OpenProjectAuthError(baseParams);
  }

  if (code === 'VALIDATION_ERROR' || code === 'REQUEST_ERROR') {
    return new OpenProjectValidationError(baseParams);
  }

  return new OpenProjectApiError(baseParams);
}
