import { ImageSlider } from "../components/ImageSlider";

const images = [
    { url: process.env.PUBLIC_URL + "/images/paintings/painting1.jpg", alt: "Painting of smiling children with ink splotch style background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting2.jpg", alt: "Painting of dog with orange/rusty color background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting3.jpg", alt: "Painting of woman sitting on chair with orange/rusty color background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting4.jpg", alt: "Painting of blue heeler with blue, ink splotch style background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting5.jpg", alt: "Painting of Con Air movie cover with man's face replacing Nicholas Cages." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting6.jpg", alt: "Painting of smiling children with blue fade background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting7.jpg", alt: "Painting of Notorious B.I.G with Brooklyn Nets logo in corner. Black background." },
    { url: process.env.PUBLIC_URL + "/images/paintings/painting8.jpg", alt: "Painting of Arrested Development character Tobias Funke with paint spatter background" },
]

const PaintingsPage = () => {
    return ( 
        <div 
        style={{ 
            maxWidth: "540px",
            width: "100%",
            margin: "0 auto",
        }}>
            <ImageSlider images={images}/>
        </div>
     );
}
 
export default PaintingsPage;