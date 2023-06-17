import Link from 'next/link'
import React from 'react'

//Icons
import {VscListSelection} from "react-icons/vsc";
import {AiOutlineCheckSquare , AiOutlineUser} from "react-icons/ai";

function layout({children}) {
  return (
    <div className='container max-w-[1430px]'>
        <header>
            <p>Kamy Todo App</p>
        </header>
        <div className='container--main'>
            <aside>
                <p>Welcome</p>
                <ul>
                    <li className='flex items-center'>
                        <VscListSelection/>
                        <Link href={"/"}>Todos</Link>
                    </li>

                    <li className='flex items-center'>
                        <AiOutlineCheckSquare/>
                        <Link href={"/todo"}>Add Todo</Link>
                    </li>

                    <li className='flex items-center'>
                        <AiOutlineUser/>
                        <Link href={"/profile"}>profile</Link>
                    </li>
                </ul>
            </aside>
            <section>{children}</section>
        </div>
    </div>
  )
}

export default layout