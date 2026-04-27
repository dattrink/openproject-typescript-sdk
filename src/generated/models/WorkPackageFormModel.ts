/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { WorkPackageSchemaModel } from './WorkPackageSchemaModel';
import type { WorkPackageWriteModel } from './WorkPackageWriteModel';
/**
 * The work package creation form. This object is returned, whenever a work package form endpoint is called. It contains
 * an allowed payload definition, the full schema and any validation errors on the current request body.
 */
export type WorkPackageFormModel = {
    _type?: 'Form';
    _embedded?: {
        payload?: WorkPackageWriteModel;
        schema?: WorkPackageSchemaModel;
        /**
         * All validation errors, where the key is the faulty property. The object is empty, if the request body is
         * valid.
         */
        validationErrors?: Record<string, any>;
    };
    _links?: {
        self?: Link;
        validate?: Link;
        previewMarkup?: Link;
        customFields?: Link;
        configureForm?: Link;
    };
};

