const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v && v.trim().split(/\s+/).length >= 3;
        },
        message: "Name must contain at least 3 words"
      }
    },

    company: {
      type: String
    },

    email: {
      type: String
    },

    whatsapp: {
      type: String,
      validate: {
        validator: function (v) {
          // supports international format like +923001234567
          return /^(\+?\d{10,15})$/.test(v);
        },
        message: "Invalid WhatsApp number format"
      }
    },

    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(\+?\d{10,15})$/.test(v);
        },
        message: "Invalid phone number format"
      }
    },

    city: {
      type: String
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "interested",
        "not_interested",
        "follow_up",
        "qualified",
        "closed",
        "lost"
      ],
      default: "new",
      required: true
    },

    source: {
      type: String
    },

    notes: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v && v.trim().split(/\s+/).length >= 3;
        },
        message: "Notes must contain at least 3 words"
      }
    }
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);