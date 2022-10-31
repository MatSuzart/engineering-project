type MenuOptions = '' |'all'|'solar'|'lighting'|'innovation';

export const createMenuObject = (activeMenu: MenuOptions)=>{
    let returnObject = {
        all:false,
        solar:false,
        lighting:false,
        innovation:false
    };

    if(activeMenu !==''){
        returnObject[activeMenu]=true;
    }

    return returnObject;
}