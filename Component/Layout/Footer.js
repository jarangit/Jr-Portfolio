import styled from 'styled-components'

const Block = styled.div`
    color: gray;
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
                <p> My Website Created By NextJS With Contentful-API </p>
                <p>
                    <strong>Github : </strong> <a href = "https://github.com/jarangit/Jr-Portfolio" target = "bank"> https://github.com/jarangit/Jr-Portfolio </a>
                </p>
            </Block>
        </div>
    )
}

export default Footer