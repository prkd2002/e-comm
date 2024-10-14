const express = require("express");
const router = express.Router();
const Category = require("../db/category");
const { updateCategory, addCategory, deleteCategory, getCategories, getCategoryById } = require("../handlers/category-handlers");


router.post("", async (req, res) => {
    let result = await addCategory(req.body);
    res.send(result);

});

router.put("/:id", async(req, res) => {
    let model = req.body;
    let id = req.params['id'];
    await updateCategory(id, model);
    res.send({
        message: "Category wurde aktualisiert"
    });


});


router.delete("/delete/:id", async (req, res) => {
    let id = req.params['id'];
    await deleteCategory(id);
    res.send(
        {
            message: "Der Category wurde problemlos entfernt"
        }
    );
});


router.get("/allCategories", async  (req, res) => {
    let categories = await  getCategories();
    res.send(categories);


});

router.get("/:id",async  (req, res) => {
    const id = req.params['id'];
 let result = await getCategoryById(id);
    res.send(result);
});


module.exports = router;