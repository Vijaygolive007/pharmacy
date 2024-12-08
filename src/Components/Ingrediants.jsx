import '../Css/Ingerdiants.css'
import image1 from '../assets/h2-b1.png'
import image2 from '../assets/bn2-2.png'
import image3 from '../assets/bn2-3.png'
import image4 from '../assets/bn2-4.png'
import image5 from '../assets/bn2-5.png'
import image6 from '../assets/h2-b4.png'

export const Ingrediants = () => {
  return (
    <div className='d-flex flex-wrap gap-2 flex-{grow|shrink}-1 p-1 container-images'>
        <div className='p-3 text-container-ingrediants'>
            <p className='content-ingre fw-bold'>INGREDIENTS</p>
            <h2 className='content-heading fw-bolder'>Better Ingredients</h2>
            <p className='content'>Only the best when you choose products offered on offered on our platform - high-quality <br /> ingredients for high quality products!</p>
        </div>
        <div className='img-container'>
          <img className='ingre-images' src={image1} alt="" />
          <div className='img-text'>
            <h2 className='fw-bold img-heading'>Vitamin C</h2>
            <p className='text-inimg'>Vitamin C as ascorbic acid</p>
          </div>
          <div className='anchor'>
            <a href="#">SEE MORE</a>
          </div>
        </div>

        <div className='img-container'>
          <img className='ingre-images' src={image2} alt="" />
          <div className='img-text'>
            <h2 className='fw-bold img-heading'>Vitamin B3</h2>
            <p className='text-inimg'>Niacin for healthy gut and skin</p>
          </div>
          <div className='anchor'>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className='img-container'>
          <img className='ingre-images' src={image3} alt="" />
          <div className='img-text'>
            <h2 className='fw-bold img-heading'>Magnesium</h2>
            <p className='text-inimg'>Boost energy and support muscle function</p>
          </div>
          <div className='anchor'>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className='img-container'>
          <img className='ingre-images' src={image4} alt="" />
          <div className='img-text'>
            <h2 className='fw-bold img-heading'>Hyaluronic Acid</h2>
            <p className='text-inimg'>For smooth, supple and soft skin!</p>
          </div>
          <div className='anchor'>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <div className='img-container'>
          <img className='ingre-images' src={image5} alt="" />
          <div className='img-text'>
            <h2 className='fw-bold img-heading'>Lactobacillus</h2>
            <p className='text-inimg'>Invigorate your gut microbiome</p>
          </div>
          <div className='anchor'>
            <a href="#">SEE MORE</a>
          </div>
        </div>
        <img className='img-2' src={image6} alt="" />
    </div>
  )
}
