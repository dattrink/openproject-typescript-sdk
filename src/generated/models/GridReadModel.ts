/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GridWidgetModel } from './GridWidgetModel';
import type { Link } from './Link';
export type GridReadModel = {
    _type: 'Grid';
    /**
     * Grid's id
     */
    id: number;
    /**
     * The number of rows the grid has
     */
    rowCount: number;
    /**
     * The number of columns the grid has
     */
    columnCount: number;
    /**
     * The set of `GridWidget`s selected for the grid.
     *
     * # Conditions
     *
     * - The widgets must not overlap.
     */
    widgets: Array<GridWidgetModel>;
    /**
     * The time the grid was created.
     */
    createdAt?: string;
    /**
     * The time the grid was last updated.
     */
    updatedAt?: string;
    _links: {
        self: Link;
        attachments?: Link;
        addAttachment?: Link;
        scope: Link;
        updateImmediately?: Link;
        update?: Link;
        delete?: Link;
    };
};

