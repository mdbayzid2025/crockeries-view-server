const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category: {
      type: String,
      required: [true, 'Category name is required'],      
      trim: true,      
      minLength: [1, 'Category name cannot be empty'],
    },
    brands: {
      type: [String],
      default: [],
      validate: {
        validator: function(brands) {
          return Array.isArray(brands) && 
                 brands.every(brand => typeof brand === 'string');
        },
        message: 'Brands must be an array of strings'
      }
    }
  }, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
