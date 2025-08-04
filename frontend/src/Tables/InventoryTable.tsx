import { useEffect, useState } from "react";
import BaseTable from "../components/BaseTable.tsx";

export default function BaseTableInventoryTable() {
  const rows: Record<string, string>[] = [
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
    {
      productCode: "prdctcode",
      description: "22",
      catagories: "12",
      binlocation: "12",
      stock: "12",
      price: "12",
    },
  ];

  const [data, setData] = useState<{ items: Record<string, string>[] }>({ items: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/inventory");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchData();
  }, []);


  const columns: { key: string; name: string; width: number }[] = [
    { key: "product_code", name: "Product Code", width: 250 },
    { key: "description", name: "Description", width: 250 },
    { key: "categories", name: "Categories", width: 200 },
    { key: "binlocation", name: "Bin Location", width: 200 },
    { key: "stock", name: "Stock", width: 200 },
    { key: "price", name: "Price", width: 200 },
  ];

  return <BaseTable rows={data.items || []} columns={columns} />;
}
