import { describe, expect, it, vi } from 'vitest';

import { OpenProjectClient } from '../../src/core/openproject-client';

describe('OpenProjectClient smoke integration (mocked fetch)', () => {
  it('calls root endpoint and returns payload', async () => {
    const originalFetch = globalThis.fetch;

    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          _type: 'Root',
          instanceName: 'Demo',
          _links: {
            self: { href: '/api/v3' },
          },
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    );

    globalThis.fetch = fetchMock as typeof fetch;

    const client = new OpenProjectClient({
      baseUrl: 'https://op.grassdev.io.vn',
      auth: {
        type: 'basic',
        apiKey: 'test-token',
      },
    });

    const root = await client.root.get();

    expect(root._type).toBe('Root');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toBe('https://op.grassdev.io.vn/api/v3');

    globalThis.fetch = originalFetch;
  });
});
