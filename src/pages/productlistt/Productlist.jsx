import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Producttable from "../../components/datatable/ProductTable"

const Productlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Producttable/>
      </div>
    </div>
  )
}

export default Productlist