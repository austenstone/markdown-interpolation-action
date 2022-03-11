import * as core from '@actions/core';
import { markdownInterpolateWriteFileRegex } from 'markdown-interpolation';

const run = async (): Promise<void> => {
  const valuesInput = core.getInput('values');
  const filesRegex = core.getInput('files-regex');
  const filesRegexFlags = core.getInput('files-regex-flags');
  if (!valuesInput) return core.setFailed('No input \'values\'');
  let values;
  try {
    values = JSON.parse(valuesInput);
  } catch {
    return core.error(`Failed to parse JSON ${valuesInput}`);
  }
  const regex = new RegExp(filesRegex, filesRegexFlags);
  core.info(`${regex.source} ${JSON.stringify(values, null, 2)}`);
  return markdownInterpolateWriteFileRegex(regex, values);
};

export default run;

