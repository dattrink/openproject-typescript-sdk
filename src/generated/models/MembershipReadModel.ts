/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupModel } from './GroupModel';
import type { Link } from './Link';
import type { PortfolioModel } from './PortfolioModel';
import type { ProgramModel } from './ProgramModel';
import type { ProjectModel } from './ProjectModel';
import type { RoleModel } from './RoleModel';
import type { UserModel } from './UserModel';
export type MembershipReadModel = {
    _type: 'Membership';
    /**
     * The membership's id
     */
    id: number;
    /**
     * The time the membership was created.
     */
    createdAt: string;
    /**
     * The time the membership was last updated.
     */
    updatedAt: string;
    _embedded?: {
        project?: (ProjectModel | ProgramModel | PortfolioModel);
        principal?: (UserModel | GroupModel);
        roles?: Array<RoleModel>;
    };
    _links: {
        self: Link;
        schema: Link;
        update?: Link;
        updateImmediately?: Link;
        project: Link;
        principal: Link;
        roles: Array<Link>;
    };
};

