import { Schema, model } from 'mongoose';

interface IJob {
    _id: string
    organizationName: string;
    position: string;
    applicationUrl: string;
    createdAt: Date;
    expirationAt: Date;
    isSponsored: boolean;
    website: string;
    shortDescription: string;
    longDescription: string;
    address: IAddress;
    contact: IContact;
    salary: ISalary;
    social: ISocial;
}

interface ISocial {
    _id: string
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
}

interface ISalary {
    _id: string
    min: number,
    max: number
}

interface IAddress {
    _id: string
    street1: string
    street2: string
    city: string
    state: string
    zip: string
}

interface IContact {
    _id: string
    name: string
    phone: string
    email: string 
}

const salarySchema = new Schema<ISalary>({
    _id: {type: String, required: true},
    min: {type: Number, required: true},
    max: {type: Number, required: false}
})

const contactSchema = new Schema<IContact>({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: false},
    email: {type: String, required: true}
})

const addressSchema = new Schema<IAddress>({
    _id: {type: String, required: true},
    street1: {type: String, required: true},
    street2: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true},
})

const socialSchema = new Schema<ISocial>({
    _id: {type: String, required: true},
    facebook: {type: String, required: false},
    twitter: {type: String, required: false},
    instagram: {type: String, required: false},
    linkedIn: {type: String, required: false}
})

const schema = new Schema<IJob>({
    _id: {type: String, required: true},
    organizationName: { type: String, required: true },
    position: { type: String, required: true },
    applicationUrl: { type: String, required: false },
    createdAt: { type: Date, required: true },
    expirationAt: { type: Date, required: true },
    isSponsored: { type: Boolean, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    address: { type: addressSchema },
    contact: { type: contactSchema },
    salary: { type: salarySchema },
    social: { type: socialSchema },
});


export const Job = model<IJob>('Job', schema)

