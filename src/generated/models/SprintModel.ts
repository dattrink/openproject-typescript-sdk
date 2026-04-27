/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type SprintModel = {
    /**
     * Sprint id
     */
    id: number;
    _type: 'Sprint';
    /**
     * Sprint name
     */
    name: string;
    description?: Formattable;
    startDate: string | null;
    finishDate: string | null;
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Time of the most recent change to the sprint
     */
    updatedAt: string;
    _links?: {
        self: Link;
        definingWorkspace: Link;
        status?: Link;
    };
};

