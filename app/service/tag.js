'use strict';

const Service = require('egg').Service;

class TagService extends Service {
  async getTagList(obj) {
    const Tag = await this.ctx.model.Tag.find(obj, { __v: 0 });
    return { Tag };
  }

  async addTag(obj) {
    const tag = await this.ctx.model.Tag.create(obj);
    console.log(tag, '----tag---');
    return {
      code: '200',
      message: '添加成功！',
    };
  }

  async removeTag(obj) {
    console.log(obj._id, '------obj._id----');
    const tag = await this.ctx.model.Tag.remove({ _id: { $in: obj._id } });
    console.log(tag, '----tag---');
    return {
      code: '200',
      message: '删除成功！',
    };
  }
}

module.exports = TagService;
