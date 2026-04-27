import { OpenProjectGeneratedClient } from '../generated';
import type {
  AttachmentModel,
  Attachments_Model,
  Categories_by_WorkspaceModel,
  MembershipCollectionModel,
  MembershipReadModel,
  MembershipWriteModel,
  OpenAPIConfig,
  PriorityCollectionModel,
  ProjectCollectionModel,
  ProjectModel,
  RootModel,
  StatusCollectionModel,
  TimeEntryCollectionModel,
  TimeEntryModel,
  TypeModel,
  Types_by_WorkspaceModel,
  TypesModel,
  UserCollectionModel,
  UserCreateModel,
  UserModel,
  Work_PackagesModel,
  WorkPackageModel,
  WorkPackagePatchModel,
  WorkPackageWriteModel,
} from '../generated';
import type { HalCollection, PaginatedResult } from '../types/hal';
import type { FilterExpression, SortExpression } from '../types/query';
import type { OpenProjectAuthStrategy } from './auth/strategies';
import { resolveAuthConfig } from './auth/strategies';
import { mapToOpenProjectError } from './errors';
import { toPaginatedResult } from './hal/pagination';
import { encodeFilters, encodeSortBy } from './query-serializer';

/**
 * Shared list options supported by endpoints that accept filters, sorting and select clauses.
 */
export interface ListOptions {
  filters?: FilterExpression[];
  sortBy?: SortExpression[];
  select?: string[];
}

/**
 * List options for offset/pageSize collection endpoints.
 */
export interface OffsetPageOptions extends ListOptions {
  offset?: number;
  pageSize?: number;
}

/**
 * Input payload for uploading an attachment to a work package.
 */
export interface WorkPackageAttachmentUploadInput {
  /** Target work package identifier. */
  workPackageId: number;
  /** File content to upload. */
  file: Blob;
  /** Attachment file name shown in OpenProject. */
  fileName: string;
  /** Optional attachment description. */
  description?: string;
}

/**
 * SDK client configuration used to bootstrap generated and custom layers.
 */
export interface OpenProjectClientOptions {
  /** OpenProject base URL (domain động theo từng tenant/user). */
  baseUrl: string;
  /** API prefix. The generated client supports /api/v3 only. */
  apiPrefix?: '/api/v3';
  /** Authentication strategy used for all requests. */
  auth?: OpenProjectAuthStrategy;
  /** Additional generated client config overrides. */
  openApiConfig?: Partial<Omit<OpenAPIConfig, 'BASE' | 'TOKEN' | 'USERNAME' | 'PASSWORD' | 'HEADERS'>>;
}

/**
 * Normalizes OpenProject base URL and removes trailing slashes.
 */
function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

/**
 * Converts a string list to comma-separated values accepted by OpenProject select parameter.
 */
function toSelectParameter(select: string[] | undefined): string | undefined {
  if (!select || select.length === 0) {
    return undefined;
  }

  return select.join(',');
}

/**
 * Wraps a generated API call and converts low-level errors into typed SDK errors.
 */
async function execute<T>(call: Promise<T>): Promise<T> {
  try {
    return await call;
  } catch (error) {
    throw mapToOpenProjectError(error);
  }
}

/**
 * Converts generated collection types into normalized SDK pagination output.
 */
function mapCollection<T>(collection: HalCollection<T>): PaginatedResult<T> {
  return toPaginatedResult(collection);
}

/**
 * Typed SDK entry point that provides high-level OpenProject API operations.
 */
export class OpenProjectClient {
  /** Low-level generated API client for full API coverage. */
  public readonly generated: OpenProjectGeneratedClient;

  /** Root API operations. */
  public readonly root: {
    /** Returns root API metadata and top-level links. */
    get: () => Promise<RootModel>;
  };

  /** Project resource operations. */
  public readonly projects: {
    /** Returns projects collection with optional filtering and sorting. */
    list: (options?: ListOptions) => Promise<PaginatedResult<ProjectModel>>;
    /** Fetches a single project by id. */
    get: (id: number) => Promise<ProjectModel>;
    /** Creates a project using OpenProject project write payload. */
    create: (payload: ProjectModel) => Promise<ProjectModel>;
    /** Updates an existing project. */
    update: (id: number, payload: ProjectModel) => Promise<ProjectModel>;
    /** Deletes a project by id. */
    delete: (id: number) => Promise<void>;
  };

  /** Work package resource operations. */
  public readonly workPackages: {
    /** Returns work packages collection with pagination and filters. */
    list: (options?: OffsetPageOptions) => Promise<PaginatedResult<WorkPackageModel>>;
    /** Fetches a single work package by id. */
    get: (id: number, timestamps?: string) => Promise<WorkPackageModel>;
    /** Creates a work package. */
    create: (payload: WorkPackageModel, notify?: boolean) => Promise<WorkPackageModel>;
    /** Creates a work package in a specific workspace (OpenProject 17+). */
    createInWorkspace: (workspaceId: number, payload: WorkPackageModel, notify?: boolean) => Promise<WorkPackageModel>;
    /** Updates an existing work package. */
    update: (id: number, payload: WorkPackagePatchModel, notify?: boolean) => Promise<WorkPackageModel>;
    /** Validates work package create payload using form endpoint. */
    formCreate: (payload?: WorkPackageWriteModel) => Promise<unknown>;
    /** Deletes a work package by id. */
    delete: (id: number) => Promise<void>;
  };

