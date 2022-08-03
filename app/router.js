/*
 * @Description: 
 * @Author: tujingfeng
 * @Date: 2022-08-02 11:38:23
 * @LastEditors: tujingfeng
 * @LastEditTime: 2022-08-02 15:41:52
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/goods/list',controller.goods.list);
  router.get('/goods/find', controller.goods.find);
};
