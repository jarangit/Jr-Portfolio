import axios from "axios"
import { useEffect, useState } from 'react'


const ShowImgMyAc = (props) => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/${props.data}?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
            .then(res => {
              setData(res.data);
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
            {console.log(data.sys.id)}
            <img  src =  {data.fields.file.url} />
          </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
}

export default ShowImgMyAc