  /** User resource operations. */
  public readonly users: {
    /** Returns users collection with paging/filtering. */
    list: (options?: OffsetPageOptions) => Promise<PaginatedResult<UserModel>>;
    /** Fetches a single user by id or me. */
    get: (id: string) => Promise<UserModel>;
    /** Creates a new user. */
    create: (payload: UserCreateModel) => Promise<UserModel>;
    /** Updates an existing user. */
    update: (id: string, payload: UserCreateModel) => Promise<UserModel>;
    /** Deletes a user. */
    delete: (id: string) => Promise<void>;
  };

  /** Membership resource operations. */
  public readonly memberships: {
    /** Returns memberships collection with optional filters. */
    list: (options?: ListOptions) => Promise<PaginatedResult<MembershipReadModel>>;
    /** Fetches a membership by id. */
    get: (id: number) => Promise<MembershipReadModel>;
    /** Creates a membership. */
    create: (payload: MembershipWriteModel) => Promise<MembershipReadModel>;
    /** Updates a membership. */
    update: (id: number, payload: MembershipWriteModel) => Promise<MembershipReadModel>;
    /** Deletes a membership by id. */
    delete: (id: number) => Promise<void>;
  };

  /** Time entry resource operations. */
  public readonly timeEntries: {
    /** Returns time entries collection with paging/filtering. */
    list: (options?: OffsetPageOptions) => Promise<PaginatedResult<TimeEntryModel>>;
    /** Fetches a time entry by id. */
    get: (id: number) => Promise<TimeEntryModel>;
    /** Creates a time entry. */
    create: (payload: TimeEntryModel) => Promise<TimeEntryModel>;
    /** Deletes a time entry by id. */
    delete: (id: number) => Promise<void>;
  };

  /** Attachment resource operations. */
  public readonly attachments: {
    /** Returns attachments associated with a work package. */
    listByWorkPackage: (workPackageId: number) => Promise<PaginatedResult<AttachmentModel>>;
    /** Fetches a single attachment by id. */
    get: (id: number) => Promise<AttachmentModel>;
    /** Uploads and attaches a file to a work package. */
    uploadForWorkPackage: (input: WorkPackageAttachmentUploadInput) => Promise<AttachmentModel>;
    /** Deletes an attachment by id. */
    delete: (id: number) => Promise<void>;
  };

  /** Reference data operations. */
  public readonly references: {
    /** Lists categories available in a workspace. */
    listWorkspaceCategories: (workspaceId: number) => Promise<PaginatedResult<unknown>>;
    /** Lists workspace types. */
    listWorkspaceTypes: (workspaceId: number) => Promise<PaginatedResult<TypeModel>>;
    /** Lists all globally available types. */
    listAllTypes: () => Promise<TypesModel>;
    /** Lists all statuses. */
    listStatuses: () => Promise<StatusCollectionModel>;
    /** Lists all priorities. */
    listPriorities: () => Promise<PriorityCollectionModel>;
  };

