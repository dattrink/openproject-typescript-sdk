/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type StatusModel = {
    _type?: 'Status';
    /**
     * Status id
     */
    id?: number;
    /**
     * Status name
     */
    name?: string;
    /**
     * Indicates, whether work package of this status are considered closed
     */
    isClosed?: boolean;
    /**
     * The color of the status
     */
    color?: string | null;
    /**
     * True, if this status is the default status for new work packages
     */
    isDefault?: boolean;
    /**
     * Indicates, whether work package of this status are readonly
     */
    isReadonly?: boolean;
    /**
     * Indicates, whether work package of this status are excluded from totals of `Work`, `Remaining work`, and
     * `% Complete` in a hierarchy.
     */
    excludedFromTotals?: boolean;
    /**
     * The percentageDone being applied when changing to this status
     */
    defaultDoneRatio?: number;
    /**
     * Sort index of the status
     */
    position?: number;
    _links?: {
        self: Link;
    };
};

