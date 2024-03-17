import productModel from "../models/productModel.js";
import fs from 'fs';
import slugify from 'slugify';
export const createProductController = async (req,res) => {
    try{
        const {name,slug,description,price,category,quantity,shipping}= req.fields
        const {photo} = req.files
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size > 1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1mb'})
                    
        }
        const products = new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message: "Product Created Successfully",
            products,
        });
    } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        });
    }
};

//get all products
export const getProductController = async (req ,res) => {
    try{
        const products = await productModel.find({}).populate("category").select("-photo").limit(12).sort({createdAt:-1});
        res.status(200).send({
            success:true,
            totalCount: products.length,
            message:"AllProducts",
            products,
        });
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in getting products',
            error:error.message
        });
    }
};

//get single product
export const getSingleProductController = async(req,res) => {
    try{
        const product = await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category");
        res.status(200).send({
            success: true,
            message: "Single Product Fetched",
            product,
        });
    } catch(error){
        console.log(error),
        res.status(500).send({
            success:false,
            message:'Error while getting single product',
            error
        })
    }
};

//get photo
export const productPhotoController = async (req,res) => {
    try{
        const product = await productModel.findById(req.params.pid).select("photo")
        if(product.photo.data){
            res.set('Content-type',product.photo.contentType)
            return res.status(200).send(product.photo.data);
        }
    } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error while getting photo',
            error
        });
    }
};

//delete product
export const deleteProductController = async(req,res) => {
    try{
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success:true,
            message:'Product Deleted Successfully'
        })
    } catch(error){
        console.log(error),
        res.status(500).send({
            success:false,
            message:'Error in deleting product',
            error
        });

    }
};

//update product
export const updateProductController = async(req,res) => {
    try{
        const {name,slug,description,price,category,quantity,shipping}= req.fields
        const {photo} = req.files
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size > 1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1mb'})
                    
        }
        const products = await productModel.findByIdAndUpdate(req.params.pid,
            {...req.fields,slug:slugify(name)},{new:true}
            )
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message: "Product Updated Successfully",
            products,
        });
    } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in updating product'
        });
    }
};

//filters
export const productFiltersController = async(req,res) => {
    try{
        const {checked,radio} = req.body
        let args = {}
        if(checked.length > 0) args.category = checked
        if(radio.length) args.price = {$gte: radio[0],$lte :radio[1]};
        const products = await productModel.find(args);
        res.status(200).send({
            success:true,
            products,
        });
    } catch(error){
        console.log(error)
        res.status(400).send({
            success:false,
            message:"Error while Filtering Products",
            error
        });
    }
};

//product count
export const productCountController = async () => {
    try{
        const total = await productModel.find({}).estimatedDocumentCount();
        res.status(200).send({
            success:true,
            total,
        });
    } catch(error){
        console.log(error)
        res.status(400).send({
            message:'Error in product count',
            error,
            success:false
        })
    }
}