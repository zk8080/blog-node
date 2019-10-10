'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserList(obj) {
    const user = await this.ctx.model.User.find(obj, { __v: 0 });
    return { user };
  }

  async addUser(obj) {
    const user = await this.ctx.model.User.create(obj);
    console.log(user, '----user---');
    return {
      code: '200',
      message: '添加成功！',
    };
  }

  async editUser(obj) {
    const user = await this.ctx.model.User.update({ _id: obj._id }, obj);
    console.log(user, '----user---');
    return {
      code: '200',
      message: '修改成功！',
    };
  }

  async removeUser(obj) {
    const user = await this.ctx.model.User.remove({ userName: { $in: obj.userName } });
    console.log(user, '----user---');
    return {
      code: '200',
      message: '删除成功！',
    };
  }
}

module.exports = UserService;
