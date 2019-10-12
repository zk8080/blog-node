'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user', controller.user.getUser);
  router.post('/addUser', controller.user.addUser);
  router.get('/deleteUser', controller.user.deleteUser);

  // 标签相关
  router.get('/tag', controller.tag.getTag);
  router.post('/addTag', controller.tag.addTag);
  router.post('/deleteTag', controller.tag.deleteTag);

  // 分类相关
  router.get('/category', controller.category.getCategory);
  router.post('/addCategory', controller.category.addCategory);
  router.post('/deleteCategory', controller.category.deleteCategory);

  // 文章相关
  router.get('/article', controller.article.getArticle);
  router.post('/addArticle', controller.article.addArticle);
  router.post('/deleteArticle', controller.article.deleteArticle);

  // 评论相关
  router.get('/comment', controller.comment.getComment);
  router.post('/addComment', controller.comment.addComment);
  router.post('/deleteComment', controller.comment.deleteComment);
};
