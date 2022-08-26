import { Request, Response } from "express";
import { CreateImageUseCase } from "../../Image/CreateImage/CreateImageUseCase";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, price, description, category, qtd } = request.body
        const { id_store } = request.params
        const requestImages = request.files as Express.Multer.File[]

        const createProductUseCase = new CreateProductUseCase()
        const createImageUseCase = new CreateImageUseCase()

        //redefinição do array de imagens
        const image = requestImages.map(image => {
            return {
                path: image.filename
            }
        })

        const resultProduct = await createProductUseCase.execute({
            name,
            price: Number(price),
            description,
            category,
            qtd: Number(qtd),
            id_store
        })

        const id_product = resultProduct.id

        if (!id_product) {
            throw new Error("Insert error!");
        }

        const resultImage = await createImageUseCase.execute({
            id_product,
            image
        })

        return response.json({
            resultProduct,
            resultImage
        })
    }
}