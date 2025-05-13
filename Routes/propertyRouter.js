
const { getProperties, getSingleProperty, addProperty, postComment, bookingProperty, getAllBookedProperties } = require("../controllers/PropertyController")

const propertyRouter =  require("express").Router()


propertyRouter.get("/",  getProperties)
propertyRouter.get("/:id", getSingleProperty)
propertyRouter.get("/booking", getAllBookedProperties)

propertyRouter.post("/:id/comments",  postComment)
propertyRouter.post("/:id",  bookingProperty)
propertyRouter.post("/", addProperty)


module.exports = propertyRouter;
