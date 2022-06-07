import * as core from '@actions/core';
import { mdFileWriteRegex, mdFileReadRegex } from 'markdown-interpolation';

const run = async (): Promise<{ key: string; value: string; } | {}> => {
  const valuesOutput: { key: string; value: string; } | {} = {};
  try {
    const filesRegex = core.getInput('files-regex');
    const filesRegexFlags = core.getInput('files-regex-flags');
    const regex = new RegExp(filesRegex, filesRegexFlags);

    core.info(`Regex: /${filesRegex}/${filesRegexFlags}`);

    const valuesRead = mdFileReadRegex(regex);
    if (valuesRead) {
      for (const valueRead of valuesRead) {
        valuesOutput[valueRead.key] = valueRead.value;
      }
    }
    core.startGroup('Output');
    core.info(JSON.stringify(valuesOutput, null, 2));
    core.endGroup();
    core.setOutput('values', valuesOutput);

    const values = core.getInput('values');
    if (!values) throw Error(`No input 'values'`);
    const valuesInput = JSON.parse(values);
    core.startGroup('Input');
    core.info(JSON.stringify(valuesInput, null, 2));
    core.endGroup();
    mdFileWriteRegex(regex, valuesInput);
  } catch (error) {
    core.setFailed(JSON.stringify(error));
  }

  return valuesOutput;
};

export default run;

