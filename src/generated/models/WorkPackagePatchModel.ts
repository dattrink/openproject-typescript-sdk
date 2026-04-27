/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkPackageWriteModel } from './WorkPackageWriteModel';
export type WorkPackagePatchModel = (WorkPackageWriteModel & {
    /**
     * The version of the item as used for optimistic locking
     */
    lockVersion: number;
});

