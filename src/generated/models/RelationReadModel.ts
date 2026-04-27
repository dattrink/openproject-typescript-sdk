/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { WorkPackageModel } from './WorkPackageModel';
export type RelationReadModel = {
    _type?: 'Relation';
    /**
     * Relation ID
     */
    id?: number;
    /**
     * The internationalised name of this type of relation
     */
    name?: string;
    /**
     * The relation type.
     */
    type?: 'relates' | 'duplicates' | 'duplicated' | 'blocks' | 'blocked' | 'precedes' | 'follows' | 'includes' | 'partof' | 'requires' | 'required';
    /**
     * The type of relation from the perspective of the related work package.
     */
    reverseType?: 'relates' | 'duplicates' | 'duplicated' | 'blocks' | 'blocked' | 'precedes' | 'follows' | 'includes' | 'partof' | 'requires' | 'required';
    /**
     * A descriptive text for the relation.
     */
    description?: string | null;
    /**
     * The lag in days between closing of `from` and start of `to`
     */
    lag?: number | null;
    _embedded?: {
        from?: WorkPackageModel;
        to?: WorkPackageModel;
    };
    _links?: {
        self?: Link;
        updateImmediately?: Link;
        delete?: Link;
        from?: Link;
        to?: Link;
    };
};

