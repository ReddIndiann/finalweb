import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Estatetable from "../../components/datatable/Estatetable"

const Orderlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Orderlist/>
      </div>
    </div>
  )
}

export default Orderlist 