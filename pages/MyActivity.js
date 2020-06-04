function MyActivity({ stars }) {
    return <div>Next stars: {stars}</div>
  }
  
  MyActivity.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  
  export default MyActivity