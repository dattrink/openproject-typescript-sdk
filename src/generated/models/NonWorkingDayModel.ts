/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type NonWorkingDayModel = {
    _type: 'NonWorkingDay';
    /**
     * Date of the non-working day.
     */
    date: string;
    /**
     * Descriptive name for the non-working day.
     */
    name: string;
    _links?: {
        self: Link;
    };
};

