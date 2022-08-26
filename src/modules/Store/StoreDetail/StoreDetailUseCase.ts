import { prisma } from "../../../database/prismaClient"

interface IStoreDetail {
    id: string
}

export class StoreDetailUseCase {
    async execute({ id }: IStoreDetail) {
        const store = await prisma.store.findMany({
            where: {
                id
            },
            select: {
                name: true,
                latitude: true,
                longitude: true,
                about: true,
                opening_hours: true,
                open_on_weekends: true,
                image: {
                    select: {
                        id: true,
                        path: true,
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        description: true,
                        category: true,
                        qtd: true,
                        image: {
                            select: {
                                id: true,
                                path: true
                            }
                        }
                    }
                }
            }
        })

        return store
    }
}