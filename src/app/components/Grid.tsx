import React from 'react'

export default function Grid({ children, minw = "100px" }: { children: React.ReactNode, minw?: string }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(${minw}, 1fr))`,
                gridTemplateRows: "auto",
                gridGap: "20px",
            }}
        >
            {children}
        </div>
    )
}
