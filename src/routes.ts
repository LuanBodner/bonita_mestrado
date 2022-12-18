import { Router } from 'express';

import { findCategoriasAtivas, saveCategoria} from './controller/CategoriaControle';
 
const routes = Router();

//-------------LOMADEE ---------------------------------
routes.post('/categoria', saveCategoria)
routes.get('/categoria', findCategoriasAtivas)

export default routes;