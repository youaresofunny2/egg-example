/*
 * @Description:
 * @Author: tujingfeng
 * @Date: 2022/8/2 15:09
 * @LastEditors: tujingfeng
 * @LastEditTime: 2022-08-03 16:45:13
 */
const Service = require('egg').Service;

class GoodsService extends Service {
    async searchAll() {
        // 获取商品列表
        const sonGoods = async (item)=>{
            const res = await this.app.mysql.query('select goods.* from goods inner join classify on goods.classify_id = classify.id where classify.id = ?',[item])
            return res
        }
        const list = []
        const res = await this.app.mysql.select('classify');
        for(let i = 0; i<res.length; i++){
            let son = await sonGoods(res[i].id)
            list.push({
                classify_name:res[i].classify_name,
                classify_id:res[i].id,
                son
            })
        }
        return { list };
    }
    async find(id) {
        //单独获取商品
        const goods = await this.app.mysql.get('goods',{id})
        return {goods}
    }
}

module.exports = GoodsService;