/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type TimeEntryModel = (CustomFieldProperties & {
    /**
     * The id of the time entry
     */
    id?: number;
    comment?: Formattable;
    /**
     * The date the expenditure is booked for
     */
    spentOn?: string;
    /**
     * The time quantifying the expenditure
     */
    hours?: string;
    /**
     * Whether the time entry is actively tracking time
     */
    ongoing?: boolean;
    /**
     * The time the time entry was created
     */
    createdAt?: string;
    /**
     * The time the time entry was started, or null if the time entry does not have a start time.
     *
     * The time is returned as UTC time, if presented to the user it should be converted to the user's timezone.
     *
     * This field is only available if the global `allow_tracking_start_and_end_times` setting is enabled.
     */
    startTime?: string | null;
    /**
     * The time the time entry was ended, or null if the time entry does not have a start time.
     *
     * The time is returned as UTC time, if presented to the user it should be converted to the user's timezone.
     *
     * This field is only available if the global `allow_tracking_start_and_end_times` setting is enabled.
     */
    endTime?: string | null;
    /**
     * The time the time entry was last updated
     */
    updatedAt?: string;
    _links?: {
        self: Link;
        updateImmediately?: Link;
        update?: Link;
        delete?: Link;
        schema?: Link;
        project: Link;
        entity: Link;
        user: Link;
        activity: Link;
    };
});

