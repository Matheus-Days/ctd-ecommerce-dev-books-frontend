import "./style.scss"

export function HomeBanner({ image }) {
    return (
        <div
        className= "container-banner"
        >
            <img 
                src={image} 
                className= "container-banner__image"
                alt="Imagem do container"
            />
        </div>
    )
};
