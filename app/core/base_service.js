'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  // 公共的查询数组方法
  getList(query, select = null, opt, populate = []) {
    const Q = this.model.find(query, select, opt);
    // 判断是否有关联查询
    if (populate) {
      [].concat(populate).forEach(item => Q.populate(item));
    }
    return Q.exec();
  }
  // 公共的查询分页列表方法
  async getPageList(query, opt) {
    const data = await this.model.paginate(query, { ...opt, lean: true });
    // 将拿到的带分页的结果进行转换再抛出去
    return this.app.getDocsPaginationData(data);
  }
  // 查询单个数据
  getItem(query, select = null, opt, populate = []) {
    let Q = this.model.findOne(query, select, { ...opt, lean: true });
    if (populate) {
      [].concat(populate).forEach(item => {
        Q = Q.populate(item);
      });
    }
    return Q.exec();
  }

  // 公共的删除方法
  async deleteItem(query) {
    return this.model.remove(query);
  }

  // 根据id删除数据
  async deleteItemById(query) {
    return this.model.findByIdAndDelete(query).exec();
  }

  // 公共的增加方法
  async create(obj) {
    return this.model.create(obj);
  }
}

module.exports = BaseService;
