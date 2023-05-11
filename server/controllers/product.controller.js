const ProductModel = require("../models/product.model")

// module.exports ={
//     // CREATE

//     createShow: async (req,res) => {
//         Show.create(req.body)
//         .then(newShow => res.status(201).json(newShow))
//         .catch(err => res.status(400).json(err));
//         // .catch(err => res.json(err)));
//     },
//     // READ
//     getAllShows: (req,res) => {
//         Show.find()
//         .then(allShows => res.json(allShows))
//         .catch(err => res.json(err));
//     },
//     // READ ONE
//     getOneShow: (req,res) =>{
//         // console.log(req)
//         // Show.findById(req.params.id)
//         Show.findOne({_id:req.params.id})
//             .then(oneShow => res.json(oneShow))
//             .catch(err => res.json(err));
//     },

//     // UPDATE
//     updateShow: (req,res) =>{
//         Show.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
//             .then(updatedShow => res.json(updatedShow))
//             .catch(err => res.json(err));
//     },
//     // DELETE

//     deleteShow: (req,res) => {
//         Show.findByIdAndDelete(req.params.id)
//             .then(deletedShow => res.json(deletedShow))
//             .catch(err => res.json(err));
//     }
// }
// module.exports.index = (req,res)=>{
//     res.json({
//         message: "Hello World Navid is the best"
// });
// }

module.exports = {
    //creat product
    createProduct: (req, res) => {
        ProductModel.create(req.body)
            .then(newProduct => res.status(201).json(newProduct))
            .catch(err => res.status(400).json(err))
    },

    //display product
    getOneProduct: (req, res) => {
        ProductModel.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    //list of all products
    getAllProducts: (req, res) => {
        ProductModel.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err));
    }



}

/* The method below is new */
//  module.exports.createPerson = (request, response) => {
//     // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
//     // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
//     Person.create(request.body) //This will use whatever the body of the client's request sends over
//         .then(person => response.json(person))
//         .catch(err => response.json(err));
