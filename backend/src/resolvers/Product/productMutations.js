const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const slugify = require('slugify');
const { forwardTo } = require('prisma-binding');

const ProductMutations = {
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
  }
};

module.exports = ProductMutations;
