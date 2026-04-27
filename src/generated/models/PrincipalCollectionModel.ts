/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupModel } from './GroupModel';
import type { OffsetPaginatedCollectionModel } from './OffsetPaginatedCollectionModel';
import type { PlaceholderUserModel } from './PlaceholderUserModel';
import type { UserModel } from './UserModel';
export type PrincipalCollectionModel = (OffsetPaginatedCollectionModel & {
    _embedded: {
        elements: Array<(UserModel | PlaceholderUserModel | GroupModel)>;
    };
});

