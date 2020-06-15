import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'
import ModalMyBook from "../Component/ModalMyBook";
import { useEffect, useState } from 'react'


//styled
const BlockContent = styled.div`
    white-space: nowrap; 
    width: 200px; 
    overflow: hidden;
    text-overflow: ellipsis;
`
const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div{
        width: 250px;
        height: 250px;
        overflow: hidden;
    }
    a{
        color:black;
        text-decoration: none;
    }
    @media all and (max-width: 900px){
     div{
         height: auto;
     }
    }
`
//end styed

const MyBook = ({data}) => {


    const [openModal, SetOpenModal] = useState(true)  
    const [idItem, SetIdItem] = useState(null)

    const FuncOpenModal = () => {
        SetOpenModal(!openModal)
    }
    const ClickSendIdItem = (e) => {
        FuncOpenModal()
        const FindId = e.currentTarget.id
        console.log(FindId)
        data.items.map(FindIdItem => {
            if(FindId === FindIdItem.sys.id){
                SetIdItem(FindIdItem.fields)
            } else 'no'
        })
        
    }
    console.log(idItem)
    
    return(
        <Layout>
            <div className = "container" >
            <h1>My Book</h1>
            <Block >
                {data.items.map(items => {
                    return(
                        <div onClick = {ClickSendIdItem} id = {items.sys.id}  className = "card">
                            <Link href = "#">
                                <a>
                                    <div className = 'jr-block-content'>
                                        <h3> {items.fields.title} </h3>
                                        <div className = 'cut-text' dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.contents)}}></div>
                                        <button className = 'jr-buttonHover' > READ MORE </button>           
                                    </div>
                                </a>
                            </Link>
                        </div>
                         )
                        })}
            </Block>
            </div>
            <ModalMyBook valueClick = {openModal} onClose={FuncOpenModal} valueContent = {idItem}/>
        </Layout>
    )
}

MyBook.getInitialProps = async (ctx) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=mySet`)
    const json = await res.json()
    return { data: json}
  }
export default MyBook