const Utility = {
    menuSearch: function(obj: any): any {
        const arr : any = [];
        let a = obj.map((item: any) => {
            if(Object.hasOwn(item, 'collapse')){
                item?.collapse.map((item1 : any) => {
                    if(Object.hasOwn(item1, 'collapse')){
                        item1?.collapse.map((item2 : any) => {
                            arr.push({
                                name: item2.name,
                                route: item2.route
                            })
                        })
                    } else {
                        arr.push({
                            name: item1.name,
                            route: item1.route
                        })
                    }

                })
            } else {
                arr.push({
                    name: item.name,
                    route: item.route
                })
            }
        })
        return arr;
    }
}

export default Utility 