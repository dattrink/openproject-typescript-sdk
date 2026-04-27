/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Link = {
    /**
     * URL to the referenced resource (might be relative)
     */
    href: string | null;
    /**
     * Representative label for the resource
     */
    title?: string;
    /**
     * If true the href contains parts that need to be replaced by the client
     */
    templated?: boolean;
    /**
     * The HTTP verb to use when requesting the resource
     */
    method?: string;
    /**
     * The payload to send in the request to achieve the desired result
     */
    payload?: Record<string, any>;
    /**
     * An optional unique identifier to the link object
     */
    identifier?: string;
    /**
     * The MIME-Type of the returned resource.
     */
    type?: string;
};

