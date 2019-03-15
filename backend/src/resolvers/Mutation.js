const bcrypt = require('bcryptjs');
const jtw = require('jsonwebtoken');

const Mutations = {
  async createUser(parent, args, ctx, info) {
    // lowercase email to ensure consistency
    args.email = args.email.toLowerCase();

    // hash password
    const password = await bcrypt.hash(args.password, 10);

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['ADMIN'] }
        }
      },
      info
    );
    // create JWT token
    const token = jtw.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the jwt as a cookie on the res
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
  }
};

module.exports = Mutations;
