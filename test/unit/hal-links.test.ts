import { describe, expect, it } from 'vitest';

import { resolveLinkHref } from '../../src/core/hal/links';

describe('HAL link helpers', () => {
  it('returns href from a single link', () => {
    expect(resolveLinkHref({ href: '/api/v3/projects/1' })).toBe('/api/v3/projects/1');
  });

  it('returns first href from link arrays', () => {
    expect(
      resolveLinkHref([
        { href: '/api/v3/projects/1' },
        { href: '/api/v3/projects/2' },
      ]),
    ).toBe('/api/v3/projects/1');
  });

  it('returns undefined for missing link values', () => {
    expect(resolveLinkHref(undefined)).toBeUndefined();
    expect(resolveLinkHref({ href: null })).toBeUndefined();
  });
});
