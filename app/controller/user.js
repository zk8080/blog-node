'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUser() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const userList = await ctx.service.user.getUserList(ctx.query);
    // ctx.body = userList;
    ctx.success(userList);
  }

  async addUser() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.user.addUser(ctx.request.body);
    ctx.body = result;
  }

  async editUser() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.user.editUser(ctx.request.body);
    ctx.body = result;
  }

  async deleteUser() {
    const ctx = this.ctx;
    console.log(ctx.query, '--------body--------');
    const result = await ctx.service.user.removeUser(ctx.query);
    ctx.body = result;
  }
}

module.exports = UserController;
