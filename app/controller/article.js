'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticle() {
    const ctx = this.ctx;
    const articleList = await ctx.service.article.getArticleList(ctx.query);
    console.log(articleList, '-----articleList----');
    if (articleList) {
      ctx.success(articleList);
    } else {
      ctx.fail(undefined, '查询失败');
    }
  }

  async addArticle() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    await ctx.service.article.create(ctx.request.body);
    // ctx.body = result;
    ctx.success();
  }

  async deleteArticle() {
    const ctx = this.ctx;
    const result = await ctx.service.article.deleteItemById(ctx.query.id);
    console.log(result, '-----result----');
    if (result) {
      ctx.success(null, '删除成功！');
    } else {
      ctx.fail(undefined, '删除失败！');
    }
  }
}

module.exports = ArticleController;
