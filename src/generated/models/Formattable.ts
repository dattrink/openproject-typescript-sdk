/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Formattable = {
    /**
     * Indicates the formatting language of the raw text
     */
    readonly format: 'plain' | 'markdown' | 'custom';
    /**
     * The raw text, as entered by the user
     */
    raw?: string;
    /**
     * The text converted to HTML according to the format
     */
    readonly html?: string;
};

