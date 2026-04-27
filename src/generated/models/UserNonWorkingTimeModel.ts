/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type UserNonWorkingTimeModel = {
    _type: 'UserNonWorkingTime';
    /**
     * The unique identifier of the non-working time record.
     */
    id: number;
    /**
     * The first date of the non-working time range in ISO 8601 format (YYYY-MM-DD).
     */
    startDate: string;
    /**
     * The last date of the non-working time range in ISO 8601 format (YYYY-MM-DD).
     * Must be greater than or equal to `startDate`.
     */
    endDate: string;
    _links?: {
        self: Link;
        user: Link;
    };
};

