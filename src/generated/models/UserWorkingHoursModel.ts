/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type UserWorkingHoursModel = {
    _type: 'UserWorkingHours';
    /**
     * The unique identifier of the working hours record.
     */
    id: number;
    /**
     * The date from which this working hours configuration is in effect (ISO 8601 format).
     * Multiple records may exist for a user; the one with the latest `validFrom` that is
     * not in the future is the currently active record.
     */
    validFrom: string;
    /**
     * Hours worked on Monday.
     */
    mondayHours: number;
    /**
     * Hours worked on Tuesday.
     */
    tuesdayHours: number;
    /**
     * Hours worked on Wednesday.
     */
    wednesdayHours: number;
    /**
     * Hours worked on Thursday.
     */
    thursdayHours: number;
    /**
     * Hours worked on Friday.
     */
    fridayHours: number;
    /**
     * Hours worked on Saturday.
     */
    saturdayHours: number;
    /**
     * Hours worked on Sunday.
     */
    sundayHours: number;
    /**
     * The percentage of working hours the user is available. Must be between 0 and 100.
     */
    availabilityFactor: number;
    _links?: {
        self: Link;
        user: Link;
    };
};

