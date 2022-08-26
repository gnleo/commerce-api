import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import { CreateProductController } from './modules/Product/CreateProduct/CreateProductController'

import { CreateStoreController } from './modules/Store/CreateStore/CreateStoreController'
import { StoreDetailController } from './modules/Store/StoreDetail/StoreDetailController'
import { StoreListController } from './modules/Store/StoreList/StoreListController'


const routes = Router()
const upload = multer(multerConfig)

//instâncias
const createStoreController = new CreateStoreController()
const storeListController = new StoreListController()
const createProductController = new CreateProductController()
const storeDetailController = new StoreDetailController()

//cria uma loja
routes.post('/store/create', upload.array('images'), createStoreController.handle)
//lista todas as lojas
routes.get('/store/storeList', storeListController.handle)
//detalhes da loja
routes.get('/store/detail/:id', storeDetailController.handle)
//cria um produto
routes.post('/product/:id_store', upload.array('images'), createProductController.handle)
export { routes }
