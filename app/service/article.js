'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class ArticleService extends BaseService {
  get model() {
    return this.ctx.model.Article;
  }
  async getArticleList(obj) {
    const { page, limit, ...rest } = obj;
    const option = {
      select: { __v: 0 },
      page,
      limit,
      populate: [
        { path: 'tags' },
        { path: 'comments' },
        { path: 'categorys' },
      ],
    };
    console.log(rest, '-----rest-------');
    const article = await this.getPageList(rest, option);
    return article;
  }

  async addArticle(obj) {
    const article = await this.ctx.model.Article.create(obj);
    console.log(article, '----article---');
  }

  async removeArticle(obj) {
    console.log(obj._id, '------obj._id----');
    const article = await this.ctx.model.Article.remove({ _id: { $in: obj._id } });
    console.log(article, '----article---');
    return {
      code: '200',
      message: '删除成功！',
    };
  }
}

module.exports = ArticleService;
