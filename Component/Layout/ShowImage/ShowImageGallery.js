import axios from "axios"
import { useEffect, useState } from 'react'

const  ShowImage = (props) => {
    // console.log(props.dataImg.col1.map(id => id.sys.id))
    const Idcol1 =  props.dataImg.col1.map(id => id.sys.id)
    console.log(Idcol1)
    let IdIm;
    Idcol1.forEach(function(e){
        console.log(e)
        if(e === '4pOuPy8OHrUNMMwx1WqqiP'){
            IdIm = e;
        }
    });
    const [dataCol1, setDataCol1] = useState([]);
    const [IdImg, setIdImg] = useState('ยังอะ');
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    
    // const MapId = () => [
    //     Idcol1.map(Id => {
    //         setIdImg('มาแล้ว')
    //     })
    // ]

    // MapId()
    
    const ApiCol1 = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4pOuPy8OHrUNMMwx1WqqiP?access_token=${process.env.ACCESS_TOKEN}&content_type=post`
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
    }, []);
    
    
    if (load) {
        return(
          <div>
              {console.log(IdIm)}
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