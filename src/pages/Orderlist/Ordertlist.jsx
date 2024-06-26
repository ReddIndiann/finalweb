import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Ordertable from "../../components/datatable/Ordertable"

const Orderlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Ordertable/>
      </div>
    </div>
  )
}

export default Orderlist 