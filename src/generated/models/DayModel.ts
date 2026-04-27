/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type DayModel = {
    _type: 'Day';
    /**
     * Date of the day.
     */
    date: string;
    /**
     * Descriptive name for the day.
     */
    name: string;
    /**
     * `true` for a working day, `false` otherwise.
     */
    working: boolean;
    _links?: {
        self: Link;
        /**
         * A list of resources describing why this day is a non-working day.
         * Linked resources can be `NonWorkingDay` and `WeekDay` resources.
         * This property is absent for working days.
         */
        nonWorkingReasons?: Array<Link>;
        weekDay?: Link;
    };
};

