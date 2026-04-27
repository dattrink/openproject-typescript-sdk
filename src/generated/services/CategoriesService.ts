/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Categories_by_WorkspaceModel } from '../models/Categories_by_WorkspaceModel';
import type { CategoryModel } from '../models/CategoryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategoriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * View Category
     * @param id Category id
     * @returns CategoryModel OK
     * @throws ApiError
     */
    public viewCategory(
        id: number,
    ): CancelablePromise<CategoryModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the category does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project (defining the category)
                 *Note: A client without sufficient permissions shall not be able to test for the existence of
                a category. That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List categories of a project
     * List all categories of a project
     * This endpoint is deprecated and replaced by [`/api/v3/workspaces/{id}/categories`](https://www.openproject.org/docs/api/endpoints/categories/#list-categories-of-a-workspace)
     * @param id ID of the project whose categories will be listed
     * @returns Categories_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listCategoriesOfAProject(
        id: number,
    ): CancelablePromise<Categories_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/categories',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the project does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
    /**
     * List categories of a workspace
     * List all categories of a project
     * @param id ID of the workspace whose categories will be listed
     * @returns Categories_by_WorkspaceModel OK
     * @throws ApiError
     */
    public listCategoriesOfAWorkspace(
        id: number,
    ): CancelablePromise<Categories_by_WorkspaceModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/workspaces/{id}/categories',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the workspace does not exist or the client does not have sufficient permissions
                to see it.
                 **Required permission:** view workspace
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a workspace.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
