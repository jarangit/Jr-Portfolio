import axios from "axios"
import { useEffect, useState } from 'react'

const  ShowImage = (props) => {
    // console.log(props.dataImg.col1.map(id => id.sys.id))
    const Idcol1 =  props.dataImg.col1.map(id => id)
   

    const [dataCol1, setDataCol1] = useState([]);
    const [IdImg, setIdImg] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    
    const ApiCol1 = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${Idcol1.map(idd => {return idd.sys.id})}?access_token=${process.env.ACCESS_TOKEN}&content_type=post`
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
            {console.log(dataCol1)}
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