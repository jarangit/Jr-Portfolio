import Menu from "./Menu"
import Header from "./Header"
import Navbar from "./Navbar"

const Layout = (props) => {
    return(
        <div>
            <Menu/>
            {props.children}
        </div>
    )
}

export default Layout