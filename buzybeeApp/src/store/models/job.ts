export interface ApiJob {
    jobs: [IJob]
}

export interface IJob {
    _id: string
    organizationName: string;
    position: string;
    applicationUrl: string;
    createdAt: Date;
    expirationAt: Date;
    isSponsored: boolean;
    website: string;
    longDescription: string;
    shortDescription: string;
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