import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const generatedQueriesServicePath = resolve(
  process.cwd(),
  'src/generated/services/QueriesService.ts',
);

/**
 * Fixes known invalid string literals emitted by OpenAPI generator for QueriesService defaults.
 */
async function patchGeneratedQueriesService() {
  let content = await readFile(generatedQueriesServicePath, 'utf8');

  content = content.replace(
    "columns: string = '['type', 'priority']'",
    "columns: string = '[\\\"type\\\",\\\"priority\\\"]'",
  );

  content = content.replace(
    "highlightedAttributes: string = '['type', 'priority']'",
    "highlightedAttributes: string = '[\\\"type\\\",\\\"priority\\\"]'",
  );

  await writeFile(generatedQueriesServicePath, content, 'utf8');
  process.stdout.write('Patched generated QueriesService defaults.\n');
}

void patchGeneratedQueriesService();
