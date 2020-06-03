import axios from "axios"
import { useEffect, useState } from 'react'

const  ShowImage = async () => {

  const [data, setData] = useState({ hits: [] });
  useEffect(()=>{
    loadData()
  }, [])

  const loadData = async () => {
    const response  = await fetch( `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
    const data = await response.json()
    setData(data)
    console.log(data.fields)
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`,
  //     );
 
  //     setData(result.data);
  //   };
 
  //   fetchData();
  // }, []);
 
//  fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/assets/4NAR7Mm1KAmYJUS8qQYbUm?access_token=${process.env.ACCESS_TOKEN}&content_type=myProject`)
//   .then(response => response.json())    // one extra step
//   .then(data => {
//     SetDataState(data)
//   })
    return(
      <div> {data.fields.file}
      </div>
    )
  }
  
 

  export default ShowImage