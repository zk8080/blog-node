'use strict';

const Service = require('egg').Service;

class CategoryService extends Service {
  async getCategoryList(obj) {
    const category = await this.ctx.model.Category.find(obj, { __v: 0 });
    return { category };
  }

  async addCategory(obj) {
    const category = await this.ctx.model.Category.create(obj);
    console.log(category, '----category---');
    return {
      code: '200',
      message: '添加成功！',
    };
  }

  async removeCategory(obj) {
    console.log(obj._id, '------obj._id----');
    const category = await this.ctx.model.Category.remove({ _id: { $in: obj._id } });
    console.log(category, '----category---');
    return {
      code: '200',
      message: '删除成功！',
    };
  }
}

module.exports = CategoryService;
