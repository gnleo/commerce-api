import { prisma } from "../../../database/prismaClient";

export class StoreListUseCase {
    async execute() {
        const storeList = await prisma.store.findMany({
            select: {
                id: true,
                name: true,
                latitude: true,
                longitude: true,
                about: true,
                opening_hours: true,
                open_on_weekends: true,
                image: {
                    select: {
                        id: true,
                        path: true
                    }
                }
            }
        })

        return storeList
    }
}