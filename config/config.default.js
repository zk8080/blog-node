/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569480962652_3309';

  // add your middleware config here
  config.middleware = [
    'error',
  ];

  config.codeMap = {
    '-1': '请求失败',
    200: '请求成功',
    401: '权限校验失败',
    403: 'Forbidden',
    404: 'URL资源未找到',
    422: '参数校验失败',
    500: '服务器错误',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1:27017/blog',
        options: {}, // 这个选项必须加上，不然会报错
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
