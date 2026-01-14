"use client"

import { useParams } from "next/navigation"

export default function Docs(){
    const params = useParams<{slug?:string[]}>()

    return (
        <div>
            <h1>Docs</h1>
            <p> {JSON.stringify(params)} </p>
            <pre> {JSON.stringify(params.slug ?? [])} </pre>
        </div>
    )
}