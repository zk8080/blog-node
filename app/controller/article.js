'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticle() {
    const ctx = this.ctx;
    const articleList = await ctx.service.article.getArticleList(ctx.query);
    console.log(articleList, '-----articleList----');
    ctx.success(articleList);
  }

  async addArticle() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.article.addArticle(ctx.request.body);
    ctx.body = result;
  }


  async deleteArticle() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.article.removeArticle(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = ArticleController;
