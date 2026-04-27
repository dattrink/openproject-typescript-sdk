/**
 * Represents a HAL link map with named links.
 */
export type HalLinks = Record<string, unknown>;

/**
 * Represents a generic HAL resource that may include links and embedded resources.
 */
export interface HalResource {
  _type?: string;
  _links?: HalLinks;
  _embedded?: Record<string, unknown>;
}

/**
 * Represents a generic OpenProject collection resource shape.
 */
export interface HalCollection<TElement> extends HalResource {
  count?: number;
  total?: number;
  pageSize?: number;
  offset?: number;
  _embedded?: {
    elements?: TElement[];
    [key: string]: unknown;
  };
}

/**
 * Normalized page result returned by SDK wrappers.
 */
export interface PaginatedResult<TElement> {
  elements: TElement[];
  count: number;
  total: number;
  pageSize?: number;
  offset?: number;
  links?: HalLinks;
  raw: HalCollection<TElement>;
}
