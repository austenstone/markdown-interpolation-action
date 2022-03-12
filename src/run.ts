import * as core from '@actions/core';
import { mdFileWriteRegex, mdFileReadRegex } from 'markdown-interpolation';

const run = async (): Promise<{ key: string; value: string; } | {}> => {
  const valuesOutput: { key: string; value: string; } | {} = {};
  try {
    const filesRegex = core.getInput('files-regex');
    const filesRegexFlags = core.getInput('files-regex-flags');
    const regex = new RegExp(filesRegex, filesRegexFlags);

    const valuesRead = mdFileReadRegex(regex);
    if (valuesRead) {
      for (const valueRead of valuesRead) {
        valuesOutput[valueRead.key] = valueRead.value;
      }
    }

    const values = core.getInput('values');
    if (!values) throw Error(`No input 'values'`);
    let valuesInput;
    try {
      valuesInput = JSON.parse(values);
    } catch {
      throw Error(`Failed to parse JSON ${values}`);
    }
    mdFileWriteRegex(regex, valuesInput);
  } catch (error) {
    core.setFailed(JSON.stringify(error));
  }

  core.setOutput('values', valuesOutput);
  return valuesOutput;
};

export default run;

