export {
  type OpenProjectAuthStrategy,
  type BearerAuthStrategy,
  type BasicApiKeyAuthStrategy,
  type OAuth2AuthStrategy,
  type SessionAuthStrategy,
  type NoAuthStrategy,
  resolveAuthConfig,
} from './core/auth/strategies';

export {
  OpenProjectError,
  OpenProjectApiError,
  OpenProjectAuthError,
  OpenProjectValidationError,
  type OpenProjectErrorCode,
  type OpenProjectErrorDetails,
  mapToOpenProjectError,
} from './core/errors';

export {
  encodeFilters,
  encodeSortBy,
} from './core/query-serializer';

export { toPaginatedResult } from './core/hal/pagination';
export { resolveLinkHref } from './core/hal/links';

export {
  OpenProjectClient,
  type OpenProjectClientOptions,
  type ListOptions,
  type OffsetPageOptions,
  type WorkPackageAttachmentUploadInput,
} from './core/openproject-client';

export type {
  FilterExpression,
  SortExpression,
  FilterValuePrimitive,
} from './types/query';

export type {
  HalCollection,
  HalLinks,
  HalResource,
  PaginatedResult,
} from './types/hal';

export {
  OpenProjectGeneratedClient,
  type OpenAPIConfig,
} from './generated';

export type {
  RootModel,
  ProjectModel,
  ProjectCollectionModel,
  WorkPackageModel,
  Work_PackagesModel,
  WorkPackagePatchModel,
  WorkPackageWriteModel,
  UserModel,
  UserCollectionModel,
  UserCreateModel,
  MembershipReadModel,
  MembershipCollectionModel,
  MembershipWriteModel,
  TimeEntryModel,
  TimeEntryCollectionModel,
  AttachmentModel,
  Attachments_Model,
  Categories_by_WorkspaceModel,
  Types_by_WorkspaceModel,
  TypesModel,
  StatusCollectionModel,
  PriorityCollectionModel,
  ErrorResponse,
  Link,
} from './generated';
