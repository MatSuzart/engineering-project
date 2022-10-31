import { Request, Response } from 'express';

import { Product } from '../models/product';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request , res:Response)=>{
    let query: string = req.query.q as string;

    let list = Product.getFromName(query);

    res.render('pages/page',{
        menu:createMenuObject(''),
        list
    });
}