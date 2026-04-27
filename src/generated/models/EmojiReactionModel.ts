/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type EmojiReactionModel = {
    _type?: 'EmojiReaction';
    /**
     * Emoji reaction id (format: reactable_id-reaction)
     */
    id?: string;
    /**
     * The reaction identifier
     */
    reaction?: string;
    /**
     * The emoji character
     */
    emoji?: string;
    /**
     * Number of users who reacted with this emoji
     */
    reactionsCount?: number;
    /**
     * Time of the first reaction
     */
    firstReactionAt?: string;
    _links?: {
        self?: Link;
        reactable?: Link;
        reactingUsers?: Array<Link>;
    };
};

