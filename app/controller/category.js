'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getCategory() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const categoryList = await ctx.service.category.getCategoryList(ctx.query);
    if (categoryList) {
      ctx.success(categoryList);
    } else {
      ctx.fail(undefined, '查询失败！');
    }
  }

  async addCategory() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const category = await ctx.service.category.getItem({ name });
    if (category) {
      return ctx.fail(undefined, '该分类已存在！');
    }
    const result = await ctx.service.category.create(ctx.request.body);
    if (result) {
      ctx.success(null, '新增成功！');
    } else {
      ctx.fail(undefined, '新增失败！');
    }
  }


  async deleteCategory() {
    const ctx = this.ctx;
    const result = await ctx.service.category.deleteItemById(ctx.query.id);
    console.log(result, '-----result----');
    if (result) {
      ctx.success(null, '删除成功！');
    } else {
      ctx.fail(undefined, '删除失败！');
    }
  }
}

module.exports = CategoryController;
