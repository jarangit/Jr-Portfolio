import Menu from "./Menu"
import Header from "./Header"
import Navbar from "./Navbar"

const Layout = (props) => {
    return(
        <div>
            <Menu/>
            <Header/>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default Layout