/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachments_Model } from './Attachments_Model';
import type { EmojiReactions_Model } from './EmojiReactions_Model';
import type { Formattable } from './Formattable';
import type { Link } from './Link';
import type { WorkPackageModel } from './WorkPackageModel';
export type ActivityModel = {
    _type?: 'Activity::Comment';
    /**
     * Activity id
     */
    id?: number;
    /**
     * Activity version
     */
    version?: number;
    comment?: Formattable;
    details?: Array<Formattable>;
    /**
     * Whether this activity is internal (only visible to users with view_internal_comments permission)
     */
    internal?: boolean;
    /**
     * Time of creation
     */
    createdAt?: string;
    /**
     * Time of update
     */
    updatedAt?: string;
    _embedded?: {
        attachments?: Attachments_Model;
        workPackage?: WorkPackageModel;
        emojiReactions?: EmojiReactions_Model;
    };
    _links?: {
        self?: Link;
        workPackage?: Link;
        user?: Link;
        update?: Link;
        attachments?: Link;
        addAttachment?: Link;
        emojiReactions?: Link;
    };
};

