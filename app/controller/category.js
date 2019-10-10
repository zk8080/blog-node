'use strict';
const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getCategory() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const categoryList = await ctx.service.category.getCategoryList(ctx.query);
    ctx.body = categoryList;
  }

  async addCategory() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.category.addCategory(ctx.request.body);
    ctx.body = result;
  }


  async deleteCategory() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.category.removeCategory(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = CategoryController;
