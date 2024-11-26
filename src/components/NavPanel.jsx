import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Logo from '../static/logo.svg'

export default function NavPanel({children, underLineChildren}){
    return(
        <div className={"w-[260px] h-screen bg-white border-r border-[rgba(233, 233, 235, 1)] fixed"}>
            <div className='w-full flex justify-center items-center pt-4'>
                <img src={Logo} alt="" className='' />
            </div>
            <div className="w-full flex justify-center border-b border-[#E9E9EB] pb-8">

            <Router >
                <Switch className='w-full flex'>
                    <div className='w-[212px] '>
                        {children}
                    </div>
                </Switch>
            </Router>
            </div>
            <div className="w-full flex justify-center">

            <Router >
                <Switch className='w-full flex'>
                    <div className='w-[212px] '>
                        {underLineChildren}
                    </div>
                </Switch>
            </Router>
            </div>
                

        
        </div>
    )
}