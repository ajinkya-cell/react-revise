"use client"

import { useParams } from "next/navigation"

export default function Product(){
    const params = useParams<{
        category:string
        product : string
    }>()

    return (
        <div>
            <h1>Shop slug</h1>
            <p>Category : {params.category}</p>
            <p>Product : { params.product }</p>
            <pre>{JSON.stringify(params)}</pre>
        </div>
    )
}