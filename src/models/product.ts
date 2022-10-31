type ProductType = 'solar' |'lighting'|'innovation';


type Product = {
    type: 'solar' |'lighting'|'innovation';
    image: string,
    name:string,
    desc:string
};

const data: Product[] = [
    {
        type:'solar',
        image:'all.jpg',
        name:'placa',
        desc: 'placa solar'
    },
    {
        type:'lighting',
        image:'all.jpg',
        name:'placa',
        desc: 'placa solar'
    },
    {
        type:'innovation',
        image:'all.jpg',
        name:'placa',
        desc: 'placa solar'
    },

    
];


export const Product = {
    getAll:():Product[]=>{
        return data;
    },
    getFromType: (type:ProductType): Product[]=>{
        return data.filter(item=> item.type ===type);
    },
    getFromName:(name: string): Product[]=>{
        return data.filter(item=>
           item.name.toLowerCase().indexOf(name.toLocaleLowerCase())>-1
        );
    }
};