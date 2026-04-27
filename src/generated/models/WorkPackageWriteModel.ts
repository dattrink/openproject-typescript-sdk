/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Formattable } from './Formattable';
import type { Link } from './Link';
/**
 * This model is used for creating and updating work packages. It can also be used for validation against the work
 * package form endpoints.
 */
export type WorkPackageWriteModel = {
    /**
     * Work package subject
     */
    subject?: string;
    description?: Formattable;
    /**
     * Uses manual scheduling mode when true (default). Uses automatic scheduling
     * mode when false. Can be automatic only when predecessors or children are
     * present.
     */
    scheduleManually?: boolean;
    /**
     * Scheduled beginning of a work package
     */
    startDate?: string | null;
    /**
     * Scheduled end of a work package
     */
    dueDate?: string | null;
    /**
     * Time a work package likely needs to be completed excluding its descendants
     */
    estimatedTime?: string | null;
    /**
     * The amount of time in hours the work package needs to be completed. This value must be bigger or equal to `P1D`,
     * and any the value will get floored to the nearest day.
     *
     * The duration has no effect, unless either a start date or a due date is set.
     *
     * Not available for milestone type of work packages.
     */
    duration?: string | null;
    /**
     * When scheduling, whether or not to ignore the non working days being defined.
     * A work package with the flag set to true will be allowed to be scheduled to a non working day.
     */
    ignoreNonWorkingDays?: boolean;
    _links?: {
        category?: Link;
        type?: Link;
        priority?: Link;
        project?: Link;
        status?: Link;
        responsible?: Link;
        assignee?: Link;
        version?: Link;
        parent?: Link;
    };
    /**
     * Meta information for the work package request
     */
    _meta?: {
        /**
         * When set to true, explicitly validates all required custom fields on the work package, regardless of whether
         * they are provided in the request body. This overrides the default behavior where only custom fields included
         * in the request are validated. Use this parameter when you need to ensure all required custom fields have
         * valid values before allowing the update to proceed.
         */
        validateCustomFields?: boolean;
    };
};

