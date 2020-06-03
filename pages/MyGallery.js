function MyGallery({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  MyGallery.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  
  export default MyGallery