import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import NavLink from "../components/NavLink"
import Table from "../components/Table"

import '../varriables.css'

export default function App() {
  return (
    <>
    <div className="flex">
    <div className="!w-[300px] h-screen"></div>
      <NavPanel underLineChildren={<NavLink name='Extras' href='/Extras'/>}>


        <div className="mt-16 flex flex-col">
          <NavLink name='Dashboard' href='/Dashboard'/>
          <NavLink name='Products' href='/Products'  active={true}/>
          <NavLink name='Orders' href='/Orders'/>
          <NavLink name='Customers' href='/Customers'/>
          <NavLink name='Reviews' href='/Reviews'/>
          <NavLink name='Settings' href='/Settings'/>
        </div>

        
      </NavPanel>
      
      <div className="w-full">
        <Header/>
        <div className="px-[48px] py-[64px] w-full">
          <Table/>
        </div>
      </div>

      
    </div>
    
    </>
    
  )
}