'use strict';
const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getComment() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const commentList = await ctx.service.comment.getCommentList(ctx.query);
    if (commentList) {
      ctx.success(commentList);
    } else {
      ctx.fail(undefined, '查询失败！');
    }
  }

  async addComment() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.comment.create(ctx.request.body);
    if (result) {
      ctx.success(null, '新增成功！');
    } else {
      ctx.fail(undefined, '新增失败！');
    }
  }


  async deleteComment() {
    const ctx = this.ctx;
    const result = await ctx.service.comment.deleteItemById(ctx.query.id);
    if (result) {
      ctx.success(null, '删除成功！');
    } else {
      ctx.fail(undefined, '删除失败！');
    }
  }
}

module.exports = CommentController;
