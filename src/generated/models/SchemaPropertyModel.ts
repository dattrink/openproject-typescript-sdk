/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SchemaPropertyModel = {
    /**
     * The resource type for this property.
     */
    type: string;
    /**
     * The name of the property.
     */
    name: string;
    /**
     * Indicates, if the property is required for submitting a request of this schema.
     */
    required: boolean;
    /**
     * Indicates, if the property has a default.
     */
    hasDefault: boolean;
    /**
     * Indicates, if the property is writable when sending a request of this schema.
     */
    writable: boolean;
    /**
     * Additional options for the property.
     */
    options?: Record<string, any>;
    /**
     * Defines the json path where the property is located in the payload.
     */
    location?: string;
    /**
     * A placeholder for the property to display if the property has no value.
     */
    placeholder?: string;
    /**
     * Useful links for this property (e.g. an endpoint to fetch allowed values)
     */
    _links?: Record<string, any>;
};

