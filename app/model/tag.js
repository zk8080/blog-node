'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const TagSchema = new Schema({
    name: { type: String },
    create_time: { type: Date, default: Date.now },
  }, { autoIndex: true });

  return mongoose.model('Tag', TagSchema);
};
