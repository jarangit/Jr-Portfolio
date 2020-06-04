import axios from "axios"
import { useEffect, useState } from 'react'

const  ShowImage = () => {

  const [data, setData] = useState('มายัง');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`,
      );
 
      setData('มาแล้ว');
    };
 
    fetchData();
    
  }, []);

  return(
      <div>
        {console.log(data)}
        {console.log('jaran')}
      </div>
    )
  }
  
 

  export default ShowImage