import * as core from '@actions/core';
import { markdownInterpolateWriteFileRegex } from 'markdown-interpolation';

const run = async (): Promise<void> => {
  const valuesInput = core.getInput('values');
  const filesRegex = core.getInput('files-regex');
  const filesRegexFlags = core.getInput('files-regex-flags');
  if (!valuesInput) return core.setFailed('No input \'values\'');
  try {
    const values = JSON.parse(valuesInput);
    const regex = new RegExp(filesRegex, filesRegexFlags);
    const sanitizedValues = Object.fromEntries(Object.entries(values).filter(([_, v]) => v != null));
    core.info(`${regex.source} ${JSON.stringify(sanitizedValues, null, 2)}`);
    return markdownInterpolateWriteFileRegex(regex, sanitizedValues);
  } catch {
    return core.error(`Failed to parse JSON ${valuesInput}`);
  }
};

export default run;

