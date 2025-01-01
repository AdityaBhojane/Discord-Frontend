import {  ReactNode, useState } from "react"


export default function CategoriesToggle({categoryName,children}:{categoryName:string,children:ReactNode}) {
    const [openChannel, setOpenChannel] = useState(false)
    return (
        <>
            <div onClick={() => setOpenChannel(!openChannel)} className="mx-2 pt-3 px-1 flex items-center text-[#949BA4] cursor-pointer ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    className={`w-3 h-3 mr-2 ${openChannel ? 'rotate-90' : ""} transition-all`}
                >
                    <path
                        clipRule="evenodd"
                        d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z"
                        fill="#cccccc"
                        fillRule="evenodd"
                    />
                </svg>
                <p className="text-[12px] text-[#adadad]">{categoryName}</p>
            </div>
            {openChannel? children:<></>}
        </>
    )
}
