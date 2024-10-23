import { ImageSlider } from "../components/ImageSlider";
import p1 from "../images/paintings/painting1.jpg";
import p2 from "../images/paintings/painting2.jpg";
import p3 from "../images/paintings/painting3.jpg";
import p4 from "../images/paintings/painting4.jpg";
import p5 from "../images/paintings/painting5.jpg";
import p6 from "../images/paintings/painting6.jpg";
import p7 from "../images/paintings/painting7.jpg";
import p8 from "../images/paintings/painting8.jpg";

const images = [
    { url: p1, alt: "Painting of smiling children with ink splotch style background." },
    { url: p2, alt: "Painting of dog with orange/rusty color background." },
    { url: p3, alt: "Painting of woman sitting on chair with orange/rusty color background." },
    { url: p4, alt: "Painting of blue heeler with blue, ink splotch style background." },
    { url: p5, alt: "Painting of Con Air movie cover with man's face replacing Nicholas Cages." },
    { url: p6, alt: "Painting of smiling children with blue fade background." },
    { url: p7, alt: "Painting of Notorious B.I.G with Brooklyn Nets logo in corner. Black background." },
    { url: p8, alt: "Painting of Arrested Development character Tobias Funke with paint spatter background" },
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