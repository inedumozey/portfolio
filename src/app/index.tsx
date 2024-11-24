"use client"
import Link from 'next/link';
import Utils from './data/utils'
const utils = new Utils()
import "./globals.css";
let currentYear = (new Date()).getFullYear();
let startedYear = 2024
import React, { createContext, useContext, ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation';

const AppContext = createContext<any>({})

export default function RootLayout({ children }: { children: ReactNode }) {
    const [show_page_menu, set_show_page_menu] = useState(false)
    const path = usePathname()

    const data = {
        utils,
        set_show_page_menu,
        show_page_menu,
    }

    return (
        <div onClick={() => set_show_page_menu(false)}>
            <AppContext.Provider value={data}>
                <nav className="bg-gray-800 text-white h-[70px]">
                    <div className="mx-auto flex justify-between items-center py-4 padx">
                        <h1 className="text-xl font-bold" >
                            <Link href="/" className='hover'>{"<DrMo />"}</Link>
                        </h1>
                        <ul className="flex md:space-x-6 space-x-2">
                            <li>
                                <Link href="/projects" className={`hover:text-gray-400 ${path == "/projects" ? 'text-white font-bold' : 'text-gray-300'}`}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume" className={`hover:text-gray-400 ${path == "/resume" ? 'text-white font-bold' : 'text-gray-300'}`}>
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`hover:text-gray-400 ${path == "/contact" ? 'text-white font-bold' : 'text-gray-300'}`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='min-h-[calc(100vh-100px-70px)]'>{children}</div>
                <footer className="bg-gray-800 min-h-[100px] text-white py-4 text-center text-[.9rem]">
                    <p>
                        &copy; {currentYear > startedYear ? `${startedYear.toString()}-${currentYear.toString()}` : startedYear} {utils.contact.name} Inedu Moses. All rights reserved.
                    </p>
                    <p>
                        Correct! ❤️
                    </p>
                </footer>
            </AppContext.Provider >

        </div>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}


