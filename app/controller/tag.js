'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getTag() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const tagList = await ctx.service.tag.getTagList(ctx.query);
    ctx.body = tagList;
  }

  async addTag() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.tag.addTag(ctx.request.body);
    ctx.body = result;
  }


  async deleteTag() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.tag.removeTag(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = CategoryController;
