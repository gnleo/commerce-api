import { Request, Response } from "express";
import { CreateImageUseCase } from "../../Image/CreateImage/CreateImageUseCase";
import { CreateStoreUseCase } from "./CreateStoreUseCase";

export class CreateStoreController {
    async handle(request: Request, response: Response) {
        const { name, latitude, longitude, about, opening_hours, open_on_weekends } = request.body
        const requestImages = request.files as Express.Multer.File[]

        const createStoreUseCase = new CreateStoreUseCase();
        const createImageUseCase = new CreateImageUseCase;

        const image = requestImages.map(image => {
            return {
                path: image.filename
            }
        })

        const resultStore = await createStoreUseCase.execute({
            name,
            latitude,
            longitude,
            about,
            opening_hours,
            open_on_weekends: Boolean(open_on_weekends)
        })

        const id_store = resultStore.id

        if (!id_store) {
            throw new Error("Insertion error!")
        }

        const resultImage = await createImageUseCase.execute({
            id_store,
            image
        })

        return response.json({ resultStore, resultImage })
    }
}