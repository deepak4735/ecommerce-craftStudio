const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const slugify = require('slugify');
const { forwardTo } = require('prisma-binding');

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
          permissions: { set: ['USER'] }
        }
      },
      info
    );
    // create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // set the jwt as a cookie on the res
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });

    return user;
  },
  async signIn(parent, { email, password }, ctx, info) {
    // 1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 5. Return the user
    return user;
  },
  signOut(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
  async requestReset(parent, args, ctx, info) {
    // 1. Check if real user
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error('No user found for email');
    }
    // 2. set a reset token an expiry for user
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    console.log(res);
    return { message: 'Thanks!' };
    // 3. email them that reset toke
  },
  async resetPassword(parent, args, ctx, info) {
    // 1. check if password match
    if (args.password !== args.confirmedPassword) {
      throw new Error('Password does not match!');
    }
    // 2. check if its a legit reset token
    // 3. check if expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error('This token is either invalid or expired');
    }
    // 4. hash the new password
    const password = await bcrypt.hash(args.password, 10);
    // 5. save the new password to the user and remove reset token
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    // 6. generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // 7. set the JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    // 8. return the new user
    return updatedUser;
  },
  async createProduct(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    const slug = slugify(args.title, { lower: true });

    const product = await ctx.db.mutation.createProduct(
      {
        data: {
          ...args,
          slug,
          productImages: args.productImages
        }
      },
      info
    );

    return product;
  },
  async deleteProduct(parent, args, ctx, info) {
    const where = { id: args.id };
    return ctx.db.mutation.deleteProduct(
      {
        where
      },
      info
    );
  },
  async updateProduct(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    // TODO: Implement some logic for updating and adding pictures
    const productId = args.id;
    const { title, description, price, available } = args;
    const updatedSlug = slugify(args.title, {
      lower: true
    });
    const updatedProduct = await ctx.db.mutation.updateProduct(
      {
        data: {
          title,
          slug: updatedSlug,
          description,
          price,
          available
        },
        where: {
          id: productId
        }
      },
      info
    );
    return updatedProduct;
  },
  async createCategory(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    const categorySlug = slugify(args.name, {
      lower: true
    });

    const category = await ctx.db.mutation.createCategory({
      data: {
        ...args,
        slug: categorySlug
      }
    });

    return category;
  },
  async updateCategory(parent, args, ctx, info) {
    if (args.name !== undefined) {
      const updatedCategorySlug = slugify(args.name, {
        lower: true
      });

      const updatedCategory = await ctx.db.mutation.updateCategory({
        data: {
          name: args.name,
          description: args.description,
          slug: updatedCategorySlug
        },
        where: {
          id: args.id
        },
        info
      });

      return updatedCategory;
    } else {
      const category = await ctx.db.query.category({
        where: {
          id: args.id
        }
      });

      const updatedCategorySlug = slugify(category.name, {
        lower: true
      });

      const updatedCategory = await ctx.db.mutation.updateCategory({
        data: {
          name: args.name,
          description: args.description,
          slug: updatedCategorySlug
        },
        where: {
          id: args.id
        },
        info
      });

      return updatedCategory;
    }
  },
  async deleteCategory(parent, args, ctx, info) {
    const deleteCategory = await ctx.db.mutation.deleteCategory({
      where: {
        id: args.id
      },
      info
    });

    return deleteCategory;
  },
  async deleteManyCategories(parent, args, ctx, info) {
    console.log(args);
    const deleteManyCategories = await ctx.db.mutation.deleteManyCategories({
      where: {
        id_in: [...args.id_in]
      },
      info
    });

    return deleteManyCategories;
  },
  async createProductType(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    console.log(args);

    const productType = await ctx.db.mutation.createProductType({
      data: {
        ...args
      },
      info
    });

    return productType;
  },
  async updateProductType(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    console.log(args);

    const updateProductType = await ctx.db.mutation.updateProductType({
      data: {
        name: args.name,
        shippingRequired: args.shippingRequired,
        hasVariants: args.hasVariants,
        weight: args.weight,
        taxes: args.taxes
      },
      where: {
        id: args.id
      },
      info
    });

    return updateProductType;
  },
  async createProductTypeAttribute(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    console.log(args);

    const attribute = await ctx.db.mutation.createAttribute({
      data: {
        ...args,
        productType: args.productType
      },
      info
    });

    return attribute;
  },

  async updateProductTypeAttribute(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that');
    // }

    console.log(args.attributeValues);

    const updatedAttribute = await ctx.db.mutation.updateAttribute({
      data: {
        attributeName: args.attributeName,
        attributeValues: args.attributeValues
      },
      where: {
        id: args.id
      },
      info
    });

    return updatedAttribute;
  },
  async deleteAttribute(parent, args, ctx, info) {
    const deleteAttribute = await ctx.db.mutation.deleteAttribute(
      {
        where: {
          id: args.id
        }
      },
      info
    );

    return deleteAttribute;
  },
  async deleteAttributeValue(parent, args, ctx, info) {
    const deleteAttributeValue = await ctx.db.mutation.deleteAttributeValue(
      {
        where: {
          id: args.id
        }
      },
      info
    );

    return deleteAttributeValue;
  }
};

module.exports = Mutations;
