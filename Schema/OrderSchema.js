const mongoose = require("mongoose");


// Order Item Sub-Schema
const orderItemSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  image: {
    type: String,    
  },
  name: {
    type: String,
    required: true
  },  
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },  
  price: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  discount: {
    type: Number,
    required: true,
    min: 0
  },
  total: {
    type: Number,
    required: true,
    min: 0
  }
});

// Main Order Schema
const orderSchema = new mongoose.Schema({
    invoice_no: {
      type: String,      
    },
    customer_code: {
      type: String,
      required: true
    },
    customer_name: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['rough', 'ladger']
    },
    order_items: {
        type: [orderItemSchema],
        required: true,
        validate: {
          validator: function(v) {
            return v.length > 0;
          },
          message: 'At least one order item is required'
        }
    },
    sub_total: {
      type: Number,
      required: true,
      min: 0
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },
    net_total: {
      type: Number,
      required: true,
      min: 0
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create the model
  const Order = mongoose.model('Orders', orderSchema);
  
  module.exports = Order;