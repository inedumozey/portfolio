"use client"

import React from 'react'
import { useAppContext } from '..';

export default function SwiperContentSwiperContent({ data }: { data: { title?: string, subtitle1?: string, subtitle2?: string, text?: any, image: string } }) {
    const { utils } = useAppContext()

    return (
        <div className='h-[100%] w-[100%] p-[10px]'>
            slider
        </div>
    )
}