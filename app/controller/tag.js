'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getTag() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const tagList = await ctx.service.tag.getTagList(ctx.query);
    if (tagList) {
      ctx.success(tagList);
    } else {
      ctx.fail(undefined, '查询失败！');
    }
  }

  async addTag() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const tag = await ctx.service.tag.getItem({ name });
    if (tag) {
      return ctx.fail(undefined, '该标签已存在！');
    }
    const result = await ctx.service.tag.create(ctx.request.body);
    if (result) {
      ctx.success(null, '新增成功！');
    } else {
      ctx.fail(undefined, '新增失败！');
    }
  }


  async deleteTag() {
    const ctx = this.ctx;
    const result = await ctx.service.tag.deleteItemById(ctx.query.id);
    console.log(result, '-----result----');
    if (result) {
      ctx.success(null, '删除成功！');
    } else {
      ctx.fail(undefined, '删除失败！');
    }
  }
}

module.exports = CategoryController;
