import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';
import { test } from '@jest/globals';

test('test run', () => {
  process.env['INPUT_FILES-REGEX'] = `readme.md`;
  process.env['INPUT_FILES-REGEX-FLAGS'] = `gi`;
  process.env['INPUT_VALUES'] = `{"TIME":"${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)"}`;
  const np = process.execPath;
  const ip = path.join(__dirname, '..', 'lib', 'main.js');
  const options: cp.ExecFileSyncOptions = {
    env: process.env,
  };
  const result = cp.execFileSync(np, [ip], options).toString();
  console.log(result);
});
