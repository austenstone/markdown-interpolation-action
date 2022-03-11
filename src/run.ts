import * as core from '@actions/core';

const run = async (): Promise<void> => {
  const valuesInput = '{"TIME":"6:20 PM"}';
  // const valuesInput = core.getInput('values');
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

