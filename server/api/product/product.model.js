'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './product.events';

var ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String
});

registerEvents(ProductSchema);
export default mongoose.model('Product', ProductSchema);
