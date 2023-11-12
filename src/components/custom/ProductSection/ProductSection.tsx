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

  const [itemAccount, setItemAccount] = useState(0);
  const [currentImageLg, setCurrentImageLg] = useState(listImageLg[0]);
  const [currentImageSm, setCurrentImageSm] = useState(listImageSm[0]);

  const selectImage = (image:string) => {

    setCurrentImageLg(listImageLg[listImageSm.indexOf(image)])
    setCurrentImageSm(image)
  }

  const handleItemAccount = (operation:number) => {
    
    switch (operation) {
      case 0:
        if(itemAccount > 0 && itemAccount <= 10){
          setItemAccount(itemAccount - 1);
          
        }
      break;
      case 1:
        if(itemAccount >= 0 && itemAccount < 10){
          setItemAccount(itemAccount + 1);
        }
      break;
    
      default:
        break;
    }
    
    
    
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
              <h3>SNEAKER COMPANY</h3>
              <h2>Fall Limited Edition Sneakers</h2>
              
              <p>
                These low-profile sneakers are your perfect casual wear companion.
                featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
              </p>
               
               <div className='acount-sale'>
                <div>
                  <span className='price-discount'>$125.00</span>
                  <span className='percentage'>50%</span>  
                </div>
                <span  className='real-price'>$250.00</span>
               </div>

                <div className='count-add-card'>
                  <div className='count'>
                    <span className='orange-text' onClick={()=> handleItemAccount(0)} >−</span>
                    <span>{itemAccount} </span>
                    <span className='orange-text' onClick={()=> handleItemAccount(1)} >+</span>
                  </div>
                  <button>🛒 Add to cart</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProductoPage