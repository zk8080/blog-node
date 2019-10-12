'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class CommentService extends BaseService {
  get model() {
    return this.ctx.model.Comment;
  }
  async getCommentList(obj) {
    const { page = 1, limit = 10, ...rest } = obj;
    const option = {
      select: { __v: 0 },
      page,
      limit,
    };
    const comment = await this.getPageList(rest, option);
    return comment;
  }

  async addComment(obj) {
    console.log(obj, '-------obj-----');
    const ctx = this.ctx;
    const comment = await ctx.model.Comment.create(obj);
    console.log(comment, '----comment---');
    if (comment._id) {
      const curArticle = await ctx.model.Article.findOne({ _id: comment.article_id });
      console.log(curArticle, '---curArticle---');
      curArticle.comments.push(comment._id);
      const newArticle = await ctx.model.Article.updateOne({ _id: curArticle._id }, { comments: curArticle.comments });
      console.log(newArticle, '-----newArticle-----');
    }
    return {
      code: '200',
      message: '添加成功！',
    };
  }

  async removeComment(obj) {
    console.log(obj._id, '------obj._id----');
    const comment = await this.ctx.model.Comment.remove({ _id: { $in: obj._id } });
    console.log(comment, '----comment---');
    return {
      code: '200',
      message: '删除成功！',
    };
  }
}

module.exports = CommentService;
