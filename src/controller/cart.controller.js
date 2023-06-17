import Cart from "../model/cart.model"

const addToCart = async(req, res) => {
    const { productId } = req.body
    const { _id: userId} = req.user

    const isExist = await Cart.findOne({ productId, userId })
    let message, status
    if(!isExist) {
        await Cart.create({ productId, userId })
        message = 'Successfully Added in cart'
        status = 200
    } else {
        message = 'You have already added this item in cart'
        status = 400
    }
    res.status(status).send(message)
}

const getCart = async(req, res) => {
    const cartData = await Cart.find({ userId: req.user._id}).populate('productId')
    res.send(cartData)
}

const removeFromCart = async(req, res) => {
    const { productId } = req.body
    const cartData = await Cart.deleteOne({ productId, userId: req.user._id })
    res.send(cartData)
}

const ClearCart = async(req, res) => {
    // TODO clear cart based on member
    const cartData = await Cart.deleteMany({ userId: req.user._id })
    res.send({success: true})
}

export {
    addToCart,
    getCart,
    removeFromCart,
    ClearCart
}