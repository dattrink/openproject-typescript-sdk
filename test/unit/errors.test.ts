import { describe, expect, it } from 'vitest';

import {
  OpenProjectAuthError,
  OpenProjectValidationError,
  mapToOpenProjectError,
} from '../../src/core/errors';

describe('error mapping', () => {
  it('maps 401 errors to OpenProjectAuthError', () => {
    const mapped = mapToOpenProjectError({
      status: 401,
      message: 'Unauthorized',
      body: {
        _type: 'Error',
        errorIdentifier: 'urn:openproject-org:api:v3:errors:Unauthorized',
        message: 'Unauthorized',
      },
    });

    expect(mapped).toBeInstanceOf(OpenProjectAuthError);
    expect(mapped.code).toBe('AUTHENTICATION_ERROR');
    expect(mapped.status).toBe(401);
  });

  it('maps 422 payload with details to OpenProjectValidationError', () => {
    const mapped = mapToOpenProjectError({
      status: 422,
      body: {
        _type: 'Error',
        errorIdentifier: 'urn:openproject-org:api:v3:errors:PropertyConstraintViolation',
        message: 'Validation failed',
        _embedded: {
          details: {
            attribute: 'subject',
          },
        },
      },
    });

    expect(mapped).toBeInstanceOf(OpenProjectValidationError);
    expect(mapped.code).toBe('VALIDATION_ERROR');
    expect(mapped.details?.attribute).toBe('subject');
    expect(mapped.details?.errorIdentifier).toContain('PropertyConstraintViolation');
  });

  it('preserves unknown errors as generic SDK errors', () => {
    const mapped = mapToOpenProjectError(new Error('network disconnected'));
    expect(mapped.message).toContain('network disconnected');
    expect(mapped.code).toBe('UNKNOWN_ERROR');
  });
});
