import { getConnection, getRepository } from 'typeorm';
import { Categoria } from '../entity/Categoria';
import { Request, Response } from 'express';
import { isEmpty } from '../tools/Empty';

export const saveCategoria = async (req: Request, res: Response) => {

    try{
                
        const objStore = req.body;
                
        const objPost = {
            idCategoria:  objStore.idCategoria,
            descricao: objStore.descricao,   
        };
                
        if(isEmpty(objPost.idCategoria)){
            await getRepository(Categoria).save(objPost)        
        }else{
            await getRepository(Categoria).update( {idCategoria: objPost.idCategoria },objPost)
        }
        
    }catch(error){
    }
    
    return res.status(200).json("ok");
}

export const findCategoriasAtivas = async (req: Request, res: Response) => {
    const sql = `select * from categoria`
    const filter = await getConnection().query(sql);
    return res.json(filter);
}



