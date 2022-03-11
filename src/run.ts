import * as core from '@actions/core';
import { markdownInterpolateFileWrite } from 'markdown-interpolation';

const run = async (): Promise<void> => {
  const valuesInput = core.getInput('values');
  if (!valuesInput) return core.setFailed('No input \'values\'');
  core.info(valuesInput);
  let values;
  try {
    values = JSON.parse(valuesInput);
  } catch {
    return core.error(`Failed to parse JSON ${valuesInput}`);
  }
  return markdownInterpolateFileWrite('README.md', values);
};

export default run;

