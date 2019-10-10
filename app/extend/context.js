'use strict';

module.exports = {
  success(data = null, message) {
    const { codeMap } = this.app.config;
    const successMsg = message || codeMap[200];
    this.status = 200;
    this.body = {
      code: 200,
      success: true,
      successMsg,
      data,
    };
  },
  fail(code = -1, message = '', error = null) {
    // if (app.utils.validate.isString(code)) {
    //   error = message || null;
    //   message = code;
    //   code = -1;
    // }
    const { codeMap } = this.app.config;
    const failMsg = codeMap[-1];
    const body = {
      code,
      success: false,
      message: message || codeMap[code] || failMsg,
    };
    if (error) body.error = error;
    this.status = code === -1 ? 200 : code;
    this.body = body;
  },
};
