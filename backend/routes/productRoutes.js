import express from 'express'
import asyncHandler from 'express-async-handler'
import { getProducts, getProductById } from '../controllers/productController.js'
const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
// router.get('/:id',asyncHandler( async(req,res)=>{
//     if(mongoose.Types.ObjectId.isValid(req.params.id)){
//     const product= await Product.findById(req.params.id)
//     if(product){
//        res.json(product)
//    } else{
//         res.status(404).json({message:'Product not found'})
//    }
// }else{
//     res.status(404).json({message:'Product not found'})
// }
// }))

// router.get('/:id',asyncHandler( async(req,res)=>{
//     const product= await Product.findById(req.params.id)
//     if(product){
//        res.json(product)
//     }else{
//         res.status(404)
//         throw new Error('Product not Found')
//    }
//  }
// ))

