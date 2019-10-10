'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentSchema = new Schema({
    article_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    create_time: { type: Date, default: Date.now },
  }, { autoIndex: true });

  return mongoose.model('Comment', CommentSchema);
};
