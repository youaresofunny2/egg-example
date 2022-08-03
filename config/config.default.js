/*
 * @Description: 
 * @Author: tujingfeng
 * @Date: 2022-08-02 11:38:23
 * @LastEditors: tujingfeng
 * @LastEditTime: 2022-08-02 15:49:14
 */
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
  config.keys = appInfo.name + '_1659411320436_114';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf:{
      enable:false
    },
    domainWhiteList:['*']
  }
  config.cors = {
    origin:'*',
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '1234',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
    mysql
  };
};
