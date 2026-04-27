/**
 * Primitive values supported in OpenProject filter definitions.
 */
export type FilterValuePrimitive = string | number | boolean | null;

/**
 * Defines a single filter expression in a wrapper-friendly shape.
 */
export interface FilterExpression {
  /** Field name supported by the target endpoint (for example: status, project, assignee). */
  field: string;
  /** OpenProject filter operator (for example: "=", "!", "~", "o", "*", "!*"). */
  operator: string;
  /** Filter values used by the operator. Use null for operators that do not require values. */
  values: FilterValuePrimitive[] | null;
}

/**
 * Defines a single sort expression.
 */
export interface SortExpression {
  /** Field name to sort by. */
  field: string;
  /** Sorting direction. */
  direction: 'asc' | 'desc';
}
