import mongoose, { Document, Schema, ObjectId } from "mongoose";

interface IAddress {
  campus?: string;
  hostel?: string;
  city: string;
  address?: string;
}

interface IDocuments {
  student_id?: string;
  national_id: string;
}

const documentSchema = new Schema<IDocuments>({
  student_id: {
    type: String,
  },
  national_id: {
    type: String,
  },
});
const addressSchema = new Schema<IAddress>({
  campus: String,
  hostel: String,
  city: String,
  address: String,
});

export interface IVendorSchema extends Document {
  phone?: string;
  name: string;
  email: string;
  user: ObjectId;
  address: IAddress;
  documents: IDocuments;
}

const vendorSchema = new Schema<IVendorSchema>({
  phone: {
    type: String,
    required: true,
  },

  name: {
    type: String,

    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: { type: addressSchema },
  documents: {
    type: documentSchema,
  },
  user: { type: mongoose.SchemaTypes.ObjectId },
});

vendorSchema.index({ "$**": "text" });

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);

export default Vendor;
