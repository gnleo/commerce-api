import { prisma } from "../../../database/prismaClient";

interface ICreateStore {
    name: string
    latitude: number
    longitude: number
    about: string
    opening_hours: string
    open_on_weekends: boolean
}

export class CreateStoreUseCase {
    async execute({ name, latitude, longitude, about, opening_hours, open_on_weekends }: ICreateStore) {
        //verificar se a loja já foi criada
        const storeExist = await prisma.store.findFirst({
            where: {
                name
            }
        })

        if (storeExist) {
            throw new Error("Store already exists!")
        }

        //salvar informações da loja
        const store = await prisma.store.create({
            data: {
                name,
                latitude,
                longitude,
                about,
                opening_hours,
                open_on_weekends,
            }
        })

        return store
    }
}