import * as core from '@actions/core';
import { markdownInterpolateFileWrite } from 'markdown-interpolation';

const run = async (): Promise<void> => {
  const values = core.getInput('values');
  if (!values) return core.setFailed('No input \'values\'');
  core.info(JSON.stringify({ values }, null, 2));
  markdownInterpolateFileWrite('README.md', values);
};

export default run;
