/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmojiReactionModel } from '../models/EmojiReactionModel';
import type { EmojiReactions_Model } from '../models/EmojiReactions_Model';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmojiReactionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List emoji reactions by activity
     * List all emoji reactions of a single activity.
     * @param id ID of the activity whose emoji reactions will be listed
     * @returns EmojiReactions_Model OK
     * @throws ApiError
     */
    public listActivityEmojiReactions(
        id: number,
    ): CancelablePromise<EmojiReactions_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/activities/{id}/emoji_reactions',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the activity does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:**
                - \`view_work_packages\`
                - for internal comments: \`view_internal_comments\`
                 *Note: A client without sufficient permissions shall not be able to test for the existence of an activity.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * Toggle emoji reaction for an activity
     * Toggle an emoji reaction for a given activity. If the user has already reacted with the given emoji,
     * the reaction will be removed. Otherwise, a new reaction will be created.
     *
     * **Note:** The response contains the complete collection of all emoji reactions for this activity.
     *
     * **Required permission:**
     * - `add_work_package_comments`
     * - for internal comments: `add_internal_comments`
     * @param id ID of the activity to toggle emoji reaction for
     * @param requestBody
     * @returns EmojiReactionModel OK
     * @throws ApiError
     */
    public toggleActivityEmojiReaction(
        id: number,
        requestBody: {
            /**
             * The emoji reaction identifier
             */
            reaction: 'thumbs_up' | 'thumbs_down' | 'grinning_face_with_smiling_eyes' | 'confused_face' | 'heart' | 'party_popper' | 'rocket' | 'eyes';
        },
    ): CancelablePromise<EmojiReactionModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v3/activities/{id}/emoji_reactions',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/hal+json',
            errors: {
                400: `Returned if the request is invalid. For example, if the reaction is not valid.`,
                403: `Returned if the client does not have sufficient permissions to toggle the emoji reaction for the activity.`,
                404: `Returned if the activity does not exist or the client does not have sufficient permissions
                to see it.`,
            },
        });
    }
    /**
     * List emoji reactions by work package activities
     * List all emoji reactions of all activities of a single work package.
     * @param id ID of the work package whose activities' emoji reactions will be listed
     * @returns EmojiReactions_Model OK
     * @throws ApiError
     */
    public listWorkPackageActivitiesEmojiReactions(
        id: number,
    ): CancelablePromise<EmojiReactions_Model> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/work_packages/{id}/activities_emoji_reactions',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the work package does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:**
                - \`view_work_packages\`
                - for internal comments: \`view_internal_comments\`
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a work package.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
