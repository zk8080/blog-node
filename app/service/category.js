'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class CategoryService extends BaseService {
  async getCategoryList(obj) {
    const { page = 1, limit = 10, ...rest } = obj;
    const option = {
      select: { __v: 0 },
      page,
      limit,
    };
    const category = await this.getPageList(rest, option);
    return category;
  }
}

module.exports = CategoryService;
