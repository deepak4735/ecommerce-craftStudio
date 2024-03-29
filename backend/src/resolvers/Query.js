const { forwardTo } = require('prisma-binding');

const Query = {
  async users(parent, args, ctx, info) {
    const users = await ctx.db.query.users();
    return users;
  },
  currentUser(parent, agrs, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  products: forwardTo('db'),

  productImages: forwardTo('db'),

  productTypes: forwardTo('db'),

  productType: forwardTo('db'),

  attributes: forwardTo('db'),

  categories: forwardTo('db'),

  category: forwardTo('db'),

  stockLocations: forwardTo('db'),

  stockLocation: forwardTo('db'),

  taxes: forwardTo('db'),

  tax: forwardTo('db')
};

module.exports = Query;
