/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GridWidgetModel = {
    _type: 'GridWidget';
    /**
     * The grid widget's unique identifier. Can be null, if a new widget is created within a grid.
     */
    id: number | null;
    /**
     * An alternative, human legible, and unique identifier.
     */
    identifier: string;
    /**
     * The index of the starting row of the widget. The row is inclusive.
     */
    startRow: number;
    /**
     * The index of the ending row of the widget. The row is exclusive.
     */
    endRow: number;
    /**
     * The index of the starting column of the widget. The column is inclusive.
     */
    startColumn: number;
    /**
     * The index of the ending column of the widget. The column is exclusive.
     */
    endColumn: number;
    options?: Record<string, any>;
};

