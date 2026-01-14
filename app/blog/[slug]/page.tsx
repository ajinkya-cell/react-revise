"use client"

import { useParams } from "next/navigation"

export default function BlogSlug(){
    const params = useParams<{slug :string}>()

    return (
        <div>
            <h1>Blog page</h1>
            <p>Slug : {params.slug}</p>
            <pre>{JSON.stringify(params)}</pre>
        </div>
    )
}