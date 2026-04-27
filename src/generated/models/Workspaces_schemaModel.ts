/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaPropertyModel } from './SchemaPropertyModel';
/**
 * A schema for a workspace. This schema defines the attributes of a workspace.
 */
export type Workspaces_schemaModel = {
    /**
     * The type identifier for this resource
     */
    _type?: 'Schema';
    /**
     * Schema dependencies (currently empty for workspaces)
     */
    _dependencies?: any[];
    /**
     * Defines the organizational structure of project custom fields into sections for UI rendering.
     *
     * Each attribute group represents a project attribute section containing related project attributes.
     * The sections determine how project attributes are visually organized and grouped in forms.
     *
     * **Key behaviors:**
     * - Admin-only project attributes appear only for users with admin privileges
     * - Empty sections (with no accessible project attributes) are omitted from the response
     * - The order reflects the configured section positioning in admin settings
     * - Each section contains only project attributes assigned to that specific section
     *
     * **Example structure:**
     * ```json
     * [
         * {
             * "_type": "ProjectFormCustomFieldSection",
             * "name": "Project Details",
             * "attributes": ["customField1", "customField3"]
             * },
             * {
                 * "_type": "ProjectFormCustomFieldSection",
                 * "name": "Budget Information",
                 * "attributes": ["customField2", "customField4"]
                 * }
                 * ]
                 * ```
                 */
                _attributeGroups?: Array<{
                    /**
                     * The type identifier for this resource
                     */
                    _type?: 'ProjectFormCustomFieldSection';
                    /**
                     * The unique identifier of the custom field section
                     */
                    id?: number;
                    /**
                     * The human-readable name of the custom field section
                     */
                    name?: string;
                    /**
                     * Array of camelCase custom field attribute names belonging to this section.
                     * Only includes custom fields visible to the current user.
                     */
                    attributes?: Array<string>;
                }>;
                id?: SchemaPropertyModel;
                name?: SchemaPropertyModel;
                identifier?: SchemaPropertyModel;
                description?: SchemaPropertyModel;
                public?: SchemaPropertyModel;
                active?: SchemaPropertyModel;
                status?: SchemaPropertyModel;
                statusExplanation?: SchemaPropertyModel;
                parent?: SchemaPropertyModel;
                createdAt?: SchemaPropertyModel;
                updatedAt?: SchemaPropertyModel;
                /**
                 * Links related to this resource
                 */
                _links?: {
                    self?: {
                        href?: string;
                    };
                };
            };

