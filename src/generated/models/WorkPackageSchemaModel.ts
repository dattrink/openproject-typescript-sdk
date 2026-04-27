/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { SchemaPropertyModel } from './SchemaPropertyModel';
/**
 * A schema for a work package. This schema defines the attributes of a work package.
 *
 * TODO: Incomplete, needs to be updated with the real behaviour of schemas (when does which attribute appear?).
 */
export type WorkPackageSchemaModel = {
    _type?: 'Schema';
    /**
     * TBD
     */
    _dependencies?: Array<string>;
    /**
     * TBD (WorkPackageFormAttributeGroup)
     */
    _attributeGroups?: Array<Record<string, any>>;
    lockVersion?: SchemaPropertyModel;
    id?: SchemaPropertyModel;
    subject?: SchemaPropertyModel;
    description?: SchemaPropertyModel;
    duration?: SchemaPropertyModel;
    scheduleManually?: SchemaPropertyModel;
    ignoreNonWorkingDays?: SchemaPropertyModel;
    startDate?: SchemaPropertyModel;
    dueDate?: SchemaPropertyModel;
    derivedStartDate?: SchemaPropertyModel;
    derivedDueDate?: SchemaPropertyModel;
    estimatedTime?: SchemaPropertyModel;
    derivedEstimatedTime?: SchemaPropertyModel;
    remainingTime?: SchemaPropertyModel;
    derivedRemainingTime?: SchemaPropertyModel;
    percentageDone?: SchemaPropertyModel;
    derivedPercentageDone?: SchemaPropertyModel;
    readonly?: SchemaPropertyModel;
    createdAt?: SchemaPropertyModel;
    updatedAt?: SchemaPropertyModel;
    author?: SchemaPropertyModel;
    position?: SchemaPropertyModel;
    project?: SchemaPropertyModel;
    projectPhase?: SchemaPropertyModel;
    projectPhaseDefinition?: SchemaPropertyModel;
    parent?: SchemaPropertyModel;
    sprint?: SchemaPropertyModel;
    storyPoints?: SchemaPropertyModel;
    assignee?: SchemaPropertyModel;
    responsible?: SchemaPropertyModel;
    type?: SchemaPropertyModel;
    status?: SchemaPropertyModel;
    category?: SchemaPropertyModel;
    version?: SchemaPropertyModel;
    priority?: SchemaPropertyModel;
    _links?: {
        self?: Link;
    };
};

