import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import router from '../routes';

import { Product } from '../models/product';

export const home = (req: Request, res: Response)=>{
    let list = Product.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'TODOS OS ITENS',
            backgroud: 'all.jpg'
        },
        list
    });

}

export const solar = (req: Request, res: Response)=>{
    let list = Product.getFromType('solar');
    res.render('pages/page', {
        menu: createMenuObject('solar'),
        banner: {
            title: 'SOLAR',
            backgroud: 'banner_image.jpg'
        },
        list
    });

}

export const lighting = (req: Request, res: Response)=>{
    let list = Product.getFromType('lighting');
    res.render('pages/page', {
        menu:createMenuObject('lighting'),
        banner: {
            title: 'LIGHTING',
            backgroud: 'banner_image.jpg'
        },
        list
    });

}

export const innovation = (req: Request, res: Response)=>{
    let list = Product.getFromType('innovation');
    res.render('pages/page', {
        menu: createMenuObject('innovation'),
        banner: {
            title: 'INNOVATION',
            backgroud: 'banner_image.jpg'
        },
        list
    });

}

export const search = (req: Request, res: Response)=>{
    res.send('search');

}

export default router;