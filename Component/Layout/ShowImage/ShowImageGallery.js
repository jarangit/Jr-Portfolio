import axios from "axios"
import { useEffect, useState } from 'react'

const  ShowImage = (props) => {
    // console.log(props.dataImg.col1.map(id => id.sys.id))
<<<<<<< HEAD
  
=======
    const Idcol1 =  props.dataImg.col1.map(id => id)
   

>>>>>>> 4346094fcf8d2215b0eaa716e4c34f496f5a24e9
    const [dataCol1, setDataCol1] = useState([]);
    const [IdImg, setIdImg] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
<<<<<<< HEAD

    const Idcol1 =  props.dataImg.col1.map(id => id.sys.id)
    // const IdMap = () => {
    //     console.log(Idcol1)
    //     return(
    //         <div>
    //             {Idcol1.map(id => {
                    
    //             })}
    //         </div>
    //     )
    // }
    // IdMap()
    // const MapId = () => [
    //     Idcol1.map(Id => {
    //         setIdImg('มาแล้ว')
    //     })
    // ]

    // MapId()
    
    const ApiCol1 = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${IdImg}?access_token=${process.env.ACCESS_TOKEN}&content_type=post`
=======
    
    const MapId = () => {
        return(
            <div>
                {Idcol1.map(idd => {
                   iid.sys.id
                })}
            </div>
        )
    }
    const ApiCol1 = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${MapId()}?access_token=${process.env.ACCESS_TOKEN}&content_type=post`
>>>>>>> 4346094fcf8d2215b0eaa716e4c34f496f5a24e9
    console.log(ApiCol1)
    useEffect(() => {
        axios.get(ApiCol1)
            .then(res => {
                setDataCol1(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError('No Data');
                setLoad(true)
            })
            {Idcol1.forEach((e)=>{
                console.log(e)
                axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${e}?access_token=${process.env.ACCESS_TOKEN}&content_type=post`)
                .then(res => {
                    setIdImg(res)
                })
            })}
    }, []);

    // console.log(dataCol1.fields.file.url)
    
    if (load) {
        return(
          <div>
<<<<<<< HEAD
              {/* <img src={IdImg.data.fields.file.url} /> */}
=======
            {MapId()}
>>>>>>> 4346094fcf8d2215b0eaa716e4c34f496f5a24e9
          </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};



  //  const response  =  fetch( `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)

 

  export default ShowImage