import Layout from "../Component/Layout/Layout"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import styled from 'styled-components'
import Link from 'next/link'
import ModalMyBook from "../Component/ModalMyBook";
import { useEffect, useState } from 'react'


//styled
const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`
const BlockContent = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    margin: 10px 0;
    padding: 20px;
`
const Block = styled.div`
    a{
        color:black;
        text-decoration: none;
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
            <Container>
            <h1>My Book</h1>
       {data.items.map(items => {
        // const [idItem, SetIdItem] = useState("123")
        // console.log(idItem)
        // const FuncSendIdItem = () => {
        //     // SetIdItem(items.sys.id)
        // }
        // const onClickMulti = () => {
        //     FuncOpenModal()
        //     FuncSendIdItem()
        // }
        // console.log(items.sys.id)
         return(
        <Block onClick = {ClickSendIdItem} id = {items.sys.id}>
             <Link href = "#">
               <a>
               <div className = "card">
                    <h2> {items.fields.title} </h2>
                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.contents)}}></div>           
                </div>
               </a>
            </Link>
        </Block>
         )
       })}
            </Container>
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