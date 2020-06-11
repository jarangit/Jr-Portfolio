import styled from 'styled-components'
import { faFacebook, faYoutube, faLine  } from '@fortawesome/free-brands-svg-icons' 
import { faThumbsUp, faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        :hover{
            color: black;
        }
    }
`

const Footer = () => {

    return(
        <div className = "container">
            <Block>
                <div>
                    <p> MY WEBSITE CREATED BY NEXTJS WITH CONTENTFUL-API </p>
                    <p>
                        <strong>GITHUB : </strong> <a href = "https://github.com/jarangit/Jr-Portfolio" target = "bank"> https://github.com/jarangit/Jr-Portfolio </a>
                    </p>
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