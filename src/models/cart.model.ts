import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem'
      }
    ],
    total_price: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
)
const CartModel = mongoose.model('Cart', CartSchema)

export default CartModel
