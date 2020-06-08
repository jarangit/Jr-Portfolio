import axios from "axios"
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 200px;
`

const  ShowImage = (props) => {
    console.log(props.col1)
   

    const [dataCol1, setDataCol1] = useState([]);
    const [IdImg, setIdImg] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const ApiCol1 = `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${props.col1}?access_token=${process.env.ACCESS_TOKEN}&content_type=post`

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
              <Img src = {dataCol1.fields.file.url} />
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




 

  export default ShowImage