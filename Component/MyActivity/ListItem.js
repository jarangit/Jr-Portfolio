import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ShowImgMyAc from './ShowImgMyAc';
import Link from 'next/link';
import styled from 'styled-components';


const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    div{
        img{
            width: 100%;
        }
    }
`

const ListItemMyAc = (props) => {
    console.log(props.data)
    return(
        <Block>
            {props.data.items.map(items => {
                console.log(items.sys.id)
               return(
                   <div className = 'card'>
                        <Link href = '/[MyActivityid]' as = {`/${items.sys.id}`} key = {items.sys.id} >
                           <a>
                                <ShowImgMyAc data = {items.fields.thumbnail.sys.id} />
                                <h1> {items.fields.title} </h1>
                                <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.descriptions)}}></div>
                                <p> {items.fields.date} </p>    
                            </a>    
                        </Link> 
                   </div>
               )
            })}
        </Block>
    )
}

export default ListItemMyAc