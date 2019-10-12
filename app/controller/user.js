'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUser() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const userList = await ctx.service.user.getUserList(ctx.query);
    // ctx.body = userList;
    if (userList) {
      ctx.success(userList);
    } else {
      ctx.fail(undefined, '查询失败！');
    }
  }

  async addUser() {
    const ctx = this.ctx;
    const { userName } = ctx.request.body;
    const user = await ctx.service.user.getItem({ userName });
    if (user) {
      return ctx.fail(undefined, '该用户已存在！');
    }
    const result = await ctx.service.user.create(ctx.request.body);
    if (result) {
      ctx.success(null, '新增成功！');
    } else {
      ctx.fail(undefined, '新增失败！');
    }
  }

  async deleteUser() {
    const ctx = this.ctx;
    const result = await ctx.service.user.deleteItemById(ctx.query.id);
    console.log(result, '-----result----');
    if (result) {
      ctx.success(null, '删除成功！');
    } else {
      ctx.fail(undefined, '删除失败！');
    }
  }
}

module.exports = UserController;
