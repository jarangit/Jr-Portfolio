// import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import Link from "next/link"
import dynamic from 'next/dynamic';
const Slide = dynamic(() =>
  import('react-slideshow-image').then((slideshow) => slideshow.Slide),
  { ssr: false }
)



const Container = styled.div`
    width: 300px;
    display: none;
    h2{
        text-align:center;
        margin: 5px 0 ;
    }
    @media all and (max-width: 767px){
        display:block;
        margin: 30px auto;
    }
`

const ContainerText = styled.div`
    position: relative;
    text-align: center;
    opacity: 1;

`
const Text = styled.div`
    position: absolute;
    bottom: 50%;
    left: 35%;
    text-align: left;
    color: white;
    @media all and (max-width: 500px){
        font-size: 60%;
    }
`
const slideImages = [
  '//images.ctfassets.net/mhf3i20liehl/47hetfU3UDalOB6JyBviUw/e68777d25eaf76d8aca60039feb499af/18084.png',
  '//images.ctfassets.net/mhf3i20liehl/ci8PNQIV1MCedwTS40sIq/caa7349af2b48675a07b2ac7160a3a1c/1044.png',
  '//images.ctfassets.net/mhf3i20liehl/3uh0h5hqXI1LHhmaLZwmE7/962471a031bd585bfc202cf1c82a3b08/561147-PKT15J-161.png'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    // indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }


const SlideShow = () => {
    import('react-slideshow-image').then((slideshow) => slideshow.Fade),
  { ssr: false }
    return(
      <Container>
          <h2>MENU</h2>
        <Slide {...properties}>
        <Link href = "/MyProject" >
                    <a>
                       <ContainerText>
                            <Text>
                                <h1> MY PROJECT </h1>
                            </Text>
                            <img src={slideImages[0]} width='100%'/>
                       </ContainerText>
                    </a>
             </Link>
             <Link href = "/MyBook" >
                    <a>
                       <ContainerText>
                            <Text>
                                <h1> MY BOOK </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/ci8PNQIV1MCedwTS40sIq/caa7349af2b48675a07b2ac7160a3a1c/1044.png" width='100%'/>
                       </ContainerText>
                    </a>
             </Link>
             <Link href = "/MyGallery" >
                    <a>
                       <ContainerText>
                            <Text>
                                <h1> MY GALLERY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/3uh0h5hqXI1LHhmaLZwmE7/962471a031bd585bfc202cf1c82a3b08/561147-PKT15J-161.png" width='100%'/>
                       </ContainerText>
                    </a>
             </Link>
             <Link href = "/MySong" >
                    <a>
                       <ContainerText>
                            <Text>
                                <h1> MY SONG </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/1zv8VprnhfGmyeD4n12eaW/7c5b10e962a07807828b7c2d87bd4f89/615.png" width='100%'/>
                       </ContainerText>
                    </a>
             </Link>
             <Link href = "/MyActivity" >
                    <a>
                       <ContainerText>
                            <Text>
                                <h1> MY ACTIVITY </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/3udibrD7F8gROFp7yJHsEL/7f562add9dc3d9269e3665e016ac8de7/19694.png" width='100%'/>
                       </ContainerText>
                    </a>
             </Link>
                    <a href = "https://www.abk-store.com/" target = "bank">
                       <ContainerText>
                            <Text>
                                <h1> MY BUSINESS </h1>
                            </Text>
                            <img src="//images.ctfassets.net/mhf3i20liehl/5FuZD0jTQjr1oukdZwVtk5/8f9eafbfaa999b3c59a03d9e3f9bc31c/799.png" width='100%'/>
                       </ContainerText>
                    </a>
        </Slide>
      </Container>
    )
}

export default SlideShow