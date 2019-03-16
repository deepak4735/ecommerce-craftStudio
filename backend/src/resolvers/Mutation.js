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
  },
  async signIn(parent, { email, password }, ctx, info) {
    // check if there is user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error('No such user found for email!');
    }
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }
    // generate jwt token
    const token = jtw.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // return the user
    return user;
  }
};

module.exports = Mutations;
