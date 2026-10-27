'use client'
import { useState, useEffect } from "react"


export function CopyRight(){

    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
    setYear(new Date().getFullYear());
    }, []);


    return <p>© {year} María Eugenia Giuliodori</p>
}