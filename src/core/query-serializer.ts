import type { FilterExpression, SortExpression } from '../types/query';

/**
 * Encodes filter expressions into OpenProject API query parameter format.
 */
export function encodeFilters(filters: FilterExpression[] | undefined): string | undefined {
  if (!filters || filters.length === 0) {
    return undefined;
  }

  const encoded = filters.map((filter) => ({
    [filter.field]: {
      operator: filter.operator,
      values: filter.values,
    },
  }));

  return JSON.stringify(encoded);
}

/**
 * Encodes sorting expressions into OpenProject API query parameter format.
 */
export function encodeSortBy(sortBy: SortExpression[] | undefined): string | undefined {
  if (!sortBy || sortBy.length === 0) {
    return undefined;
  }

  const encoded = sortBy.map((item) => [item.field, item.direction]);
  return JSON.stringify(encoded);
}
