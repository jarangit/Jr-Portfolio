import React from 'react';
import styled from 'styled-components'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Img = styled.img`
        margin: 5px 10px;
        width:50px;
        height : 50px;
`
const ModalSty = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  div{
    background-color: #fefefe;
    margin: auto;
    padding: 10px 50px;
    width: 70%;
    border-radius: 0.5rem;
    /* text-align:center; */
    button{
        border: none;
        background: none;
        float:right;
        font-size: 30px;
    }
    h1{
        text-align:center;
    }
    span{
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        }
        ul{
            padding: 0;
            li{
                list-style:none;
                display:flex;
                /* display:inline-block; */
                a{
                    list-style:none;
                    display:flex;
                }
            }
        }
        textarea{
            width: 50%;
            height: 50px;
        }
    }
    @media all and  (max-width: 900px){
        div{
            width:85%;
            padding: 10px 20px;
        }
    }
    `
const ModalMyBook = (props) => {
 const {valueClick, valueContent} = props
    const ShowModal = () => {
        if (valueClick === true){
            return ''
        }else{
            return(
                <ModalSty>
                    <div >
                    <button onClick = {props.onClose}>x</button>
                    <div>
                        <h2> {valueContent.title} </h2>
                        <div dangerouslySetInnerHTML={{__html: documentToHtmlString(valueContent.contents)}}></div>           
                    </div>
                    </div>
                </ModalSty>
            )
        }
    }



    return ShowModal()


}

export default ModalMyBook