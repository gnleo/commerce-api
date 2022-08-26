import { Request, Response } from "express";
import { StoreListUseCase } from "./StoreListUseCase";

export class StoreListController {
    async handle(request: Request, response: Response) {
        const storeListUseCase = new StoreListUseCase()

        const result = await storeListUseCase.execute()

        return response.json(result)
    }
}