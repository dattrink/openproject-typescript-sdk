/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetModel } from '../models/BudgetModel';
import type { Budgets_by_ProjectModel } from '../models/Budgets_by_ProjectModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BudgetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * view Budget
     * @param id Budget id
     * @returns BudgetModel OK
     * @throws ApiError
     */
    public viewBudget(
        id: number,
    ): CancelablePromise<BudgetModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/budgets/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions.
                 **Required permission:** view work packages **or** view budgets (on the budgets project)`,
            },
        });
    }
    /**
     * view Budgets of a Project
     * @param id Project id
     * @returns Budgets_by_ProjectModel OK
     * @throws ApiError
     */
    public viewBudgetsOfAProject(
        id: number,
    ): CancelablePromise<Budgets_by_ProjectModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v3/projects/{id}/budgets',
            path: {
                'id': id,
            },
            errors: {
                403: `Returned if the client does not have sufficient permissions to see the budgets of the given
                project.
                 **Required permission:** view work packages **or** view budgets
                 *Note that you will only receive this error, if you are at least allowed to see the corresponding project.*`,
                404: `Returned if either:
                 * the project does not exist
                 * the client does not have sufficient permissions to see the project
                 * the costs module is not enabled on the given project
                 **Required permission:** view project
                 *Note: A client without sufficient permissions shall not be able to test for the existence of a project.
                That's why a 404 is returned here, even if a 403 might be more appropriate.*`,
            },
        });
    }
}
