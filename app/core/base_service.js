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
}

module.exports = BaseService;