  public constructor(options: OpenProjectClientOptions) {
    const apiPrefix = options.apiPrefix ?? '/api/v3';

    if (apiPrefix !== '/api/v3') {
      throw new Error('Only /api/v3 is supported by this generated client configuration.');
    }

    this.generated = new OpenProjectGeneratedClient({
      BASE: normalizeBaseUrl(options.baseUrl),
      VERSION: '3',
      ...options.openApiConfig,
      ...resolveAuthConfig(options.auth),
    });

    this.root = {
      get: async () => execute(this.generated.root.viewRoot()),
    };

    this.projects = {
      list: async (options) => {
        const response = await execute<ProjectCollectionModel>(
          this.generated.projects.listProjects(
            encodeFilters(options?.filters),
            encodeSortBy(options?.sortBy),
            toSelectParameter(options?.select),
          ),
        );

        return mapCollection(response);
      },
      get: async (id) => execute(this.generated.projects.viewProject(id)),
      create: async (payload) => execute(this.generated.projects.createProject(payload)),
      update: async (id, payload) => execute(this.generated.projects.updateProject(id, payload)),
      delete: async (id) => execute(this.generated.projects.deleteProject(id)),
    };

    this.workPackages = {
      list: async (options) => {
        const response = await execute<Work_PackagesModel>(
          this.generated.workPackages.listWorkPackages(
            options?.offset ?? 1,
            options?.pageSize,
            encodeFilters(options?.filters) ?? '[]',
            encodeSortBy(options?.sortBy) ?? '[["id","asc"]]',
            undefined,
            false,
            toSelectParameter(options?.select),
            'PT0S',
          ),
        );

        return mapCollection(response);
      },
      get: async (id, timestamps = 'PT0S') => execute(this.generated.workPackages.viewWorkPackage(id, timestamps)),
      create: async (payload, notify = true) => execute(this.generated.workPackages.createWorkPackage(notify, payload)),
      createInWorkspace: async (workspaceId, payload, notify = true) =>
        execute(this.generated.workPackages.createWorkspaceWorkPackage(workspaceId, notify, payload)),
      update: async (id, payload, notify = true) =>
        execute(this.generated.workPackages.updateWorkPackage(id, notify, payload)),
      formCreate: async (payload) => execute(this.generated.workPackages.formCreateWorkPackage(payload)),
      delete: async (id) => execute(this.generated.workPackages.deleteWorkPackage(id)),
    };

    this.users = {
      list: async (options) => {
        const response = await execute<UserCollectionModel>(
          this.generated.users.listUsers(
            options?.offset ?? 1,
            options?.pageSize,
            encodeFilters(options?.filters),
            encodeSortBy(options?.sortBy),
            toSelectParameter(options?.select),
          ),
        );

        return mapCollection(response);
      },
      get: async (id) => execute(this.generated.users.viewUser(id)),
      create: async (payload) => execute(this.generated.users.createUser(payload)),
      update: async (id, payload) => execute(this.generated.users.updateUser(id, payload)),
      delete: async (id) => execute(this.generated.users.deleteUser(id)),
    };

    this.memberships = {
      list: async (options) => {
        const response = await execute<MembershipCollectionModel>(
          this.generated.memberships.listMemberships(
            encodeFilters(options?.filters),
            encodeSortBy(options?.sortBy) ?? '[["id","asc"]]',
          ),
        );

        return mapCollection(response);
      },
      get: async (id) => execute(this.generated.memberships.getMembership(id)),
      create: async (payload) => execute(this.generated.memberships.createMembership(payload)),
      update: async (id, payload) => execute(this.generated.memberships.updateMembership(id, payload)),
      delete: async (id) => execute(this.generated.memberships.deleteMembership(id)),
    };

    this.timeEntries = {
      list: async (options) => {
        const response = await execute<TimeEntryCollectionModel>(
          this.generated.timeEntries.listTimeEntries(
            options?.offset ?? 1,
            options?.pageSize,
            encodeSortBy(options?.sortBy) ?? '[["spent_on","asc"]]',
            encodeFilters(options?.filters),
          ),
        );

        return mapCollection(response);
      },
      get: async (id) => execute(this.generated.timeEntries.getTimeEntry(id)),
      create: async (payload) => execute(this.generated.timeEntries.createTimeEntry(payload)),
      delete: async (id) => execute(this.generated.timeEntries.deleteTimeEntry(id)),
    };

    this.attachments = {
      listByWorkPackage: async (workPackageId) => {
        const response = await execute<Attachments_Model>(
          this.generated.attachments.listWorkPackageAttachments(workPackageId),
        );

        return mapCollection(response);
      },
      get: async (id) => execute(this.generated.attachments.viewAttachment(id)),
      uploadForWorkPackage: async (input) => {
        const metadata = input.description
          ? { fileName: input.fileName, description: input.description }
          : { fileName: input.fileName };

        return execute(
          this.generated.request.request<AttachmentModel>({
            method: 'POST',
            url: '/api/v3/work_packages/{id}/attachments',
            path: { id: input.workPackageId },
            formData: {
              metadata,
              file: input.file,
            },
            mediaType: 'multipart/form-data',
            errors: {
              400: 'Invalid attachment upload payload.',
              403: 'Insufficient permissions to create attachment.',
              404: 'Work package not found or inaccessible.',
              415: 'Unsupported media type for attachment upload.',
              422: 'Attachment validation failed.',
            },
          }),
        );
      },
      delete: async (id) => execute(this.generated.attachments.deleteAttachment(id)),
    };

    this.references = {
      listWorkspaceCategories: async (workspaceId) => {
        const response = await execute<Categories_by_WorkspaceModel>(
          this.generated.categories.listCategoriesOfAWorkspace(workspaceId),
        );

        return mapCollection(response as HalCollection<unknown>);
      },
      listWorkspaceTypes: async (workspaceId) => {
        const response = await execute<Types_by_WorkspaceModel>(
          this.generated.types.listTypesAvailableInAWorkspace(workspaceId),
        );

        return mapCollection(response as HalCollection<TypeModel>);
      },
      listAllTypes: async () => execute(this.generated.types.listAllTypes()),
      listStatuses: async () => execute(this.generated.statuses.listStatuses()),
      listPriorities: async () => execute(this.generated.priorities.listAllPriorities()),
    };
  }
}
