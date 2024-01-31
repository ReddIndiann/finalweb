import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Estatetable from "../../components/datatable/Estatetable"

const Estatelist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Estatetable/>
      </div>
    </div>
  )
}

export default Estatelist