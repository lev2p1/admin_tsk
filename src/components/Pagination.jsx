import PaginationLink from "./PaginationLink"
import rightArrow from '../static/rightArrow.svg'
import tripleDot from '../static/tripleDot.svg'

export default function Pagination(){
    return (
        <div className="flex">
            <img src={rightArrow} alt="" className=" rotate-180 px-4"/>
            <PaginationLink active={true}>1</PaginationLink>
            <PaginationLink>2</PaginationLink>
            <PaginationLink><img src={tripleDot} alt="" /></PaginationLink>
            <PaginationLink>22</PaginationLink>
            <PaginationLink>23</PaginationLink>
            <img src={rightArrow} alt="" className=" px-4"/>
        </div>
    )
}