import mongoose from 'mongoose'

const { Schema } = mongoose

const cartSchema = new Schema(
  {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const CartModel = mongoose.model('Cart', cartSchema, 'carts')

export default CartModel
