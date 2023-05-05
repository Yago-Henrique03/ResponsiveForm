import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';


const app = Fastify()

app.get('/hello', () => {
	return `Hello World`
})
app.listen({
    port: 3333,
})

.then( () => {
    console.log('Http Server running')
})

import cors from '@fastify/cors'
const prisma = new PrismaClient()
app.register(cors)
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({
        where: {
           name: 'Yago Silva'
        }
    })
    return users
})
