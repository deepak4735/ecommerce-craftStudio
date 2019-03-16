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
  }
};

module.exports = Query;
