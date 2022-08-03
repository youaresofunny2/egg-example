/*
 * @Description: 
 * @Author: tujingfeng
 * @Date: 2022-08-02 11:38:23
 * @LastEditors: tujingfeng
 * @LastEditTime: 2022-08-02 15:47:05
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
    mysql:  {
        enable: true,
        package: 'egg-mysql',
    },
    cors: {
      enable:true,
      package:'egg-cors'
    }
};
