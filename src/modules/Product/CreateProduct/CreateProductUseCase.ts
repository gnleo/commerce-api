import { prisma } from "../../../database/prismaClient"

interface ICreateProduct {
    name: string
    price: number
    description: string
    category: string
    qtd: number
    id_store: string
}

export class CreateProductUseCase {
    async execute({ name, price, description, category, qtd, id_store }: ICreateProduct) {
        //verificar se o producto existe
        const productExist = await prisma.product.findFirst({
            where: {
                name
            }
        })

        if (productExist) {
            throw new Error("Product already exists!")
        }

        //verificar se o id_store é válido
        const storeExist = await prisma.store.findFirst({
            where: {
                id: id_store
            }
        })

        if (!storeExist) {
            throw new Error("Store invalid!")
        }

        const product = await prisma.product.create({
            data: {
                name,
                price,
                description,
                category,
                qtd,
                id_store
            }
        })

        return product
    }
}