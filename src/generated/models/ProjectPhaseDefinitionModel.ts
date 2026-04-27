/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type ProjectPhaseDefinitionModel = {
    _type: 'ProjectPhaseDefinition';
    /**
     * The project phase definition's id
     */
    id: number;
    name: string;
    startGate: boolean;
    startGateName: string | null;
    finishGate: boolean;
    finishGateName: string | null;
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * Time of the most recent change to the project phase definition
     */
    updatedAt: string;
    _links?: {
        self: Link;
    };
};

