import React from 'react'
import Image from 'next/image'

export default function Icon({ size = 25, src, alt = "/image", rounded = false }: { size?: number, src: string, alt?: string, rounded?: boolean }) {

    return (
        <Image src={src} alt={alt} width={1000} height={1000} className={`${rounded ? 'rounded-full' : ''} rounded-tl-lg rounded-tr-lg `} />
    )
}
