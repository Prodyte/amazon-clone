import { Carousel } from 'react-responsive-carousel';
import Banner_1 from '../images/Banners/Banner_1.jpg';
import Banner_2 from '../images/Banners/Banner_2.jpg';
import Banner_3 from '../images/Banners/Banner_3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src={Banner_1} />
        </div>
        <div>
          <Image src={Banner_3} />
        </div>
        <div>
          <Image src={Banner_2} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
