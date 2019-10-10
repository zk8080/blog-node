'use strict';
const mongoosePaginate = require('mongoose-paginate-v2');
const moment = require('moment');

module.exports = {
  initSchema(schema, options) {
    if (!schema) {
      return null;
    }
    schema.set('versionKey', false);
    schema.set('toObject', { getters: true, virtuals: false });
    schema.set('toJSON', { getters: true, virtuals: false });
    schema.add({
      // 创建日期
      createdAt: { type: Date, default: Date.now, get: v => moment(v).format('YYYY-MM-DD HH:mm') },
      // 更新日期
      updatedAt: { type: Date, default: Date.now, get: v => moment(v).format('YYYY-MM-DD HH:mm') },
    });
    if (options && options.paginate) {
      schema.plugin(mongoosePaginate);
    }
    return schema;
  },
  // 获取分页请求的响应数据
  getDocsPaginationData(docs) {
    if (!docs) return null;
    return {
      list: docs.docs,
      pageInfo: {
        totalCount: docs.totalDocs,
        page: docs.page,
        totalPages: docs.totalPages,
        limit: docs.limit,
      },
    };
  },
};
