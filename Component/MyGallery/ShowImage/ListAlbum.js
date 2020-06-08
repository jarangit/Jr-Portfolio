import Link from "next/link"

const ListAlbum = (props) => {
    console.log(props.data)
    return(
        <div>
           {props.data.items.map(items => {
               return(
                   <div>
                       <Link href = '/MyGallery/[MyGalleryid]' as = {`/MyGallery/${items.sys.id}`} key = {items.sys.id} >
                            <a>
                                {items.fields.name}
                                {items.sys.id}
                            </a>
                       </Link>
                   </div>
               )
           })}
        </div>
    )
}

export default ListAlbum