import { describe, expect, it } from 'vitest';

import { encodeFilters, encodeSortBy } from '../../src/core/query-serializer';

describe('query serializer', () => {
  it('encodes filters to OpenProject JSON string format', () => {
    const encoded = encodeFilters([
      {
        field: 'status',
        operator: 'o',
        values: null,
      },
      {
        field: 'project',
        operator: '=',
        values: ['15'],
      },
    ]);

    expect(encoded).toBe(
      JSON.stringify([
        { status: { operator: 'o', values: null } },
        { project: { operator: '=', values: ['15'] } },
      ]),
    );
  });

  it('returns undefined when filters are missing', () => {
    expect(encodeFilters(undefined)).toBeUndefined();
    expect(encodeFilters([])).toBeUndefined();
  });

  it('encodes sort expressions to OpenProject JSON string format', () => {
    const encoded = encodeSortBy([
      { field: 'id', direction: 'asc' },
      { field: 'updatedAt', direction: 'desc' },
    ]);

    expect(encoded).toBe(JSON.stringify([['id', 'asc'], ['updatedAt', 'desc']]));
  });

  it('returns undefined when sortBy is missing', () => {
    expect(encodeSortBy(undefined)).toBeUndefined();
    expect(encodeSortBy([])).toBeUndefined();
  });
});
