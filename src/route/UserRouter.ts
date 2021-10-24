import express from 'express'
import { deleteOneUsers, insertUser, selectAllUsers, selectOneUsers, updateUsers } from '../controller/UserController'
import User from '../model/User'

const app = express()
 
interface DataGet {
    id: number|undefined,
    nome: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

interface DataPost {
    nome: string,
    email: string
}

app.route('/')
    .get((req, res) => {
        const result = selectAllUsers()
        result.then((result) => {
            res.json(result)
        })
    })
    .post((req, res) => {
        const data:DataPost = req.body
        const user = new User(undefined ,data.nome, data.email, undefined, undefined)
        const result = insertUser(user.nome, user.email)
        result.then((result) => {
            res.send(result)
        })
    })

app.route('/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const result = selectOneUsers(id)
        result.then((result) => {
            res.json(result)
        })
    })
    .put((req, res) => {
        const id = parseInt(req.params.id)
        const data:DataPost = req.body
        const user = new User(undefined ,data.nome, data.email, undefined, undefined)
        const result = updateUsers(id, user.nome, user.email)
        result.then((result) => {
            res.send(result)
        })
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id)
        const result = deleteOneUsers(id)
        result.then((result) => {
            res.json(result)
        })
    })

export default app