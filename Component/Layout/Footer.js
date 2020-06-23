import styled from 'styled-components'
import { faFacebook, faYoutube, faLine  } from '@fortawesome/free-brands-svg-icons' 
import { faThumbsUp, faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: gray;
    div{
        ul{
            padding: 0;
            list-style:none;
            li{
                display: inline-block;
                margin: 0 5px;
            }
        }
    }
    a{
        color: gray;
        text-decoration: underline;
        :hover{
            color: black;
        }
    }
    @media all and (max-width: 900px){
        padding: 5% 5%;
        justify-content: center;
        text-align:center;
        
    }
    @media all and (max-width: 500px){
        div{
            p{
                font-size: 70%;
            }
        }
    }
`
const FooterMenuPage = styled.ul`
    padding: 0;
            list-style:none;
            li{
                margin: 0 5px;
            }
`

const Footer = () => {

    return(
        <div className = "container">
            <Block>
                <div>
                    <p> MY WEBSITE CREATED BY NEXTJS WITH CONTENTFUL-API </p>
                    <p>
                        <strong>GITHUB : </strong> <a href = "https://github.com/jarangit/Jr-Portfolio" target = "bank"> Click go to my github </a>
                    </p>
                    {/* <FooterMenuPage>
                        <ul>
                            <p> MENU </p>
                            <li>
                                <Link href = 'MyProject'>
                                    <a> My Project </a>
                                </Link>
                            </li>
                            <li>
                                <Link href = 'MyBook'>
                                    <a> My Book </a>
                                </Link>
                            </li>
                            <li>
                                <Link href = 'MyGallery'>
                                    <a> My Gallery </a>
                                </Link>
                            </li>
                            <li>
                                <Link href = 'MySong'>
                                    <a> My Song </a>
                                </Link>
                            </li>
                            <li>
                                <Link href = 'MyActivity'>
                                    <a> My Actibity </a>
                                </Link>
                            </li>
                            <li>
                                <Link href = 'MyBusiness'>
                                    <a> My Business </a>
                                </Link>
                            </li>
                        </ul>
                    </FooterMenuPage> */}
                </div>
                <div>
                        <ul>
                            <li>
                                <a href = 'tel:0882266023' > <FontAwesomeIcon icon={faPhone} size="lg"/></a>
                            </li>
                            <li>
                                <a href = 'http://line.me/ti/p/~jaran.dch' target = 'bank'> <FontAwesomeIcon icon={faLine} size="lg" /></a>
                            </li>
                            <li>
                                <a href = 'https://www.facebook.com/jarandonchaaim?ref=bookmarks' target = 'bank'> <FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                            </li>
                            <li>
                                <a href = "https://www.youtube.com/channel/UCySgBO0m0jqdlgqrWbVyb1w" target = 'bank'> <FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                            </li>
                            <li>
                                <a href = "mailto:jaran.dch@gmail.com" ><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                            </li>
                        </ul>
                </div>
            </Block>
            
        </div>
    )
}

export default Footer