import type { HalCollection, PaginatedResult } from '../../types/hal';

/**
 * Extracts collection metadata and elements from HAL collection responses.
 */
export function toPaginatedResult<TElement>(collection: HalCollection<TElement>): PaginatedResult<TElement> {
  return {
    elements: collection._embedded?.elements ?? [],
    count: collection.count ?? 0,
    total: collection.total ?? 0,
    pageSize: collection.pageSize,
    offset: collection.offset,
    links: collection._links,
    raw: collection,
  };
}
