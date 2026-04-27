/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type HelpTextModel = {
    _type: 'HelpText';
    id: number;
    /**
     * The attribute the help text is assigned to.
     */
    attribute: string;
    scope: 'WorkPackage' | 'Project';
    helpText: Formattable;
    _links: {
        self: Link;
        editText: Link;
        attachments: Link;
        addAttachment: Link;
    };
};

