/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type ReminderModel = {
    /**
     * Reminder id
     */
    readonly id?: number;
    /**
     * The note of the reminder
     */
    note?: string;
    /**
     * The date and time when the reminder is due
     */
    remindAt?: string;
    _links?: {
        self?: Link;
        creator: Link;
        remindable: Link;
    };
};

