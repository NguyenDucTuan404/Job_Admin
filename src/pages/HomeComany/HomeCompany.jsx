
import "./homeCompany.css"

import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/Sidebar/Sidebar"
export default function HomeCompany() {


    return (
        <div>
            <Topbar />
            <Sidebar />
            <div className="others">
                <button  >Click tao</button>
            </div>
        </div>

    )

}