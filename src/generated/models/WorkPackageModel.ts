/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldProperties } from './CustomFieldProperties';
import type { Formattable } from './Formattable';
import type { Link } from './Link';
export type WorkPackageModel = (CustomFieldProperties & {
    /**
     * Work package id
     */
    readonly id?: number;
    /**
     * The version of the item as used for optimistic locking
     */
    readonly lockVersion?: number;
    /**
     * Work package subject
     */
    subject: string;
    readonly _type?: 'WorkPackage';
    description?: Formattable;
    /**
     * Uses manual scheduling mode when true (default). Uses automatic scheduling
     * mode when false. Can be automatic only when predecessors or children are
     * present.
     */
    scheduleManually?: boolean;
    /**
     * If true, the work package is in a readonly status so with the exception of the status, no other property can be altered.
     */
    readonly?: boolean;
    /**
     * Scheduled beginning of a work package
     */
    startDate?: string | null;
    /**
     * Scheduled end of a work package
     */
    dueDate?: string | null;
    /**
     * Date on which a milestone is achieved
     */
    date?: string | null;
    /**
     * Similar to start date but is not set by a client but rather deduced by the work packages' descendants. If manual scheduleManually is active, the two dates can deviate.
     */
    readonly derivedStartDate?: string | null;
    /**
     * Similar to due date but is not set by a client but rather deduced by the work packages' descendants. If manual scheduleManually is active, the two dates can deviate.
     */
    readonly derivedDueDate?: string | null;
    /**
     * **(NOT IMPLEMENTED)** The amount of time in hours the work package needs to be completed.
     * Not available for milestone type of work packages.
     */
    readonly duration?: string | null;
    /**
     * Time a work package likely needs to be completed excluding its descendants
     */
    estimatedTime?: string | null;
    /**
     * Time a work package likely needs to be completed including its descendants
     */
    readonly derivedEstimatedTime?: string | null;
    /**
     * **(NOT IMPLEMENTED)** When scheduling, whether or not to ignore the non working days being defined.
     * A work package with the flag set to true will be allowed to be scheduled to a non working day.
     */
    readonly ignoreNonWorkingDays?: boolean;
    /**
     * The position this work package has in a version configured to be backlog (sprint or product).
     *
     * # Conditions
     *
     * **Permission** Backlogs needs to be enabled in the work package's project and the work package's type is configured to be a backlog type.
     */
    readonly position?: number | null;
    /**
     * The time booked for this work package by users working on it
     *
     * # Conditions
     *
     * **Permission** view time entries
     */
    readonly spentTime?: string;
    /**
     * The estimation in story points on how long this work package will take to complete
     *
     * # Conditions
     *
     * **Permission** Backlogs needs to be enabled in the work package's project and the work package's type is configured to be a backlog type.
     */
    storyPoints?: number | null;
    /**
     * Amount of total completion for a work package
     */
    percentageDone?: number | null;
    /**
     * Amount of total completion for a work package derived from itself and its descendant work packages
     */
    readonly derivedPercentageDone?: number | null;
    /**
     * Time of creation. Can be writable by admins with the `apiv3_write_readonly_attributes` setting enabled.
     */
    readonly createdAt?: string;
    /**
     * Time of the most recent change to the work package.
     */
    readonly updatedAt?: string;
    _links: {
        addComment?: Link;
        addRelation?: Link;
        addWatcher?: Link;
        readonly customActions?: Array<Link>;
        previewMarkup?: Link;
        removeWatcher?: Link;
        delete?: Link;
        logTime?: Link;
        move?: Link;
        copy?: Link;
        unwatch?: Link;
        update?: Link;
        updateImmediately?: Link;
        watch?: Link;
        self: Link;
        schema: Link;
        readonly ancestors: Array<Link>;
        attachments?: Link;
        addAttachment?: Link;
        prepareAttachment?: Link;
        author: Link;
        assignee?: Link;
        availableWatchers?: Link;
        budget?: Link;
        category?: Link;
        readonly children?: Array<Link>;
        addFileLink?: Link;
        fileLinks?: Link;
        parent?: Link;
        priority: Link;
        project: Link;
        projectPhase?: Link;
        projectPhaseDefinition?: Link;
        responsible?: Link;
        relations?: Link;
        revisions?: Link;
        status: Link;
        sprint?: Link;
        timeEntries?: Link;
        type: Link;
        version?: Link;
        watchers?: Link;
    };
});

