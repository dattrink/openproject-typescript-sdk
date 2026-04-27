/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayCollectionModel } from '../models/DayCollectionModel';
import type { DayModel } from '../models/DayModel';
import type { NonWorkingDayCollectionModel } from '../models/NonWorkingDayCollectionModel';
import type { NonWorkingDayModel } from '../models/NonWorkingDayModel';
import type { WeekDayCollectionModel } from '../models/WeekDayCollectionModel';
import type { WeekDayCollectionWriteModel } from '../models/WeekDayCollectionWriteModel';
import type { WeekDayModel } from '../models/WeekDayModel';
import type { WeekDayWriteModel } from '../models/WeekDayWriteModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkScheduleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Lists all non working days
     * Lists all one-time non working days, such as holidays.
     * It does not lists the non working weekdays, such as each Saturday, Sunday.
     * For listing the weekends, the `/api/v3/days` endpoint should be used.
     *
     * All days from current year are returned by default.
     * @param filters JSON specifying filter conditions.
     *
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + date: the inclusive date interval to scope days to look up. When
     * unspecified, default is from the beginning to the end of current year.
     *
     * Example: `{ "date": { "operator": "<>d", "values": ["2022-05-02","2022-05-26"] } }`
     * would return days between May 5 and May 26 2022, inclusive.
     * @returns NonWorkingDayCollectionModel OK
     * @throws ApiError
     */
    public listNonWorkingDays(
        filters?: string,
    ): CancelablePromise<NonWorkingDayCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days/non_working',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Creates a non-working day (NOT IMPLEMENTED)
     * **(NOT IMPLEMENTED)**
     * Marks a day as being a non-working day.
     *
     * Note: creating a non-working day will not affect the start and finish dates
     * of work packages but will affect their duration.
     * @param requestBody
     * @returns NonWorkingDayModel Non-working day created.
     * @throws ApiError
     */
    public createNonWorkingDay(
        requestBody?: NonWorkingDayModel,
    ): CancelablePromise<NonWorkingDayModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v3/days/non_working',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View a non-working day
     * Returns the non-working day information for a given date.
     * @param date The date of the non-working day to view in ISO 8601 format.
     * @returns NonWorkingDayModel OK
     * @throws ApiError
     */
    public viewNonWorkingDay(
        date: string,
    ): CancelablePromise<NonWorkingDayModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days/non_working/{date}',
            path: {
                'date': date,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if the given date is not a non-working day.`,
            },
        });
    }
    /**
     * Update a non-working day attributes (NOT IMPLEMENTED)
     * **(NOT IMPLEMENTED)**
     * Update the non-working day information for a given date.
     * @param date The date of the non-working day to view in ISO 8601 format.
     * @param requestBody
     * @returns NonWorkingDayModel OK
     * @throws ApiError
     */
    public updateNonWorkingDay(
        date: string,
        requestBody?: NonWorkingDayModel,
    ): CancelablePromise<NonWorkingDayModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/days/non_working/{date}',
            path: {
                'date': date,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if the given date is not a non-working day.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Removes a non-working day (NOT IMPLEMENTED)
     * **(NOT IMPLEMENTED)**
     * Removes the non-working day at the given date.
     *
     * Note: deleting a non-working day will not affect the start and finish dates
     * of work packages but will affect their duration.
     * @param date The date of the non-working day to view in ISO 8601 format.
     * @returns void
     * @throws ApiError
     */
    public deleteNonWorkingDay(
        date: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v3/days/non_working/{date}',
            path: {
                'date': date,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if the given date is not a non-working day.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Lists week days
     * Lists week days with work schedule information.
     * @returns WeekDayCollectionModel OK
     * @throws ApiError
     */
    public listWeekDays(): CancelablePromise<WeekDayCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days/week',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
            },
        });
    }
    /**
     * Update week days (NOT IMPLEMENTED)
     * **(NOT IMPLEMENTED)**
     * Update multiple week days with work schedule information.
     * @param requestBody
     * @returns WeekDayCollectionModel OK
     * @throws ApiError
     */
    public updateWeekDays(
        requestBody?: WeekDayCollectionWriteModel,
    ): CancelablePromise<WeekDayCollectionModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/days/week',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if a week day resource can not be found.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View a week day
     * View a week day and its attributes.
     * @param day The week day from 1 to 7. 1 is Monday. 7 is Sunday.
     * @returns WeekDayModel OK
     * @throws ApiError
     */
    public viewWeekDay(
        day: number,
    ): CancelablePromise<WeekDayModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days/week/{day}',
            path: {
                'day': day,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                404: `Returned if the day is out of the 1-7 range.`,
            },
        });
    }
    /**
     * Update a week day attributes (NOT IMPLEMENTED)
     * **(NOT IMPLEMENTED)**
     * Makes a week day a working or non-working day.
     *
     * Note: changing a week day working attribute will not affect the start and
     * finish dates of work packages but will affect their duration attribute.
     * @param day The week day from 1 to 7. 1 is Monday. 7 is Sunday.
     * @param requestBody
     * @returns WeekDayModel Update succeeded.
     *
     * Response will include the week day with updated attributes.
     * @throws ApiError
     */
    public updateWeekDay(
        day: number,
        requestBody?: WeekDayWriteModel,
    ): CancelablePromise<WeekDayModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/days/week/{day}',
            path: {
                'day': day,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                403: `Returned if the client does not have sufficient permissions.`,
                404: `Returned if the day is out of the 1-7 range.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * Lists days
     * Lists days information for a given date interval.
     *
     * All days from the beginning of current month to the end of following month
     * are returned by default.
     * @param filters JSON specifying filter conditions.
     *
     * Accepts the same format as returned by the [queries](https://www.openproject.org/docs/api/endpoints/queries/)
     * endpoint. Currently supported filters are:
     *
     * + date: the inclusive date interval to scope days to look up. When
     * unspecified, default is from the beginning of current month to the end
     * of following month.
     *
     * Example: `{ "date": { "operator": "<>d", "values": ["2022-05-02","2022-05-26"] } }`
     * would return days between May 5 and May 26 2022, inclusive.
     *
     * + working: when `true`, returns only the working days. When `false`,
     * returns only the non-working days (weekend days and non-working days).
     * When unspecified, returns both working and non-working days.
     *
     * Example: `{ "working": { "operator": "=", "values": ["t"] } }`
     * would exclude non-working days from the response.
     * @returns DayCollectionModel OK
     * @throws ApiError
     */
    public listDays(
        filters?: string,
    ): CancelablePromise<DayCollectionModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days',
            query: {
                'filters': filters,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
                406: `Occurs when the client did not send a Content-Type header`,
                415: `Occurs when the client sends an unsupported Content-Type header.`,
            },
        });
    }
    /**
     * View day
     * View the day information for a given date.
     * @param date The date of the non-working day to view in ISO 8601 format.
     * @returns DayModel OK
     * @throws ApiError
     */
    public viewDay(
        date: string,
    ): CancelablePromise<DayModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/days/{date}',
            path: {
                'date': date,
            },
            errors: {
                400: `Occurs when the client did not send a valid JSON object in the request body.`,
            },
        });
    }
}
