# OpenProject TypeScript SDK (OpenProject 17)

TypeScript SDK để giao tiếp OpenProject API v3 theo OpenAPI specification, có:

- generated client từ swagger/openapi
- typed wrapper thân thiện cho các nhóm API chính
- hỗ trợ auth Basic (apikey), Bearer/OAuth2, Session
- unit test + integration smoke test

## Cài đặt

```bash
npm install
```

## Đồng bộ OpenAPI spec và generate SDK

```bash
npm run generate:api
```

Lệnh trên sẽ:

1. Tải spec từ `https://www.openproject.org/docs/api/v3/spec.json`
2. Lưu vào `spec/openproject-v3.json`
3. Generate low-level client vào `src/generated`
4. Áp dụng patch hậu-generate để sửa bug cú pháp từ generator ở `QueriesService`

## Build và test

```bash
npm run typecheck
npm run lint
npm run build
npm run test:unit
npm run test:integration
npm run test:coverage
```

## Sử dụng nhanh

### 1) Khởi tạo client với domain + API key động (Basic auth)

```ts
import { OpenProjectClient } from '@ttdat/openproject-sdk';

type OpenProjectUserConfig = {
  domain: string;
  apiKey: string;
};

function createClient(config: OpenProjectUserConfig) {
  return new OpenProjectClient({
    baseUrl: config.domain,
    auth: {
      type: 'basic',
      username: 'apikey',
      apiKey: config.apiKey,
    },
  });
}

const client = createClient({
  domain: 'https://your-openproject-domain.example',
  apiKey: '<user-api-key>',
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

## Multi-tenant / multi-user runtime

SDK này hỗ trợ đầy đủ mô hình domain và API key động theo từng user:

- `baseUrl` là tham số động khi khởi tạo `OpenProjectClient`
- `auth.apiKey` nhận trực tiếp string runtime hoặc token provider
- mỗi request context có thể tạo một client riêng theo domain + key tương ứng

Ví dụ tạo client theo request user:

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

## Cấu trúc dự án

- `src/generated/` — generated code từ OpenAPI (không sửa tay)
- `src/core/` — wrapper, auth, error mapping, HAL helpers
- `src/types/` — kiểu dùng chung cho query/HAL
- `spec/openproject-v3.json` — OpenAPI spec pin cục bộ
- `scripts/sync-spec.mjs` — tải spec
- `scripts/patch-generated.mjs` — patch hậu-generate
- `test/unit/` — unit tests
- `test/integration/` — integration smoke tests

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
- Nhận API key từ input động của user/session hoặc secret manager của hệ thống bạn.
