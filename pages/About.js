import Layout from '../Component/Layout/Layout'
import ShowImage from '../Component/ShowImage'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'


const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
`
const Flex1 = styled.div`
    background:#bfbfbf;
    width: 400px;
    div{
        padding: 20px;
    }
    img{
        display:block;
        width: 300px;
        margin: 20px  auto;
        border-radius: 50%; 
    }
`

const Flex2 = styled.div`
    width: 50%;
    div{
        padding: 20px;
    }
    @media all and (max-width: 500px){
        width: 100%;
    }
`
const AboutPage = ({data}) => {
console.log(data)
    return(
        <Layout>
            <div className =''>
                {data.items.map(items =>{
                    const {name, profile, age, address, dateOfBirth, education, nickName, skill, workExperience} = items.fields
                    return(
                        <Block>
                            <Flex1>
                                <ShowImage assetsId = {profile.sys.id} />
                                <div>
                                    <h1> PERSONAL DETAIL </h1>
                                    <p> <strong>NAME</strong> : {name} </p>
                                    <p> <strong>NICK NAME :</strong> {nickName} </p>
                                    <p> <strong>AGE :</strong>  {age} </p>
                                    <p> <strong>DATE OF BIRTH :</strong> {dateOfBirth} </p>
                                    <p> <strong>ADDRESS : </strong> {address} </p>
                                </div>
                            </Flex1>

                            <Flex2>
                                <div>
                                    <h1> SKILL </h1>
                                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(skill)}}></div>
                                </div>

                                <div>
                                    <h1> EDUCATION </h1>
                                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(education)}} ></div>
                                </div>

                                <div>
                                    <h1> WORK EXPERIENCE </h1>
                                    <di dangerouslySetInnerHTML={{__html: documentToHtmlString(workExperience)}} ></di>
                                </div>
                            </Flex2>
                        </Block>
                    )
                })}
            </div>
        </Layout>
    )
}



AboutPage.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=about`)
    const json = await res.json()
    return { data: json}
  }
export default AboutPage