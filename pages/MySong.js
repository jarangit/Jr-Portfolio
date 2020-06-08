import Layout from "../Component/Layout/Layout"
import Link from "next/link"

const MySong = () => {
  return(
    <Layout>
      <div className = "container">
        <div>
            <a  href ="https://www.youtube.com/channel/UCySgBO0m0jqdlgqrWbVyb1w" target = 'bank'>YOUTUBE</a>
        </div>
        <div>
            <a href ="https://soundcloud.com/jaran-donchaaim" target = "bank" >SOULDCLOUD</a>
        </div>
      </div>
    </Layout>
  )
}

export default MySong