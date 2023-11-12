import { useState } from 'react'
import './ProductSection.scss'

//  small images
import smImage1 from '../../../assets/images/image-product-1-thumbnail.jpg';
import smImage2 from '../../../assets/images/image-product-2-thumbnail.jpg';
import smImage3 from '../../../assets/images/image-product-3-thumbnail.jpg';
import smImage4 from '../../../assets/images/image-product-4-thumbnail.jpg';

//  big images
import lgImage1 from '../../../assets/images/image-product-1.jpg';
import lgImage2 from '../../../assets/images/image-product-2.jpg';
import lgImage3 from '../../../assets/images/image-product-3.jpg';
import lgImage4 from '../../../assets/images/image-product-4.jpg';


const ProductoPage = () => {

  
  const listImageSm = [smImage1, smImage2, smImage3, smImage4];
  const listImageLg = [lgImage1, lgImage2, lgImage3, lgImage4]; 

  const [currentImageLg, setCurrentImageLg] = useState(listImageLg[0]);
  const [currentImageSm, setCurrentImageSm] = useState(listImageSm[0]);

  const selectImage = (image:string) => {

    setCurrentImageLg(listImageLg[listImageSm.indexOf(image)])
    setCurrentImageSm(image)
  }
  
  return (
    <div className='product-section-container'>
        
        <div className='left-product'>
            <div className='images-wrapper'>
              <div className='img-main'>
                <img src={currentImageLg} alt="" className='main-image'/>
              </div>
              <div className='img-slicer'>
                {
                 listImageSm && listImageSm.map((current,index) =>{
                    return (
                      <img src={current} onClick={() => selectImage(current)} alt="" key={index}  className={current === currentImageSm ? "selected small-image" : "small-image"} />
                    )
                 }) 
                }
                
              </div>
            </div>
        </div>

        <div className='right-product'>
            <div className='description-wrapper'>
              <h3>SNEAJER COMPANY</h3>
              <h2>Fall Limited Edition Sneakers</h2>
               
            </div>
        </div>
    </div>
  )
}

export default ProductoPage