/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActivityCommentWriteModel = {
    comment?: {
        /**
         * The raw content of the comment
         */
        raw?: string;
    };
    /**
     * Determines whether this comment is internal. This is only available to users
     * with `add_internal_comments` permission. It defaults to `false`, if unset.
     */
    internal?: boolean;
};

