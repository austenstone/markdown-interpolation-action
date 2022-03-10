require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const run_1 = __importDefault(__nccwpck_require__(884));
(0, run_1.default)();


/***/ }),

/***/ 884:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(186));
const markdown_interpolation_1 = __nccwpck_require__(312);
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const values = core.getInput('values');
    if (!values)
        return core.setFailed('No input \'values\'');
    core.info(JSON.stringify({ values }, null, 2));
    (0, markdown_interpolation_1.markdownInterpolateFileWrite)('README.md', values);
});
exports["default"] = run;


/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(37));
const path = __importStar(__nccwpck_require__(17));
const oidc_utils_1 = __nccwpck_require__(41);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(147));
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 41:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(925);
const auth_1 = __nccwpck_require__(702);
const core_1 = __nccwpck_require__(186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' +
                Buffer.from(this.username + ':' + this.password).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] = 'Bearer ' + this.token;
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;


/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http = __nccwpck_require__(685);
const https = __nccwpck_require__(687);
const pm = __nccwpck_require__(443);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __nccwpck_require__(294);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 312:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

__nccwpck_require__(777);/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require2_ !== 'undefined') __nccwpck_require2_.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 777:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

(()=>{var e={650:e=>{var r=Object.prototype.toString;var n=typeof Buffer.alloc==="function"&&typeof Buffer.allocUnsafe==="function"&&typeof Buffer.from==="function";function isArrayBuffer(e){return r.call(e).slice(8,-1)==="ArrayBuffer"}function fromArrayBuffer(e,r,t){r>>>=0;var o=e.byteLength-r;if(o<0){throw new RangeError("'offset' is out of bounds")}if(t===undefined){t=o}else{t>>>=0;if(t>o){throw new RangeError("'length' is out of bounds")}}return n?Buffer.from(e.slice(r,r+t)):new Buffer(new Uint8Array(e.slice(r,r+t)))}function fromString(e,r){if(typeof r!=="string"||r===""){r="utf8"}if(!Buffer.isEncoding(r)){throw new TypeError('"encoding" must be a valid string encoding')}return n?Buffer.from(e,r):new Buffer(e,r)}function bufferFrom(e,r,t){if(typeof e==="number"){throw new TypeError('"value" argument must not be a number')}if(isArrayBuffer(e)){return fromArrayBuffer(e,r,t)}if(typeof e==="string"){return fromString(e,r)}return n?Buffer.from(e):new Buffer(e)}e.exports=bufferFrom},284:(e,r,n)=>{e=n.nmd(e);var t=n(596).SourceMapConsumer;var o=n(17);var i;try{i=n(147);if(!i.existsSync||!i.readFileSync){i=null}}catch(e){}var a=n(650);function dynamicRequire(e,r){return e.require(r)}var u=false;var s=false;var l=false;var c="auto";var p={};var f={};var g=/^data:application\/json[^,]+base64,/;var h=[];var d=[];function isInBrowser(){if(c==="browser")return true;if(c==="node")return false;return typeof window!=="undefined"&&typeof XMLHttpRequest==="function"&&!(window.require&&window.module&&window.process&&window.process.type==="renderer")}function hasGlobalProcessEventEmitter(){return typeof process==="object"&&process!==null&&typeof process.on==="function"}function handlerExec(e){return function(r){for(var n=0;n<e.length;n++){var t=e[n](r);if(t){return t}}return null}}var m=handlerExec(h);h.push((function(e){e=e.trim();if(/^file:/.test(e)){e=e.replace(/file:\/\/\/(\w:)?/,(function(e,r){return r?"":"/"}))}if(e in p){return p[e]}var r="";try{if(!i){var n=new XMLHttpRequest;n.open("GET",e,false);n.send(null);if(n.readyState===4&&n.status===200){r=n.responseText}}else if(i.existsSync(e)){r=i.readFileSync(e,"utf8")}}catch(e){}return p[e]=r}));function supportRelativeURL(e,r){if(!e)return r;var n=o.dirname(e);var t=/^\w+:\/\/[^\/]*/.exec(n);var i=t?t[0]:"";var a=n.slice(i.length);if(i&&/^\/\w\:/.test(a)){i+="/";return i+o.resolve(n.slice(i.length),r).replace(/\\/g,"/")}return i+o.resolve(n.slice(i.length),r)}function retrieveSourceMapURL(e){var r;if(isInBrowser()){try{var n=new XMLHttpRequest;n.open("GET",e,false);n.send(null);r=n.readyState===4?n.responseText:null;var t=n.getResponseHeader("SourceMap")||n.getResponseHeader("X-SourceMap");if(t){return t}}catch(e){}}r=m(e);var o=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/gm;var i,a;while(a=o.exec(r))i=a;if(!i)return null;return i[1]}var v=handlerExec(d);d.push((function(e){var r=retrieveSourceMapURL(e);if(!r)return null;var n;if(g.test(r)){var t=r.slice(r.indexOf(",")+1);n=a(t,"base64").toString();r=e}else{r=supportRelativeURL(e,r);n=m(r)}if(!n){return null}return{url:r,map:n}}));function mapSourcePosition(e){var r=f[e.source];if(!r){var n=v(e.source);if(n){r=f[e.source]={url:n.url,map:new t(n.map)};if(r.map.sourcesContent){r.map.sources.forEach((function(e,n){var t=r.map.sourcesContent[n];if(t){var o=supportRelativeURL(r.url,e);p[o]=t}}))}}else{r=f[e.source]={url:null,map:null}}}if(r&&r.map&&typeof r.map.originalPositionFor==="function"){var o=r.map.originalPositionFor(e);if(o.source!==null){o.source=supportRelativeURL(r.url,o.source);return o}}return e}function mapEvalOrigin(e){var r=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);if(r){var n=mapSourcePosition({source:r[2],line:+r[3],column:r[4]-1});return"eval at "+r[1]+" ("+n.source+":"+n.line+":"+(n.column+1)+")"}r=/^eval at ([^(]+) \((.+)\)$/.exec(e);if(r){return"eval at "+r[1]+" ("+mapEvalOrigin(r[2])+")"}return e}function CallSiteToString(){var e;var r="";if(this.isNative()){r="native"}else{e=this.getScriptNameOrSourceURL();if(!e&&this.isEval()){r=this.getEvalOrigin();r+=", "}if(e){r+=e}else{r+="<anonymous>"}var n=this.getLineNumber();if(n!=null){r+=":"+n;var t=this.getColumnNumber();if(t){r+=":"+t}}}var o="";var i=this.getFunctionName();var a=true;var u=this.isConstructor();var s=!(this.isToplevel()||u);if(s){var l=this.getTypeName();if(l==="[object Object]"){l="null"}var c=this.getMethodName();if(i){if(l&&i.indexOf(l)!=0){o+=l+"."}o+=i;if(c&&i.indexOf("."+c)!=i.length-c.length-1){o+=" [as "+c+"]"}}else{o+=l+"."+(c||"<anonymous>")}}else if(u){o+="new "+(i||"<anonymous>")}else if(i){o+=i}else{o+=r;a=false}if(a){o+=" ("+r+")"}return o}function cloneCallSite(e){var r={};Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(n){r[n]=/^(?:is|get)/.test(n)?function(){return e[n].call(e)}:e[n]}));r.toString=CallSiteToString;return r}function wrapCallSite(e,r){if(r===undefined){r={nextPosition:null,curPosition:null}}if(e.isNative()){r.curPosition=null;return e}var n=e.getFileName()||e.getScriptNameOrSourceURL();if(n){var t=e.getLineNumber();var o=e.getColumnNumber()-1;var i=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;var a=i.test(process.version)?0:62;if(t===1&&o>a&&!isInBrowser()&&!e.isEval()){o-=a}var u=mapSourcePosition({source:n,line:t,column:o});r.curPosition=u;e=cloneCallSite(e);var s=e.getFunctionName;e.getFunctionName=function(){if(r.nextPosition==null){return s()}return r.nextPosition.name||s()};e.getFileName=function(){return u.source};e.getLineNumber=function(){return u.line};e.getColumnNumber=function(){return u.column+1};e.getScriptNameOrSourceURL=function(){return u.source};return e}var l=e.isEval()&&e.getEvalOrigin();if(l){l=mapEvalOrigin(l);e=cloneCallSite(e);e.getEvalOrigin=function(){return l};return e}return e}function prepareStackTrace(e,r){if(l){p={};f={}}var n=e.name||"Error";var t=e.message||"";var o=n+": "+t;var i={nextPosition:null,curPosition:null};var a=[];for(var u=r.length-1;u>=0;u--){a.push("\n    at "+wrapCallSite(r[u],i));i.nextPosition=i.curPosition}i.curPosition=i.nextPosition=null;return o+a.reverse().join("")}function getErrorSource(e){var r=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);if(r){var n=r[1];var t=+r[2];var o=+r[3];var a=p[n];if(!a&&i&&i.existsSync(n)){try{a=i.readFileSync(n,"utf8")}catch(e){a=""}}if(a){var u=a.split(/(?:\r\n|\r|\n)/)[t-1];if(u){return n+":"+t+"\n"+u+"\n"+new Array(o).join(" ")+"^"}}}return null}function printErrorAndExit(e){var r=getErrorSource(e);if(process.stderr._handle&&process.stderr._handle.setBlocking){process.stderr._handle.setBlocking(true)}if(r){console.error();console.error(r)}console.error(e.stack);process.exit(1)}function shimEmitUncaughtException(){var e=process.emit;process.emit=function(r){if(r==="uncaughtException"){var n=arguments[1]&&arguments[1].stack;var t=this.listeners(r).length>0;if(n&&!t){return printErrorAndExit(arguments[1])}}return e.apply(this,arguments)}}var S=h.slice(0);var _=d.slice(0);r.wrapCallSite=wrapCallSite;r.getErrorSource=getErrorSource;r.mapSourcePosition=mapSourcePosition;r.retrieveSourceMap=v;r.install=function(r){r=r||{};if(r.environment){c=r.environment;if(["node","browser","auto"].indexOf(c)===-1){throw new Error("environment "+c+" was unknown. Available options are {auto, browser, node}")}}if(r.retrieveFile){if(r.overrideRetrieveFile){h.length=0}h.unshift(r.retrieveFile)}if(r.retrieveSourceMap){if(r.overrideRetrieveSourceMap){d.length=0}d.unshift(r.retrieveSourceMap)}if(r.hookRequire&&!isInBrowser()){var n=dynamicRequire(e,"module");var t=n.prototype._compile;if(!t.__sourceMapSupport){n.prototype._compile=function(e,r){p[r]=e;f[r]=undefined;return t.call(this,e,r)};n.prototype._compile.__sourceMapSupport=true}}if(!l){l="emptyCacheBetweenOperations"in r?r.emptyCacheBetweenOperations:false}if(!u){u=true;Error.prepareStackTrace=prepareStackTrace}if(!s){var o="handleUncaughtExceptions"in r?r.handleUncaughtExceptions:true;try{var i=dynamicRequire(e,"worker_threads");if(i.isMainThread===false){o=false}}catch(e){}if(o&&hasGlobalProcessEventEmitter()){s=true;shimEmitUncaughtException()}}};r.resetRetrieveHandlers=function(){h.length=0;d.length=0;h=S.slice(0);d=_.slice(0);v=handlerExec(d);m=handlerExec(h)}},837:(e,r,n)=>{var t=n(983);var o=Object.prototype.hasOwnProperty;var i=typeof Map!=="undefined";function ArraySet(){this._array=[];this._set=i?new Map:Object.create(null)}ArraySet.fromArray=function ArraySet_fromArray(e,r){var n=new ArraySet;for(var t=0,o=e.length;t<o;t++){n.add(e[t],r)}return n};ArraySet.prototype.size=function ArraySet_size(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length};ArraySet.prototype.add=function ArraySet_add(e,r){var n=i?e:t.toSetString(e);var a=i?this.has(e):o.call(this._set,n);var u=this._array.length;if(!a||r){this._array.push(e)}if(!a){if(i){this._set.set(e,u)}else{this._set[n]=u}}};ArraySet.prototype.has=function ArraySet_has(e){if(i){return this._set.has(e)}else{var r=t.toSetString(e);return o.call(this._set,r)}};ArraySet.prototype.indexOf=function ArraySet_indexOf(e){if(i){var r=this._set.get(e);if(r>=0){return r}}else{var n=t.toSetString(e);if(o.call(this._set,n)){return this._set[n]}}throw new Error('"'+e+'" is not in the set.')};ArraySet.prototype.at=function ArraySet_at(e){if(e>=0&&e<this._array.length){return this._array[e]}throw new Error("No element indexed by "+e)};ArraySet.prototype.toArray=function ArraySet_toArray(){return this._array.slice()};r.I=ArraySet},215:(e,r,n)=>{var t=n(537);var o=5;var i=1<<o;var a=i-1;var u=i;function toVLQSigned(e){return e<0?(-e<<1)+1:(e<<1)+0}function fromVLQSigned(e){var r=(e&1)===1;var n=e>>1;return r?-n:n}r.encode=function base64VLQ_encode(e){var r="";var n;var i=toVLQSigned(e);do{n=i&a;i>>>=o;if(i>0){n|=u}r+=t.encode(n)}while(i>0);return r};r.decode=function base64VLQ_decode(e,r,n){var i=e.length;var s=0;var l=0;var c,p;do{if(r>=i){throw new Error("Expected more digits in base 64 VLQ value.")}p=t.decode(e.charCodeAt(r++));if(p===-1){throw new Error("Invalid base64 digit: "+e.charAt(r-1))}c=!!(p&u);p&=a;s=s+(p<<l);l+=o}while(c);n.value=fromVLQSigned(s);n.rest=r}},537:(e,r)=>{var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r.encode=function(e){if(0<=e&&e<n.length){return n[e]}throw new TypeError("Must be between 0 and 63: "+e)};r.decode=function(e){var r=65;var n=90;var t=97;var o=122;var i=48;var a=57;var u=43;var s=47;var l=26;var c=52;if(r<=e&&e<=n){return e-r}if(t<=e&&e<=o){return e-t+l}if(i<=e&&e<=a){return e-i+c}if(e==u){return 62}if(e==s){return 63}return-1}},164:(e,r)=>{r.GREATEST_LOWER_BOUND=1;r.LEAST_UPPER_BOUND=2;function recursiveSearch(e,n,t,o,i,a){var u=Math.floor((n-e)/2)+e;var s=i(t,o[u],true);if(s===0){return u}else if(s>0){if(n-u>1){return recursiveSearch(u,n,t,o,i,a)}if(a==r.LEAST_UPPER_BOUND){return n<o.length?n:-1}else{return u}}else{if(u-e>1){return recursiveSearch(e,u,t,o,i,a)}if(a==r.LEAST_UPPER_BOUND){return u}else{return e<0?-1:e}}}r.search=function search(e,n,t,o){if(n.length===0){return-1}var i=recursiveSearch(-1,n.length,e,n,t,o||r.GREATEST_LOWER_BOUND);if(i<0){return-1}while(i-1>=0){if(t(n[i],n[i-1],true)!==0){break}--i}return i}},740:(e,r,n)=>{var t=n(983);function generatedPositionAfter(e,r){var n=e.generatedLine;var o=r.generatedLine;var i=e.generatedColumn;var a=r.generatedColumn;return o>n||o==n&&a>=i||t.compareByGeneratedPositionsInflated(e,r)<=0}function MappingList(){this._array=[];this._sorted=true;this._last={generatedLine:-1,generatedColumn:0}}MappingList.prototype.unsortedForEach=function MappingList_forEach(e,r){this._array.forEach(e,r)};MappingList.prototype.add=function MappingList_add(e){if(generatedPositionAfter(this._last,e)){this._last=e;this._array.push(e)}else{this._sorted=false;this._array.push(e)}};MappingList.prototype.toArray=function MappingList_toArray(){if(!this._sorted){this._array.sort(t.compareByGeneratedPositionsInflated);this._sorted=true}return this._array};r.H=MappingList},226:(e,r)=>{function swap(e,r,n){var t=e[r];e[r]=e[n];e[n]=t}function randomIntInRange(e,r){return Math.round(e+Math.random()*(r-e))}function doQuickSort(e,r,n,t){if(n<t){var o=randomIntInRange(n,t);var i=n-1;swap(e,o,t);var a=e[t];for(var u=n;u<t;u++){if(r(e[u],a)<=0){i+=1;swap(e,i,u)}}swap(e,i+1,u);var s=i+1;doQuickSort(e,r,n,s-1);doQuickSort(e,r,s+1,t)}}r.U=function(e,r){doQuickSort(e,r,0,e.length-1)}},327:(e,r,n)=>{var t;var o=n(983);var i=n(164);var a=n(837).I;var u=n(215);var s=n(226).U;function SourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}return n.sections!=null?new IndexedSourceMapConsumer(n,r):new BasicSourceMapConsumer(n,r)}SourceMapConsumer.fromSourceMap=function(e,r){return BasicSourceMapConsumer.fromSourceMap(e,r)};SourceMapConsumer.prototype._version=3;SourceMapConsumer.prototype.__generatedMappings=null;Object.defineProperty(SourceMapConsumer.prototype,"_generatedMappings",{configurable:true,enumerable:true,get:function(){if(!this.__generatedMappings){this._parseMappings(this._mappings,this.sourceRoot)}return this.__generatedMappings}});SourceMapConsumer.prototype.__originalMappings=null;Object.defineProperty(SourceMapConsumer.prototype,"_originalMappings",{configurable:true,enumerable:true,get:function(){if(!this.__originalMappings){this._parseMappings(this._mappings,this.sourceRoot)}return this.__originalMappings}});SourceMapConsumer.prototype._charIsMappingSeparator=function SourceMapConsumer_charIsMappingSeparator(e,r){var n=e.charAt(r);return n===";"||n===","};SourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(e,r){throw new Error("Subclasses must implement _parseMappings")};SourceMapConsumer.GENERATED_ORDER=1;SourceMapConsumer.ORIGINAL_ORDER=2;SourceMapConsumer.GREATEST_LOWER_BOUND=1;SourceMapConsumer.LEAST_UPPER_BOUND=2;SourceMapConsumer.prototype.eachMapping=function SourceMapConsumer_eachMapping(e,r,n){var t=r||null;var i=n||SourceMapConsumer.GENERATED_ORDER;var a;switch(i){case SourceMapConsumer.GENERATED_ORDER:a=this._generatedMappings;break;case SourceMapConsumer.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var u=this.sourceRoot;a.map((function(e){var r=e.source===null?null:this._sources.at(e.source);r=o.computeSourceURL(u,r,this._sourceMapURL);return{source:r,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:e.name===null?null:this._names.at(e.name)}}),this).forEach(e,t)};SourceMapConsumer.prototype.allGeneratedPositionsFor=function SourceMapConsumer_allGeneratedPositionsFor(e){var r=o.getArg(e,"line");var n={source:o.getArg(e,"source"),originalLine:r,originalColumn:o.getArg(e,"column",0)};n.source=this._findSourceIndex(n.source);if(n.source<0){return[]}var t=[];var a=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(a>=0){var u=this._originalMappings[a];if(e.column===undefined){var s=u.originalLine;while(u&&u.originalLine===s){t.push({line:o.getArg(u,"generatedLine",null),column:o.getArg(u,"generatedColumn",null),lastColumn:o.getArg(u,"lastGeneratedColumn",null)});u=this._originalMappings[++a]}}else{var l=u.originalColumn;while(u&&u.originalLine===r&&u.originalColumn==l){t.push({line:o.getArg(u,"generatedLine",null),column:o.getArg(u,"generatedColumn",null),lastColumn:o.getArg(u,"lastGeneratedColumn",null)});u=this._originalMappings[++a]}}}return t};r.SourceMapConsumer=SourceMapConsumer;function BasicSourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}var t=o.getArg(n,"version");var i=o.getArg(n,"sources");var u=o.getArg(n,"names",[]);var s=o.getArg(n,"sourceRoot",null);var l=o.getArg(n,"sourcesContent",null);var c=o.getArg(n,"mappings");var p=o.getArg(n,"file",null);if(t!=this._version){throw new Error("Unsupported version: "+t)}if(s){s=o.normalize(s)}i=i.map(String).map(o.normalize).map((function(e){return s&&o.isAbsolute(s)&&o.isAbsolute(e)?o.relative(s,e):e}));this._names=a.fromArray(u.map(String),true);this._sources=a.fromArray(i,true);this._absoluteSources=this._sources.toArray().map((function(e){return o.computeSourceURL(s,e,r)}));this.sourceRoot=s;this.sourcesContent=l;this._mappings=c;this._sourceMapURL=r;this.file=p}BasicSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);BasicSourceMapConsumer.prototype.consumer=SourceMapConsumer;BasicSourceMapConsumer.prototype._findSourceIndex=function(e){var r=e;if(this.sourceRoot!=null){r=o.relative(this.sourceRoot,r)}if(this._sources.has(r)){return this._sources.indexOf(r)}var n;for(n=0;n<this._absoluteSources.length;++n){if(this._absoluteSources[n]==e){return n}}return-1};BasicSourceMapConsumer.fromSourceMap=function SourceMapConsumer_fromSourceMap(e,r){var n=Object.create(BasicSourceMapConsumer.prototype);var t=n._names=a.fromArray(e._names.toArray(),true);var i=n._sources=a.fromArray(e._sources.toArray(),true);n.sourceRoot=e._sourceRoot;n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot);n.file=e._file;n._sourceMapURL=r;n._absoluteSources=n._sources.toArray().map((function(e){return o.computeSourceURL(n.sourceRoot,e,r)}));var u=e._mappings.toArray().slice();var l=n.__generatedMappings=[];var c=n.__originalMappings=[];for(var p=0,f=u.length;p<f;p++){var g=u[p];var h=new Mapping;h.generatedLine=g.generatedLine;h.generatedColumn=g.generatedColumn;if(g.source){h.source=i.indexOf(g.source);h.originalLine=g.originalLine;h.originalColumn=g.originalColumn;if(g.name){h.name=t.indexOf(g.name)}c.push(h)}l.push(h)}s(n.__originalMappings,o.compareByOriginalPositions);return n};BasicSourceMapConsumer.prototype._version=3;Object.defineProperty(BasicSourceMapConsumer.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function Mapping(){this.generatedLine=0;this.generatedColumn=0;this.source=null;this.originalLine=null;this.originalColumn=null;this.name=null}BasicSourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(e,r){var n=1;var t=0;var i=0;var a=0;var l=0;var c=0;var p=e.length;var f=0;var g={};var h={};var d=[];var m=[];var v,S,_,C,y;while(f<p){if(e.charAt(f)===";"){n++;f++;t=0}else if(e.charAt(f)===","){f++}else{v=new Mapping;v.generatedLine=n;for(C=f;C<p;C++){if(this._charIsMappingSeparator(e,C)){break}}S=e.slice(f,C);_=g[S];if(_){f+=S.length}else{_=[];while(f<C){u.decode(e,f,h);y=h.value;f=h.rest;_.push(y)}if(_.length===2){throw new Error("Found a source, but no line and column")}if(_.length===3){throw new Error("Found a source and line, but no column")}g[S]=_}v.generatedColumn=t+_[0];t=v.generatedColumn;if(_.length>1){v.source=l+_[1];l+=_[1];v.originalLine=i+_[2];i=v.originalLine;v.originalLine+=1;v.originalColumn=a+_[3];a=v.originalColumn;if(_.length>4){v.name=c+_[4];c+=_[4]}}m.push(v);if(typeof v.originalLine==="number"){d.push(v)}}}s(m,o.compareByGeneratedPositionsDeflated);this.__generatedMappings=m;s(d,o.compareByOriginalPositions);this.__originalMappings=d};BasicSourceMapConsumer.prototype._findMapping=function SourceMapConsumer_findMapping(e,r,n,t,o,a){if(e[n]<=0){throw new TypeError("Line must be greater than or equal to 1, got "+e[n])}if(e[t]<0){throw new TypeError("Column must be greater than or equal to 0, got "+e[t])}return i.search(e,r,o,a)};BasicSourceMapConsumer.prototype.computeColumnSpans=function SourceMapConsumer_computeColumnSpans(){for(var e=0;e<this._generatedMappings.length;++e){var r=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(r.generatedLine===n.generatedLine){r.lastGeneratedColumn=n.generatedColumn-1;continue}}r.lastGeneratedColumn=Infinity}};BasicSourceMapConsumer.prototype.originalPositionFor=function SourceMapConsumer_originalPositionFor(e){var r={generatedLine:o.getArg(e,"line"),generatedColumn:o.getArg(e,"column")};var n=this._findMapping(r,this._generatedMappings,"generatedLine","generatedColumn",o.compareByGeneratedPositionsDeflated,o.getArg(e,"bias",SourceMapConsumer.GREATEST_LOWER_BOUND));if(n>=0){var t=this._generatedMappings[n];if(t.generatedLine===r.generatedLine){var i=o.getArg(t,"source",null);if(i!==null){i=this._sources.at(i);i=o.computeSourceURL(this.sourceRoot,i,this._sourceMapURL)}var a=o.getArg(t,"name",null);if(a!==null){a=this._names.at(a)}return{source:i,line:o.getArg(t,"originalLine",null),column:o.getArg(t,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};BasicSourceMapConsumer.prototype.hasContentsOfAllSources=function BasicSourceMapConsumer_hasContentsOfAllSources(){if(!this.sourcesContent){return false}return this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return e==null}))};BasicSourceMapConsumer.prototype.sourceContentFor=function SourceMapConsumer_sourceContentFor(e,r){if(!this.sourcesContent){return null}var n=this._findSourceIndex(e);if(n>=0){return this.sourcesContent[n]}var t=e;if(this.sourceRoot!=null){t=o.relative(this.sourceRoot,t)}var i;if(this.sourceRoot!=null&&(i=o.urlParse(this.sourceRoot))){var a=t.replace(/^file:\/\//,"");if(i.scheme=="file"&&this._sources.has(a)){return this.sourcesContent[this._sources.indexOf(a)]}if((!i.path||i.path=="/")&&this._sources.has("/"+t)){return this.sourcesContent[this._sources.indexOf("/"+t)]}}if(r){return null}else{throw new Error('"'+t+'" is not in the SourceMap.')}};BasicSourceMapConsumer.prototype.generatedPositionFor=function SourceMapConsumer_generatedPositionFor(e){var r=o.getArg(e,"source");r=this._findSourceIndex(r);if(r<0){return{line:null,column:null,lastColumn:null}}var n={source:r,originalLine:o.getArg(e,"line"),originalColumn:o.getArg(e,"column")};var t=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,o.getArg(e,"bias",SourceMapConsumer.GREATEST_LOWER_BOUND));if(t>=0){var i=this._originalMappings[t];if(i.source===n.source){return{line:o.getArg(i,"generatedLine",null),column:o.getArg(i,"generatedColumn",null),lastColumn:o.getArg(i,"lastGeneratedColumn",null)}}}return{line:null,column:null,lastColumn:null}};t=BasicSourceMapConsumer;function IndexedSourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}var t=o.getArg(n,"version");var i=o.getArg(n,"sections");if(t!=this._version){throw new Error("Unsupported version: "+t)}this._sources=new a;this._names=new a;var u={line:-1,column:0};this._sections=i.map((function(e){if(e.url){throw new Error("Support for url field in sections not implemented.")}var n=o.getArg(e,"offset");var t=o.getArg(n,"line");var i=o.getArg(n,"column");if(t<u.line||t===u.line&&i<u.column){throw new Error("Section offsets must be ordered and non-overlapping.")}u=n;return{generatedOffset:{generatedLine:t+1,generatedColumn:i+1},consumer:new SourceMapConsumer(o.getArg(e,"map"),r)}}))}IndexedSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);IndexedSourceMapConsumer.prototype.constructor=SourceMapConsumer;IndexedSourceMapConsumer.prototype._version=3;Object.defineProperty(IndexedSourceMapConsumer.prototype,"sources",{get:function(){var e=[];for(var r=0;r<this._sections.length;r++){for(var n=0;n<this._sections[r].consumer.sources.length;n++){e.push(this._sections[r].consumer.sources[n])}}return e}});IndexedSourceMapConsumer.prototype.originalPositionFor=function IndexedSourceMapConsumer_originalPositionFor(e){var r={generatedLine:o.getArg(e,"line"),generatedColumn:o.getArg(e,"column")};var n=i.search(r,this._sections,(function(e,r){var n=e.generatedLine-r.generatedOffset.generatedLine;if(n){return n}return e.generatedColumn-r.generatedOffset.generatedColumn}));var t=this._sections[n];if(!t){return{source:null,line:null,column:null,name:null}}return t.consumer.originalPositionFor({line:r.generatedLine-(t.generatedOffset.generatedLine-1),column:r.generatedColumn-(t.generatedOffset.generatedLine===r.generatedLine?t.generatedOffset.generatedColumn-1:0),bias:e.bias})};IndexedSourceMapConsumer.prototype.hasContentsOfAllSources=function IndexedSourceMapConsumer_hasContentsOfAllSources(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))};IndexedSourceMapConsumer.prototype.sourceContentFor=function IndexedSourceMapConsumer_sourceContentFor(e,r){for(var n=0;n<this._sections.length;n++){var t=this._sections[n];var o=t.consumer.sourceContentFor(e,true);if(o){return o}}if(r){return null}else{throw new Error('"'+e+'" is not in the SourceMap.')}};IndexedSourceMapConsumer.prototype.generatedPositionFor=function IndexedSourceMapConsumer_generatedPositionFor(e){for(var r=0;r<this._sections.length;r++){var n=this._sections[r];if(n.consumer._findSourceIndex(o.getArg(e,"source"))===-1){continue}var t=n.consumer.generatedPositionFor(e);if(t){var i={line:t.line+(n.generatedOffset.generatedLine-1),column:t.column+(n.generatedOffset.generatedLine===t.line?n.generatedOffset.generatedColumn-1:0)};return i}}return{line:null,column:null}};IndexedSourceMapConsumer.prototype._parseMappings=function IndexedSourceMapConsumer_parseMappings(e,r){this.__generatedMappings=[];this.__originalMappings=[];for(var n=0;n<this._sections.length;n++){var t=this._sections[n];var i=t.consumer._generatedMappings;for(var a=0;a<i.length;a++){var u=i[a];var l=t.consumer._sources.at(u.source);l=o.computeSourceURL(t.consumer.sourceRoot,l,this._sourceMapURL);this._sources.add(l);l=this._sources.indexOf(l);var c=null;if(u.name){c=t.consumer._names.at(u.name);this._names.add(c);c=this._names.indexOf(c)}var p={source:l,generatedLine:u.generatedLine+(t.generatedOffset.generatedLine-1),generatedColumn:u.generatedColumn+(t.generatedOffset.generatedLine===u.generatedLine?t.generatedOffset.generatedColumn-1:0),originalLine:u.originalLine,originalColumn:u.originalColumn,name:c};this.__generatedMappings.push(p);if(typeof p.originalLine==="number"){this.__originalMappings.push(p)}}}s(this.__generatedMappings,o.compareByGeneratedPositionsDeflated);s(this.__originalMappings,o.compareByOriginalPositions)};t=IndexedSourceMapConsumer},341:(e,r,n)=>{var t=n(215);var o=n(983);var i=n(837).I;var a=n(740).H;function SourceMapGenerator(e){if(!e){e={}}this._file=o.getArg(e,"file",null);this._sourceRoot=o.getArg(e,"sourceRoot",null);this._skipValidation=o.getArg(e,"skipValidation",false);this._sources=new i;this._names=new i;this._mappings=new a;this._sourcesContents=null}SourceMapGenerator.prototype._version=3;SourceMapGenerator.fromSourceMap=function SourceMapGenerator_fromSourceMap(e){var r=e.sourceRoot;var n=new SourceMapGenerator({file:e.file,sourceRoot:r});e.eachMapping((function(e){var t={generated:{line:e.generatedLine,column:e.generatedColumn}};if(e.source!=null){t.source=e.source;if(r!=null){t.source=o.relative(r,t.source)}t.original={line:e.originalLine,column:e.originalColumn};if(e.name!=null){t.name=e.name}}n.addMapping(t)}));e.sources.forEach((function(t){var i=t;if(r!==null){i=o.relative(r,t)}if(!n._sources.has(i)){n._sources.add(i)}var a=e.sourceContentFor(t);if(a!=null){n.setSourceContent(t,a)}}));return n};SourceMapGenerator.prototype.addMapping=function SourceMapGenerator_addMapping(e){var r=o.getArg(e,"generated");var n=o.getArg(e,"original",null);var t=o.getArg(e,"source",null);var i=o.getArg(e,"name",null);if(!this._skipValidation){this._validateMapping(r,n,t,i)}if(t!=null){t=String(t);if(!this._sources.has(t)){this._sources.add(t)}}if(i!=null){i=String(i);if(!this._names.has(i)){this._names.add(i)}}this._mappings.add({generatedLine:r.line,generatedColumn:r.column,originalLine:n!=null&&n.line,originalColumn:n!=null&&n.column,source:t,name:i})};SourceMapGenerator.prototype.setSourceContent=function SourceMapGenerator_setSourceContent(e,r){var n=e;if(this._sourceRoot!=null){n=o.relative(this._sourceRoot,n)}if(r!=null){if(!this._sourcesContents){this._sourcesContents=Object.create(null)}this._sourcesContents[o.toSetString(n)]=r}else if(this._sourcesContents){delete this._sourcesContents[o.toSetString(n)];if(Object.keys(this._sourcesContents).length===0){this._sourcesContents=null}}};SourceMapGenerator.prototype.applySourceMap=function SourceMapGenerator_applySourceMap(e,r,n){var t=r;if(r==null){if(e.file==null){throw new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, "+'or the source map\'s "file" property. Both were omitted.')}t=e.file}var a=this._sourceRoot;if(a!=null){t=o.relative(a,t)}var u=new i;var s=new i;this._mappings.unsortedForEach((function(r){if(r.source===t&&r.originalLine!=null){var i=e.originalPositionFor({line:r.originalLine,column:r.originalColumn});if(i.source!=null){r.source=i.source;if(n!=null){r.source=o.join(n,r.source)}if(a!=null){r.source=o.relative(a,r.source)}r.originalLine=i.line;r.originalColumn=i.column;if(i.name!=null){r.name=i.name}}}var l=r.source;if(l!=null&&!u.has(l)){u.add(l)}var c=r.name;if(c!=null&&!s.has(c)){s.add(c)}}),this);this._sources=u;this._names=s;e.sources.forEach((function(r){var t=e.sourceContentFor(r);if(t!=null){if(n!=null){r=o.join(n,r)}if(a!=null){r=o.relative(a,r)}this.setSourceContent(r,t)}}),this)};SourceMapGenerator.prototype._validateMapping=function SourceMapGenerator_validateMapping(e,r,n,t){if(r&&typeof r.line!=="number"&&typeof r.column!=="number"){throw new Error("original.line and original.column are not numbers -- you probably meant to omit "+"the original mapping entirely and only map the generated position. If so, pass "+"null for the original mapping instead of an object with empty or null values.")}if(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!r&&!n&&!t){return}else if(e&&"line"in e&&"column"in e&&r&&"line"in r&&"column"in r&&e.line>0&&e.column>=0&&r.line>0&&r.column>=0&&n){return}else{throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:r,name:t}))}};SourceMapGenerator.prototype._serializeMappings=function SourceMapGenerator_serializeMappings(){var e=0;var r=1;var n=0;var i=0;var a=0;var u=0;var s="";var l;var c;var p;var f;var g=this._mappings.toArray();for(var h=0,d=g.length;h<d;h++){c=g[h];l="";if(c.generatedLine!==r){e=0;while(c.generatedLine!==r){l+=";";r++}}else{if(h>0){if(!o.compareByGeneratedPositionsInflated(c,g[h-1])){continue}l+=","}}l+=t.encode(c.generatedColumn-e);e=c.generatedColumn;if(c.source!=null){f=this._sources.indexOf(c.source);l+=t.encode(f-u);u=f;l+=t.encode(c.originalLine-1-i);i=c.originalLine-1;l+=t.encode(c.originalColumn-n);n=c.originalColumn;if(c.name!=null){p=this._names.indexOf(c.name);l+=t.encode(p-a);a=p}}s+=l}return s};SourceMapGenerator.prototype._generateSourcesContent=function SourceMapGenerator_generateSourcesContent(e,r){return e.map((function(e){if(!this._sourcesContents){return null}if(r!=null){e=o.relative(r,e)}var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)};SourceMapGenerator.prototype.toJSON=function SourceMapGenerator_toJSON(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};if(this._file!=null){e.file=this._file}if(this._sourceRoot!=null){e.sourceRoot=this._sourceRoot}if(this._sourcesContents){e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)}return e};SourceMapGenerator.prototype.toString=function SourceMapGenerator_toString(){return JSON.stringify(this.toJSON())};r.h=SourceMapGenerator},990:(e,r,n)=>{var t;var o=n(341).h;var i=n(983);var a=/(\r?\n)/;var u=10;var s="$$$isSourceNode$$$";function SourceNode(e,r,n,t,o){this.children=[];this.sourceContents={};this.line=e==null?null:e;this.column=r==null?null:r;this.source=n==null?null:n;this.name=o==null?null:o;this[s]=true;if(t!=null)this.add(t)}SourceNode.fromStringWithSourceMap=function SourceNode_fromStringWithSourceMap(e,r,n){var t=new SourceNode;var o=e.split(a);var u=0;var shiftNextLine=function(){var e=getNextLine();var r=getNextLine()||"";return e+r;function getNextLine(){return u<o.length?o[u++]:undefined}};var s=1,l=0;var c=null;r.eachMapping((function(e){if(c!==null){if(s<e.generatedLine){addMappingWithCode(c,shiftNextLine());s++;l=0}else{var r=o[u]||"";var n=r.substr(0,e.generatedColumn-l);o[u]=r.substr(e.generatedColumn-l);l=e.generatedColumn;addMappingWithCode(c,n);c=e;return}}while(s<e.generatedLine){t.add(shiftNextLine());s++}if(l<e.generatedColumn){var r=o[u]||"";t.add(r.substr(0,e.generatedColumn));o[u]=r.substr(e.generatedColumn);l=e.generatedColumn}c=e}),this);if(u<o.length){if(c){addMappingWithCode(c,shiftNextLine())}t.add(o.splice(u).join(""))}r.sources.forEach((function(e){var o=r.sourceContentFor(e);if(o!=null){if(n!=null){e=i.join(n,e)}t.setSourceContent(e,o)}}));return t;function addMappingWithCode(e,r){if(e===null||e.source===undefined){t.add(r)}else{var o=n?i.join(n,e.source):e.source;t.add(new SourceNode(e.originalLine,e.originalColumn,o,r,e.name))}}};SourceNode.prototype.add=function SourceNode_add(e){if(Array.isArray(e)){e.forEach((function(e){this.add(e)}),this)}else if(e[s]||typeof e==="string"){if(e){this.children.push(e)}}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)}return this};SourceNode.prototype.prepend=function SourceNode_prepend(e){if(Array.isArray(e)){for(var r=e.length-1;r>=0;r--){this.prepend(e[r])}}else if(e[s]||typeof e==="string"){this.children.unshift(e)}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)}return this};SourceNode.prototype.walk=function SourceNode_walk(e){var r;for(var n=0,t=this.children.length;n<t;n++){r=this.children[n];if(r[s]){r.walk(e)}else{if(r!==""){e(r,{source:this.source,line:this.line,column:this.column,name:this.name})}}}};SourceNode.prototype.join=function SourceNode_join(e){var r;var n;var t=this.children.length;if(t>0){r=[];for(n=0;n<t-1;n++){r.push(this.children[n]);r.push(e)}r.push(this.children[n]);this.children=r}return this};SourceNode.prototype.replaceRight=function SourceNode_replaceRight(e,r){var n=this.children[this.children.length-1];if(n[s]){n.replaceRight(e,r)}else if(typeof n==="string"){this.children[this.children.length-1]=n.replace(e,r)}else{this.children.push("".replace(e,r))}return this};SourceNode.prototype.setSourceContent=function SourceNode_setSourceContent(e,r){this.sourceContents[i.toSetString(e)]=r};SourceNode.prototype.walkSourceContents=function SourceNode_walkSourceContents(e){for(var r=0,n=this.children.length;r<n;r++){if(this.children[r][s]){this.children[r].walkSourceContents(e)}}var t=Object.keys(this.sourceContents);for(var r=0,n=t.length;r<n;r++){e(i.fromSetString(t[r]),this.sourceContents[t[r]])}};SourceNode.prototype.toString=function SourceNode_toString(){var e="";this.walk((function(r){e+=r}));return e};SourceNode.prototype.toStringWithSourceMap=function SourceNode_toStringWithSourceMap(e){var r={code:"",line:1,column:0};var n=new o(e);var t=false;var i=null;var a=null;var s=null;var l=null;this.walk((function(e,o){r.code+=e;if(o.source!==null&&o.line!==null&&o.column!==null){if(i!==o.source||a!==o.line||s!==o.column||l!==o.name){n.addMapping({source:o.source,original:{line:o.line,column:o.column},generated:{line:r.line,column:r.column},name:o.name})}i=o.source;a=o.line;s=o.column;l=o.name;t=true}else if(t){n.addMapping({generated:{line:r.line,column:r.column}});i=null;t=false}for(var c=0,p=e.length;c<p;c++){if(e.charCodeAt(c)===u){r.line++;r.column=0;if(c+1===p){i=null;t=false}else if(t){n.addMapping({source:o.source,original:{line:o.line,column:o.column},generated:{line:r.line,column:r.column},name:o.name})}}else{r.column++}}}));this.walkSourceContents((function(e,r){n.setSourceContent(e,r)}));return{code:r.code,map:n}};t=SourceNode},983:(e,r)=>{function getArg(e,r,n){if(r in e){return e[r]}else if(arguments.length===3){return n}else{throw new Error('"'+r+'" is a required argument.')}}r.getArg=getArg;var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;var t=/^data:.+\,.+$/;function urlParse(e){var r=e.match(n);if(!r){return null}return{scheme:r[1],auth:r[2],host:r[3],port:r[4],path:r[5]}}r.urlParse=urlParse;function urlGenerate(e){var r="";if(e.scheme){r+=e.scheme+":"}r+="//";if(e.auth){r+=e.auth+"@"}if(e.host){r+=e.host}if(e.port){r+=":"+e.port}if(e.path){r+=e.path}return r}r.urlGenerate=urlGenerate;function normalize(e){var n=e;var t=urlParse(e);if(t){if(!t.path){return e}n=t.path}var o=r.isAbsolute(n);var i=n.split(/\/+/);for(var a,u=0,s=i.length-1;s>=0;s--){a=i[s];if(a==="."){i.splice(s,1)}else if(a===".."){u++}else if(u>0){if(a===""){i.splice(s+1,u);u=0}else{i.splice(s,2);u--}}}n=i.join("/");if(n===""){n=o?"/":"."}if(t){t.path=n;return urlGenerate(t)}return n}r.normalize=normalize;function join(e,r){if(e===""){e="."}if(r===""){r="."}var n=urlParse(r);var o=urlParse(e);if(o){e=o.path||"/"}if(n&&!n.scheme){if(o){n.scheme=o.scheme}return urlGenerate(n)}if(n||r.match(t)){return r}if(o&&!o.host&&!o.path){o.host=r;return urlGenerate(o)}var i=r.charAt(0)==="/"?r:normalize(e.replace(/\/+$/,"")+"/"+r);if(o){o.path=i;return urlGenerate(o)}return i}r.join=join;r.isAbsolute=function(e){return e.charAt(0)==="/"||n.test(e)};function relative(e,r){if(e===""){e="."}e=e.replace(/\/$/,"");var n=0;while(r.indexOf(e+"/")!==0){var t=e.lastIndexOf("/");if(t<0){return r}e=e.slice(0,t);if(e.match(/^([^\/]+:\/)?\/*$/)){return r}++n}return Array(n+1).join("../")+r.substr(e.length+1)}r.relative=relative;var o=function(){var e=Object.create(null);return!("__proto__"in e)}();function identity(e){return e}function toSetString(e){if(isProtoString(e)){return"$"+e}return e}r.toSetString=o?identity:toSetString;function fromSetString(e){if(isProtoString(e)){return e.slice(1)}return e}r.fromSetString=o?identity:fromSetString;function isProtoString(e){if(!e){return false}var r=e.length;if(r<9){return false}if(e.charCodeAt(r-1)!==95||e.charCodeAt(r-2)!==95||e.charCodeAt(r-3)!==111||e.charCodeAt(r-4)!==116||e.charCodeAt(r-5)!==111||e.charCodeAt(r-6)!==114||e.charCodeAt(r-7)!==112||e.charCodeAt(r-8)!==95||e.charCodeAt(r-9)!==95){return false}for(var n=r-10;n>=0;n--){if(e.charCodeAt(n)!==36){return false}}return true}function compareByOriginalPositions(e,r,n){var t=strcmp(e.source,r.source);if(t!==0){return t}t=e.originalLine-r.originalLine;if(t!==0){return t}t=e.originalColumn-r.originalColumn;if(t!==0||n){return t}t=e.generatedColumn-r.generatedColumn;if(t!==0){return t}t=e.generatedLine-r.generatedLine;if(t!==0){return t}return strcmp(e.name,r.name)}r.compareByOriginalPositions=compareByOriginalPositions;function compareByGeneratedPositionsDeflated(e,r,n){var t=e.generatedLine-r.generatedLine;if(t!==0){return t}t=e.generatedColumn-r.generatedColumn;if(t!==0||n){return t}t=strcmp(e.source,r.source);if(t!==0){return t}t=e.originalLine-r.originalLine;if(t!==0){return t}t=e.originalColumn-r.originalColumn;if(t!==0){return t}return strcmp(e.name,r.name)}r.compareByGeneratedPositionsDeflated=compareByGeneratedPositionsDeflated;function strcmp(e,r){if(e===r){return 0}if(e===null){return 1}if(r===null){return-1}if(e>r){return 1}return-1}function compareByGeneratedPositionsInflated(e,r){var n=e.generatedLine-r.generatedLine;if(n!==0){return n}n=e.generatedColumn-r.generatedColumn;if(n!==0){return n}n=strcmp(e.source,r.source);if(n!==0){return n}n=e.originalLine-r.originalLine;if(n!==0){return n}n=e.originalColumn-r.originalColumn;if(n!==0){return n}return strcmp(e.name,r.name)}r.compareByGeneratedPositionsInflated=compareByGeneratedPositionsInflated;function parseSourceMapInput(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))}r.parseSourceMapInput=parseSourceMapInput;function computeSourceURL(e,r,n){r=r||"";if(e){if(e[e.length-1]!=="/"&&r[0]!=="/"){e+="/"}r=e+r}if(n){var t=urlParse(n);if(!t){throw new Error("sourceMapURL could not be parsed")}if(t.path){var o=t.path.lastIndexOf("/");if(o>=0){t.path=t.path.substring(0,o+1)}}r=join(urlGenerate(t),r)}return normalize(r)}r.computeSourceURL=computeSourceURL},596:(e,r,n)=>{n(341).h;r.SourceMapConsumer=n(327).SourceMapConsumer;n(990)},147:e=>{"use strict";e.exports=__nccwpck_require__(147)},17:e=>{"use strict";e.exports=__nccwpck_require__(17)}};var r={};function __nested_webpack_require_40199__(n){var t=r[n];if(t!==undefined){return t.exports}var o=r[n]={id:n,loaded:false,exports:{}};var i=true;try{e[n](o,o.exports,__nested_webpack_require_40199__);i=false}finally{if(i)delete r[n]}o.loaded=true;return o.exports}(()=>{__nested_webpack_require_40199__.nmd=e=>{e.paths=[];if(!e.children)e.children=[];return e}})();if(true)__nested_webpack_require_40199__.ab=__dirname+"/";var n={};(()=>{__nested_webpack_require_40199__(284).install()})();module.exports=n})();

/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(219);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(808);
var tls = __nccwpck_require__(404);
var http = __nccwpck_require__(685);
var https = __nccwpck_require__(687);
var events = __nccwpck_require__(361);
var assert = __nccwpck_require__(491);
var util = __nccwpck_require__(837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map