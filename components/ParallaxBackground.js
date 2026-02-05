import Background from '../public/images/background_image.jpg';

const ParallaxBackground = () => {
    const parallaxStyle = {
        backgroundImage: `url(${Background.src})`,
        minHeight: 400,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.7,
        filter: 'alpha(opacity=50)'
    };

    return (
        <div>
            <div style={parallaxStyle}></div>
        </div>
    );

}

export default ParallaxBackground;