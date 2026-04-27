/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityModel } from './ActivityModel';
import type { Link } from './Link';
import type { PortfolioModel } from './PortfolioModel';
import type { ProgramModel } from './ProgramModel';
import type { ProjectModel } from './ProjectModel';
import type { UserModel } from './UserModel';
import type { ValuesPropertyModel } from './ValuesPropertyModel';
import type { WorkPackageModel } from './WorkPackageModel';
export type NotificationModel = {
    _type?: 'Notification';
    /**
     * Notification id
     */
    id?: number;
    /**
     * The reason for the notification
     */
    reason?: 'assigned' | 'commented' | 'created' | 'dateAlert' | 'mentioned' | 'prioritized' | 'processed' | 'responsible' | 'subscribed' | 'scheduled' | 'watched';
    /**
     * Whether the notification is marked as read
     */
    readIAN?: boolean;
    /**
     * A list of objects including detailed information about the notification.
     */
    details?: Array<ValuesPropertyModel>;
    /**
     * The time the notification was created at
     */
    createdAt?: string;
    /**
     * The time the notification was last updated
     */
    updatedAt?: string;
    _embedded?: {
        actor?: UserModel;
        project: (ProjectModel | ProgramModel | PortfolioModel);
        activity?: ActivityModel;
        resource: WorkPackageModel;
    };
    _links?: {
        self: Link;
        readIAN?: Link;
        unreadIAN?: Link;
        project: Link;
        actor: Link;
        resource: Link;
        activity: Link;
    };
};

