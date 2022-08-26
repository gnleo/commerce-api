import { Request, Response } from "express";
import { StoreDetailUseCase } from "./StoreDetailUseCase";

export class StoreDetailController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const storeDetailUseCase = new StoreDetailUseCase()

        const result = await storeDetailUseCase.execute({
            id
        })

        return response.json(result)
    }
}