import Product from "../model/product.model";

const getProducts = async (req, res) => {
    let filter = {}
    const { title, category} = req.query
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)
    const start = Number((page - 1) * limit)
    const end = Number(page * limit)
    if (title) {
        filter = {
            ...filter,
            title: {
                $regex: title,
                $options: 'i'
            }
        }
    }
    if(category) {
        filter = {
            ...filter,
            category
        }
    }
    const productList = await Product.find(filter).limit(limit).skip(start)
    let pagination = {}
    pagination.totalRecords = await Product.countDocuments(filter)
    pagination.totalPages = Math.ceil(pagination.totalRecords / limit)
    pagination.next = end < pagination.totalRecords ? page + 1 : undefined
    pagination.previous = start > 0 ? page - 1 : undefined
    pagination.current = page
    pagination.limit = limit
    
    res.json({
        products: productList,
        pagination
    })
}

const getProductCategory = async(req, res) => {
    const productList = await Product.find()
    const list = productList?.reduce((acc, curr) => {
        if (acc.indexOf(curr.category) === -1) {
            acc.push(curr.category)
        }
        return acc
    }, [])
    res.send({categories: list})
}

const getProductDetail = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    res.json(product)
}


export {
    getProducts,
    getProductDetail,
    getProductCategory
}