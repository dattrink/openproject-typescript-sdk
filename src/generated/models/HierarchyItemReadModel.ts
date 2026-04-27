/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type HierarchyItemReadModel = {
    _type: 'HierarchyItem';
    /**
     * Hierarchy item identifier
     */
    id: number;
    /**
     * The label of the hierarchy item
     */
    label: string | null;
    /**
     * The short name of the hierarchy item. If this attribute is set, the `weight` and
     * the `formattedWeight` are `null`.
     */
    short: string | null;
    /**
     * The accurate weight of the hierarchy item. As a decimal precision number it is written as a string to
     * not loose precision with conversion to a floating point number.
     * If this attribute is set, the `short` is null.
     */
    weight: string | null;
    /**
     * The formatted weight of the hierarchy item. The standard formatting of the OpenProject server is used to
     * convert this number into a representable format - i.e. falling back to scientific notation for very small and
     * very big numbers.
     * If this attribute is set, the `short` is null.
     */
    formattedWeight: string | null;
    /**
     * The hierarchy depth. The root item has a depth of 0.
     */
    depth: number;
    _links: {
        self: Link;
        parent?: Link;
        children: Array<Link>;
        branch: Link;
    };
};

