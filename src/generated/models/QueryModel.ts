/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { Query_Filter_Instance_Model } from './Query_Filter_Instance_Model';
export type QueryModel = {
    /**
     * Query id
     */
    readonly id?: number;
    /**
     * Query name
     */
    readonly name?: string;
    /**
     * A set of QueryFilters which will be applied to the work packages to determine the resulting work packages
     */
    filters?: Array<Query_Filter_Instance_Model>;
    /**
     * Should sums (of supported properties) be shown?
     */
    readonly sums?: boolean;
    /**
     * Should the timeline mode be shown?
     * @deprecated
     */
    readonly timelineVisible?: boolean;
    /**
     * Which labels are shown in the timeline, empty when default
     * @deprecated
     */
    readonly timelineLabels?: Array<string>;
    /**
     * Which zoom level should the timeline be rendered in?
     * @deprecated
     */
    readonly timelineZoomLevel?: string;
    /**
     * Timestamps to filter by when showing changed attributes on work packages.
     */
    timestamps?: any[];
    /**
     * Which highlighting mode should the table have?
     * @deprecated
     */
    readonly highlightingMode?: string;
    /**
     * Should the hierarchy mode be enabled?
     * @deprecated
     */
    readonly showHierarchies?: boolean;
    /**
     * Should the query be hidden from the query list?
     * @deprecated
     */
    readonly hidden?: boolean;
    /**
     * Can users besides the owner see the query?
     */
    readonly public?: boolean;
    /**
     * Should the query be highlighted to the user?
     */
    readonly starred?: boolean;
    /**
     * Time of creation
     */
    readonly createdAt: string;
    /**
     * Time of the most recent change to the query
     */
    readonly updatedAt: string;
    _links?: {
        star?: Link;
        unstar?: Link;
        update?: Link;
        updateImmediately?: Link;
    };
};

