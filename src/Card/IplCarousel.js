import Carousel from 'react-bootstrap/Carousel';
import { IplData } from '../ipldata/IplData';

let sorted1=IplData.sort((a,b)=>{
  return b.Trophies-a.Trophies;
});
console.log(sorted1);
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      {
        sorted1.map(val=>{
          return(
            <Carousel.Item>
              <img
                  className="d-block w-100"
                    src={val.src}
              alt="First slide"
              />
              <Carousel.Caption>
                <h5>{val.name}</h5>
                <p>They have {val.Trophies} trophies</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default DarkVariantExample;