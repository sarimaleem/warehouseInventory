import BaseTable from "../components/BaseTable.tsx";


export default function BaseTableInventoryTable(){

    const rows: Record<string, string>[] = [
        {
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        },{
            'productCode':'prdctcode',
            'description': '22',
            'catagories':'12',
            'binlocation':'12',
            'stock':'12',
            'price':'12',
        }

    ]

    const columns: {key:string, name:string,width:number}[] = [
        {key:'productCode', name: 'Product Code', width:250},
        {key:'description', name: 'Description', width:250},
        {key:'catagories', name: 'Catagories', width:200},
        {key:'binlocation', name: 'Bin Location', width:200},
        {key:'stock', name: 'Stock', width:200},
        {key:'price', name: 'Price', width:200},

    ]

    return <BaseTable rows={rows} columns={columns}/>
}