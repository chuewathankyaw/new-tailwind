import { images } from './Imgarr';
const ImgSlider = () => {
    return (
        <>

            <div className="slider bodyslider">
                <div className="slide-track">
                    {images.map((data) => (
                        <div className="slide">
                            <img src={data.img} alt="img1" />
                        </div>
                    )
                    )}
                </div>
            </div>

        </>
    );
};
export default ImgSlider;