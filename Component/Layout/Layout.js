import Menu from "./Menu"
import Header from "./Header"
import Navbar from "./Navbar"
import globalStyles from '../../stykes/global'

const Layout = (props) => {
    return(
        <div>
            <Menu/>
            {props.children}
            <style jsx global>
        {globalStyles}
      </style>
        </div>
    )
}

export default Layout