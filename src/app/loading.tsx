
import React from 'react'


export default function PageLoader() { /** edit and create page **/

    return (
        <div className='fixed top-0 z-[100000] right-0 left-0 bottom-0 h-[100vh] w-[100vw] flex justify-center items-center bg-[rgba(0,0,0,0.3)]'>
            <div
                className={`
            absolute
            rounded-full
            h-[90px]
            w-[90px]
            border-l-[1px]
            border-r-[1px]
            border-t-0
            border-b-0
            border-l-primaryColor
            border-r-primaryColor
            animate-spin-acw
          `}
            ></div>
            <div
                className={`
            absolute
            rounded-full
            h-[60px]
            w-[60px]
            border-t-[1px]
            border-b-[1px]
            border-l-0
            border-r-0
            border-t-secondaryColor
            border-b-secondaryColor
            animate-spin-cw
            flex
            justify-center
            items-center
          `}
            >
            </div>
        </div>
    );
}