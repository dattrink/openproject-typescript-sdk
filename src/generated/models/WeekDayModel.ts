/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeekDaySelfLinkModel } from './WeekDaySelfLinkModel';
export type WeekDayModel = {
    _type: 'WeekDay';
    /**
     * The week day from 1 to 7. 1 is Monday. 7 is Sunday.
     */
    readonly day: number;
    /**
     * The week day name.
     */
    name: string;
    /**
     * `true` for a working week day, `false` otherwise.
     */
    working: boolean;
    _links?: WeekDaySelfLinkModel;
};

