import { prisma } from "../../../database/prismaClient";


interface image {
    path: string
}

interface ICreateImage {
    id_store?: string;
    id_product?: string;
    image: image[]
}

export class CreateImageUseCase {
    async execute({ id_product, id_store, image }: ICreateImage) {
        //restruturando o array de imagens
        const images = image.map(item => {
            return {
                id_store,
                id_product,
                path: item.path
            }
        })

        const result = await prisma.image.createMany({
            data: images
        })

        return result
    }
}