const Brand = require("../db/brand");
const Category = require("../db/category");

async function getAllBrand()
{
    let brands = await Brand.find();
    return brands.map(brand => brand.toObject());
}


async function getBrandById(id){
    let brand = await Brand.findById(id);
    return brand.toObject();

}

async function addBrand(model)
{
    let brand = new Brand({
        name:model.name
    });
    await brand.save();
    return brand.toObject();

}


async function updateBrand(id, model) {
    let brand = await Brand.findOneAndUpdate({_id:id}, model);
    
}


async function deleteBrand(id){
    return await Brand.findByIdAndDelete(id);
}


module.exports = {getAllBrand, getBrandById, addBrand, updateBrand, deleteBrand}