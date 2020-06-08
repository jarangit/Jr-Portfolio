import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ShowImgMyAc from './ShowImgMyAc';


const ListItemMyAc = (props) => {
    // console.log(props.data)
    return(
        <div>
            {props.data.items.map(items => {
               return(
                   <div>
                        <ShowImgMyAc data = {items.fields.thumbnail} />
                        <h3> {items.fields.title} </h3>
                        <div dangerouslySetInnerHTML={{__html: documentToHtmlString(items.fields.descriptions)}}></div>
                        <p> {items.fields.date} </p>      
                   </div>
               )
            })}
        </div>
    )
}

export default ListItemMyAc