import { Link } from "react-router-dom";
import '../varriables.css'

export default function NavLinK({name, href, active = false}){

    const inaciveLink = 'flex my-4 rounded-lg' 
    const activeLink = 'flex my-4 rounded-lg bg-[#F6F6F6]';
    const activeText = "h-[41px] pl-6 text-lg text-[#0E1422] flex items-center font-semibold inter"
    const inactiveText = "h-[41px] pl-6 text-lg text-[#5C5F6A] flex items-center font-semibold inter"

    return(
            <Link to={href} className={active ? activeLink : inaciveLink} >
                <p className={active ? activeText : inactiveText}>{name}</p>
            </Link>
    )
}