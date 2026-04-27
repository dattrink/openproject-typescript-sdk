import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const SPEC_URL = 'https://www.openproject.org/docs/api/v3/spec.json';
const OUTPUT_PATH = resolve(process.cwd(), 'spec/openproject-v3.json');

/**
 * Downloads OpenProject API v3 specification and saves it locally.
 */
async function syncSpec() {
  const response = await fetch(SPEC_URL);

  if (!response.ok) {
    throw new Error(`Failed to download OpenAPI specification: ${response.status} ${response.statusText}`);
  }

  const specificationText = await response.text();
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, specificationText, 'utf8');
  process.stdout.write(`OpenAPI specification saved to ${OUTPUT_PATH}\n`);
}

void syncSpec();
