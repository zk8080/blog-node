'use strict';

// const Service = require('egg').Service;
const BaseService = require('../core/base_service');

class TagService extends BaseService {
  async getTagList(obj) {
    const { page = 1, limit = 10, ...rest } = obj;
    const option = {
      select: { __v: 0 },
      page,
      limit,
    };
    const Tag = await this.getPageList(rest, option);
    return Tag;
  }

  //   async addTag(obj) {
  //     const tag = await this.ctx.model.Tag.create(obj);
  //     console.log(tag, '----tag---');
  //     return {
  //       code: '200',
  //       message: '添加成功！',
  //     };
  //   }

//   async removeTag(obj) {
//     console.log(obj._id, '------obj._id----');
//     const tag = await this.ctx.model.Tag.remove({ _id: { $in: obj._id } });
//     console.log(tag, '----tag---');
//     return {
//       code: '200',
//       message: '删除成功！',
//     };
//   }
}

module.exports = TagService;
