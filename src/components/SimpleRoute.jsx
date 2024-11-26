import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import rightArrow from '../static/rightArrow.svg'
import '../varriables.css'

export default function SimpleRoute({master, slave, className}){
    return(
        <div className={'flex ' + className}>
            <Router >
                <Switch className='w-full '>
                    <div className="flex">
                    <Link to={'Admin'} className='mx-3 inter text-[#5C5F6A]'>Admin</Link>
                        <img src={rightArrow} alt="" className={'h-auto '} />
                    <Link to={'Admin'} className='mx-3 inter text-[#0E1422]'>Products</Link>
                    </div>
                        
                </Switch>
            </Router>
            
            

        </div>
    )
}