/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmojiReactionModel } from './EmojiReactionModel';
import type { Link } from './Link';
export type EmojiReactions_Model = {
    _type?: 'Collection';
    /**
     * Total number of emoji reactions
     */
    total?: number;
    /**
     * Number of emoji reactions in this response
     */
    count?: number;
    _embedded?: {
        elements?: Array<EmojiReactionModel>;
    };
    _links?: {
        self?: Link;
    };
};

