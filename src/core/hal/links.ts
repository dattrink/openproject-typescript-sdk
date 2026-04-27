import type { Link } from '../../generated/models/Link';

/**
 * Resolves a link href value from either a single link or first item in a link array.
 */
export function resolveLinkHref(link: Link | Link[] | undefined): string | undefined {
  if (!link) {
    return undefined;
  }

  if (Array.isArray(link)) {
    return link[0]?.href ?? undefined;
  }

  return link.href ?? undefined;
}
