/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type ProjectPhaseModel = {
    _type: 'ProjectPhase';
    /**
     * The project phase's id
     */
    id: number;
    name: string;
    active: boolean;
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Time of the most recent change to the project phase
     */
    updatedAt: string;
    _links?: {
        self: Link;
        definition: Link;
        project: Link;
    };
};

