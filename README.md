# OpenProject TypeScript SDK (OpenProject 17)

TypeScript SDK để tích hợp OpenProject API v3 trong ứng dụng Node.js/TypeScript.

- Generated OpenAPI client (low-level)
- Wrapper API typed và dễ dùng cho các nhóm endpoint chính
- Hỗ trợ Basic (apikey), Bearer/OAuth2, Session auth

## Yêu cầu

- Node.js `>=20`

## Cài đặt

```bash
npm i @dattrink/openproject-sdk
```

## Sử dụng nhanh

### 1) Khởi tạo client với Basic auth (API key)

```ts
import { OpenProjectClient } from '@dattrink/openproject-sdk';

const client = new OpenProjectClient({
  baseUrl: 'https://your-openproject-domain.example',
  auth: {
    type: 'basic',
    username: 'apikey',
    apiKey: '<user-api-key>',
  },
});

const root = await client.root.get();
console.log(root._type);
```

### 2) Liệt kê work packages có filter/sort/pagination

```ts
const workPackages = await client.workPackages.list({
  offset: 1,
  pageSize: 20,
  filters: [
    { field: 'status', operator: 'o', values: null },
    { field: 'project', operator: '=', values: ['15'] },
  ],
  sortBy: [{ field: 'id', direction: 'asc' }],
});

console.log(workPackages.total, workPackages.elements.length);
```

### 3) Upload attachment cho work package

```ts
const file = new Blob(['hello'], { type: 'text/plain' });

await client.attachments.uploadForWorkPackage({
  workPackageId: 123,
  file,
  fileName: 'hello.txt',
  description: 'Upload from SDK',
});
```

## Các kiểu auth khác

### Bearer/OAuth2

```ts
const client = new OpenProjectClient({
  baseUrl: 'https://your-openproject-domain.example',
  auth: {
    type: 'bearer',
    token: '<access-token>',
  },
});
```

### Session cookie

```ts
const client = new OpenProjectClient({
  baseUrl: 'https://your-openproject-domain.example',
  auth: {
    type: 'session',
    cookie: '_open_project_session=<cookie-value>',
  },
});
```

## Multi-tenant / multi-user runtime

Mỗi user có thể dùng domain + credential riêng ở runtime:

```ts
function getClientForUser(user: { openProjectDomain: string; openProjectApiKey: string }) {
  return new OpenProjectClient({
    baseUrl: user.openProjectDomain,
    auth: {
      type: 'basic',
      username: 'apikey',
      apiKey: user.openProjectApiKey,
    },
  });
}
```

## Development (cho maintainers của SDK)

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run test:unit
npm run test:integration
```

## Đồng bộ OpenAPI spec và generate SDK

```bash
npm run generate:api
```

Lệnh trên sẽ:

1. Tải spec từ `https://www.openproject.org/docs/api/v3/spec.json`
2. Lưu vào `spec/openproject-v3.json`
3. Generate low-level client vào `src/generated`
4. Áp dụng patch hậu-generate cho `QueriesService`

## Scripts

- `npm run sync:spec`
- `npm run generate:api`
- `npm run generate:api:check`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run test:unit`
- `npm run test:integration`
- `npm run test:coverage`

## Ghi chú bảo mật

- Không hardcode API key vào code, test, hoặc commit history.
- Lấy credential từ input runtime hoặc secret manager của hệ thống bạn.
