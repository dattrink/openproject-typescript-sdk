/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachments_Model } from './Attachments_Model';
import type { Link } from './Link';
import type { ProjectModel } from './ProjectModel';
import type { UserModel } from './UserModel';
export type MeetingModel = {
    _type: 'Meeting';
    /**
     * Identifier of this meeting
     */
    id: number;
    /**
     * The meeting's title
     */
    title: string;
    /**
     * The meeting's location
     */
    location?: string;
    /**
     * The version of the item as used for optimistic locking
     */
    lockVersion: number;
    /**
     * The scheduled meeting start time.
     */
    startTime: string;
    /**
     * The scheduled meeting start time.
     */
    endTime: string;
    /**
     * The meeting duration in hours.
     */
    duration: number;
    /**
     * Time of creation. Can be writable by admins with the `apiv3_write_readonly_attributes` setting enabled.
     */
    createdAt: string;
    /**
     * Time of the most recent change to the meeting.
     */
    updatedAt: string;
    _embedded?: {
        attachments: Attachments_Model;
        author: UserModel;
        project?: ProjectModel;
    };
    _links?: {
        self?: Link;
        author?: Link;
        project?: Link;
        attachments?: Link;
        addAttachment?: Link;
    };
};

