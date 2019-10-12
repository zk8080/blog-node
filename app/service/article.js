'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class ArticleService extends BaseService {
  get model() {
    return this.ctx.model.Article;
  }
  async getArticleList(obj) {
    const { page = 1, limit = 10, ...rest } = obj;
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
    const article = await this.getPageList(rest, option);
    return article;
  }

}

module.exports = ArticleService;
