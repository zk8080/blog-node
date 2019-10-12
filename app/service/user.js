'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class UserService extends BaseService {
  get model() {
    return this.ctx.model.User;
  }
  async getUserList(obj) {
    const { page = 1, limit = 10, ...rest } = obj;
    const option = {
      select: { __v: 0 },
      page,
      limit,
    };
    const user = await this.getPageList(rest, option);
    return user;
  }
}

module.exports = UserService;
