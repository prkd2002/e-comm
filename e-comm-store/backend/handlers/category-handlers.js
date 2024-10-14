const Category = require("../db/category");

async function addCategory(model)
{

    let category = new Category(
        {
            name: model.name
        }
    );

    await category.save();
    return category.toObject();
}


async function updateCategory(id, model)
{
    await Category.findOneAndUpdate({_id:id}, model);
    


}


async function deleteCategory(id) {
    await Category.findByIdAndDelete(id);
    
}


async function getCategories(params) {
    let categories = await Category.find();
    return categories.map(category => category.toObject());
    
}


async function getCategoryById(id)
{
    let category = await Category.findById(id);
    return category.toObject();

}
module.exports = {addCategory, updateCategory, deleteCategory, getCategories, getCategoryById};