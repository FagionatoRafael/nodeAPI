class User {
    constructor(
        private _id: number|undefined, 
        private _nome:string, 
        private _email:string, 
        private _createdAt:Date|undefined, 
        private _updatedAt:Date|undefined
    ) {}

    public get id():number|undefined {
        return this._id
    }

    public get nome():string {
        return this._nome
    }

    public get email():string {
        return this._email
    }

    public get createdAt():Date|undefined {
        return this._createdAt
    }
    public get updatedAt():Date|undefined {
        return this._updatedAt
    }
    
}

export default User