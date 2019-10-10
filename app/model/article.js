'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: { type: String },
    content: { type: String },
    author: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    categorys: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  }, { autoIndex: true });

  return mongoose.model('Article', app.initSchema(ArticleSchema, { paginate: true }));
};
