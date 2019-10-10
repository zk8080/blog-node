'use strict';
const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getComment() {
    const ctx = this.ctx;
    console.log(ctx.query, '-------query------');
    const commentList = await ctx.service.comment.getCommentList(ctx.query);
    ctx.body = commentList;
  }

  async addComment() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.comment.addComment(ctx.request.body);
    ctx.body = result;
  }


  async deleteComment() {
    const ctx = this.ctx;
    console.log(ctx.request.body, '--------body--------');
    const result = await ctx.service.comment.removeComment(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = CommentController;
