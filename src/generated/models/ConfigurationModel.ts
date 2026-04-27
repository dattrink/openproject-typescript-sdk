/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ConfigurationModel = {
    /**
     * The maximum allowed size of an attachment in Bytes
     */
    readonly maximumAttachmentFileSize?: number;
    /**
     * The host name configured for the system
     */
    readonly hostName?: string;
    /**
     * Page size steps to be offered in paginated list UI
     */
    perPageOptions?: Array<number>;
    /**
     * The format used to display Work, Remaining Work, and Spent time durations
     */
    readonly durationFormat?: string;
    /**
     * The list of all feature flags that are active
     */
    activeFeatureFlags?: Array<string>;
};

