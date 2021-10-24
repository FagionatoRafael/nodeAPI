import { Model } from "sequelize";
import UserTable from "../migration/UserTable";

export function selectAllUsers(): Promise<Model<any, any>[]> {
    return UserTable.findAll()
}

export function selectOneUsers(id:number): Promise<Model<any, any> | null> {
    return UserTable.findByPk(id)
}

export function insertUser(nome:string, email: string): Promise<Model<any, any>> {
    return UserTable.create({
        nome: nome,
        email: email
    })
}

export function updateUsers(idNu:number, nome:string, email:string): Promise<[number, Model<any, any>[]]> {
    return UserTable.update(
        {
            nome: nome,
            email: email
        },
        {
            where: {
                id: idNu
            }
        }
    )
}

export function deleteOneUsers(id:number): Promise<number> {
    return UserTable.destroy({
        where: {
            id: id
        }
    })
}
