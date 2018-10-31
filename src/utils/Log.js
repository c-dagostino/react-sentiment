import debug from 'debug';

const { REACT_APP_ID: appId } = process.env;

const TRACE = 'trace';
const INFO = 'info';
const WARN = 'warn';
const ERROR = 'error';

const COLORS = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red'
};

class Log {
  generateMessage(level, message, source) {
    const namespace = `${appId}:${level}`;
    const createDebug = debug(namespace);

    createDebug.color = COLORS[level];
    return source ? createDebug(source, message) : createDebug(message);
  }

  trace(message, source) {
    return this.generateMessage(TRACE, message, source);
  }

  info(message, source) {
    return this.generateMessage(INFO, message, source);
  }

  warn(message, source) {
    return this.generateMessage(WARN, message, source);
  }

  error(message, source) {
    return this.generateMessage(ERROR, message, source);
  }
}

export default new Log();
