/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserCreateModel = {
    admin: boolean;
    email: string;
    login: string;
    /**
     * The user's password.
     *
     * *Conditions:*
     *
     * Writable on create.
     *
     * Writable on update only when:
     * - the caller updates their own account
     * - `currentPassword` is provided and valid
     */
    password?: string;
    /**
     * The user's current password.
     *
     * *Conditions:*
     *
     * Required when changing `password` for a self update (`PATCH /api/v3/users/me` or `PATCH /api/v3/users/{id}` where `id` is the caller).
     *
     * Ignored for non-self updates (for example, administrators updating other users).
     */
    currentPassword?: string;
    firstName: string;
    lastName: string;
    /**
     * The current activation status of the user.
     *
     * *Conditions:*
     *
     * Only writable on creation, not on update.
     */
    status?: string;
    language: string;
};

