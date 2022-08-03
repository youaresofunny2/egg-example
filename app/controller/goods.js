/*
 * @Description:
 * @Author: tujingfeng
 * @Date: 2022/8/2 14:45
 * @LastEditors: tujingfeng
 * @LastEditTime: 2022-08-03 13:55:02
 */
'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
    async list() {
        const { ctx } = this;
        try {
            const goodsList = await ctx.service.goods.searchAll();
            ctx.body = {
                code:200,
                data:goodsList
            }
            
        }catch (error){
            ctx.body = {
                code:404,
                error
            }
        }

    }
    async find() {
        const { ctx } = this;
        try {
            if (!ctx.query.id) throw new Error('缺少参数！');
            const goods = await ctx.service.goods.find(ctx.query.id);
            ctx.body = {
                success: true,
                data: goods
            };
        } catch (error) {
            ctx.body = {
                success: false,
                error
            };
        }
    }
}

module.exports = GoodsController;