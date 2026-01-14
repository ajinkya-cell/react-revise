"use client"

import { useParams } from "next/navigation"

export default function CatchAll(){
    const params = useParams<{all:string[]}>()

    return (
        <div>
            <h1>Catch all</h1>
            <p>Slug : {params.all}  </p>
            <pre> {JSON.stringify(params)} </pre>
            <pre> {JSON.stringify(params.all)} </pre>
        </div>
    )
}