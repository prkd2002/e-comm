const express = require('express');
const { addBrand, updateBrand, deleteBrand, getAllBrand, getBrandById } = require('../handlers/brand-handler');
const router =  express.Router();

router.post("",async  (req, res) => {
    let result =  await addBrand(req.body);
    res.send(result);
});

router.put("/update/:id", async (req, res) => {
    let id = req.params['id'];
    let result = await updateBrand(id, req.body);
    res.send({
        message: "Der Brand wurde aktualisiert"
    });

});


router.delete("/delete/:id", async (req,res) => {
    let id = req.params['id'];
    await deleteBrand(id);
    res.send({
        message: "Der Brand wurde problemlos entfernt"
    });
});


router.get("/allBrand", async (req, res) =>{
    let result = await getAllBrand();
    res.send(result);
});

router.get("/:id", async (req, res) => {
    let id = req.params['id'];
    let result = await getBrandById(id);
    res.send(result);
});

module.exports = router;



