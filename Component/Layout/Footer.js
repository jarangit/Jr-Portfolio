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
                <p> MY WEBSITE CREATED BY NEXTJS WITH CONTENTFUL-API </p>
                <p>
                    <strong>GITHUB : </strong> <a href = "https://github.com/jarangit/Jr-Portfolio" target = "bank"> https://github.com/jarangit/Jr-Portfolio </a>
                </p>
            </Block>
        </div>
    )
}

export default Footer