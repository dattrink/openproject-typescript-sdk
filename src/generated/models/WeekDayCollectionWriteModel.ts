/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeekDaySelfLinkModel } from './WeekDaySelfLinkModel';
import type { WeekDayWriteModel } from './WeekDayWriteModel';
export type WeekDayCollectionWriteModel = {
    _type: 'Collection';
    _embedded: {
        /**
         * The array of week days.
         */
        elements: Array<(WeekDayWriteModel & {
            _links: WeekDaySelfLinkModel;
        })>;
    };
};

