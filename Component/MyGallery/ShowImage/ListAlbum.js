import Link from "next/link"
import ShowImage from './ShowImageGallery'
import styled from 'styled-components'

const Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    div{
        padding: 0;
        width: 300px;
        p{
            padding: 10px;
        }
        a{
            div{
                height: 200px;
                overflow:hidden;
            }
        }
    }
    img{
        /* width: 200px; */
    }

`


const ListAlbum = (props) => {

    return(

           <Block>
           {props.data.items.map(items => {
               console.log(items.fields.thumbnail.sys.id) 

                return(
                     <div  className = "card">
                        <Link href = '/MyGallery/[MyGalleryid]' as = {`/MyGallery/${items.sys.id}`} key = {items.sys.id} >
                             <a>
                                    <ShowImage col1 = {items.fields.thumbnail.sys.id}/>
                                    <div>
                                        <p>{items.fields.name}</p>
                                        <p> {items.fields.descriptions} </p>
                                    </div>
                             </a>
                        </Link>
                     </div>
                )
           })}
           </Block>

    )
}

export default ListAlbum