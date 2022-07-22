const PetController = require("../controllers/pet.controllers")

module.exports = (app) =>{
    app.get("/hello", PetController.helloWorld);

    app.get("/api", PetController.showAllPets);
    app.post("/api/pets", PetController.createOne);
    app.get("/api/pets/:id", PetController.findOne)
    app.put("/api/pets/:id", PetController.updateOne)
    app.delete("/api/pets/:id", PetController.deleteOne)
}
