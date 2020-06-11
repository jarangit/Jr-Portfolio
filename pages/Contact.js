import Layout from '../Component/Layout/Layout'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faLine  } from '@fortawesome/free-brands-svg-icons' 
import { faThumbsUp, faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'



const Block = styled.div`
    ul{
        list-style:none;
        li{
            margin: 10px 0; 
            font-size: 20px;
            a{
                :hover{
                    color: gray;
                }
            }
        }
    }
`
const ContactPage = ({data}) => {
    console.log(data)
    return(
        <Layout>
            <div className = 'container'>
                <h1> CONTACT </h1>
               {data.items.map(items => {
                   const   {address, facebook, line, tel, youtube, soundcloud} = items.fields
                   return(
                    <Block>
                        <ul>
                            <li>
                                <a href = {'tel:' + tel} > <FontAwesomeIcon icon={faPhone} />  : 088-226-6023</a>
                            </li>
                            <li>
                                <a href = {line} target = 'bank'> <FontAwesomeIcon icon={faLine} /> : Line</a>
                            </li>
                            <li>
                                <a href = {facebook} target = 'bank'> <FontAwesomeIcon icon={faFacebook} /> : Facebook </a>
                            </li>
                            <li>
                                <a href = {youtube} > <FontAwesomeIcon icon={faYoutube} /> : Youtube </a>
                            </li>
                            <li>
                                <a href = {soundcloud} ><FontAwesomeIcon icon={faEnvelope} /> : jaran.dch@gmail.com </a>
                            </li>
                            <li>
                                <strong>ที่อยู่</strong>
                                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(address)}}></div>
                            </li>
                        </ul>
                    </Block>
                   )
               })}
            </div>
        </Layout>
    )
}
ContactPage.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=contact`)
    const json = await res.json()
    return { data: json}
  }
export default ContactPage