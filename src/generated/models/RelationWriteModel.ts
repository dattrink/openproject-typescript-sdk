/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
export type RelationWriteModel = {
    /**
     * The relation type.
     */
    type: 'relates' | 'duplicates' | 'duplicated' | 'blocks' | 'blocked' | 'precedes' | 'follows' | 'includes' | 'partof' | 'requires' | 'required';
    /**
     * A descriptive text for the relation.
     */
    description?: string | null;
    /**
     * The lag in days between closing of `from` and start of `to`
     */
    lag?: number | null;
    _links: {
        to?: Link;
    };
};

