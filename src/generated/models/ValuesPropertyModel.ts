/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type ValuesPropertyModel = {
    _type: 'Values::Property';
    /**
     * The key of the key - value pair represented by the Values::Property
     */
    property: string;
    /**
     * The value of the key - value pair represented by the Values::Property
     */
    value: string;
    _links: {
        self: Link;
        schema: Link;
    };
};

