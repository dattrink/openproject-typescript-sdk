import { describe, expect, it } from 'vitest';

import { toPaginatedResult } from '../../src/core/hal/pagination';

describe('HAL pagination mapper', () => {
  it('maps HAL collection fields to normalized pagination result', () => {
    const collection = {
      _type: 'Collection',
      count: 2,
      total: 10,
      pageSize: 2,
      offset: 1,
      _links: {
        self: { href: '/api/v3/projects' },
      },
      _embedded: {
        elements: [{ id: 1 }, { id: 2 }],
      },
    };

    const result = toPaginatedResult(collection);

    expect(result.elements).toEqual([{ id: 1 }, { id: 2 }]);
    expect(result.count).toBe(2);
    expect(result.total).toBe(10);
    expect(result.pageSize).toBe(2);
    expect(result.offset).toBe(1);
    expect(result.raw).toEqual(collection);
  });

  it('falls back to empty array and zero counts for sparse collections', () => {
    const collection = {
      _type: 'Collection',
    };

    const result = toPaginatedResult(collection);

    expect(result.elements).toEqual([]);
    expect(result.count).toBe(0);
    expect(result.total).toBe(0);
  });
});
