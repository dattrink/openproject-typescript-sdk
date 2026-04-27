import { describe, expect, it } from 'vitest';

import { resolveAuthConfig } from '../../src/core/auth/strategies';

describe('auth strategy resolver', () => {
  it('resolves bearer auth strategy', async () => {
    const auth = resolveAuthConfig({
      type: 'bearer',
      token: 'token-value',
    });

    expect(auth.TOKEN).toBe('token-value');
  });

  it('resolves basic auth strategy with default username apikey', async () => {
    const auth = resolveAuthConfig({
      type: 'basic',
      apiKey: 'abc123',
    });

    expect(auth.USERNAME).toBe('apikey');
    expect(auth.PASSWORD).toBe('abc123');
  });

  it('resolves session auth strategy with X-Requested-With header', () => {
    const auth = resolveAuthConfig({
      type: 'session',
    });

    expect(auth.HEADERS).toEqual({
      'X-Requested-With': 'XMLHttpRequest',
    });
    expect(auth.WITH_CREDENTIALS).toBe(true);
  });

  it('resolves lazy token providers', async () => {
    const auth = resolveAuthConfig({
      type: 'oauth2',
      accessToken: async () => 'dynamic-token',
    });

    const tokenResolver = auth.TOKEN;
    expect(typeof tokenResolver).toBe('function');

    if (typeof tokenResolver !== 'function') {
      throw new Error('Expected TOKEN resolver function');
    }

    const token = await tokenResolver({
      method: 'GET',
      url: '/api/v3',
    });

    expect(token).toBe('dynamic-token');
  });
});
