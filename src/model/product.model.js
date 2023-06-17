import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    price: Number,
    category: String
  },
  {
    timestamps: true
  }
)

const ProductModel = mongoose.model('Product', productSchema, 'products')

export default ProductModel
