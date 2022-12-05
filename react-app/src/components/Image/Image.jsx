import styled from "styled-components"

const Container = styled.div`    
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;
const Photo1 = styled.img`
height: 387px;
margin-top: 30px;
@media (min-width: 1024px) and (max-width: 1499px) {
    height: 272px;
}
@media (min-width: 360px) and (max-width: 1023px) {
    height: 272px;
    margin-top: 20px;
}
`;

const Photo2 = styled.img`
height: 387px;
margin-top: 30px;
@media (min-width: 1024px) and (max-width: 1499px) {
    height: 272px;
}
@media (min-width: 360px) and (max-width: 1023px) {
    margin-top: 20px;
    height: 272px;
    width: 126px;
}
`;

const Photo3 = styled.img`
height: 387px;
margin-top: 30px;
@media (min-width: 1024px) and (max-width: 1499px) {
    height: 272px;
}

@media (min-width: 360px) and (max-width: 1023px) {
    display: none;
}
`;

const Photo4 = styled.img`
height: 387px;
margin-top: 30px;
@media (min-width: 1024px) and (max-width: 1499px) {
    height: 272px;
}

@media (min-width: 360px) and (max-width: 1023px) {
    display: none;
}
`;

const Photo5 = styled.img`
height: 387px;
margin-top: 30px;
@media (min-width: 1024px) and (max-width: 1499px) {
    height: 272px;
}

@media (min-width: 360px) and (max-width: 1023px) {
    display: none;
}
`;


function Image() {
    return (
        <Container>
            <Photo1 src="./img/image-1.webp" className="product-img" alt="Первая картинка" />
            <Photo2 src="./img/image-2.webp" className="product-img" alt="Вторая картинка" />
            <Photo3 src="./img/image-3.webp" className="product-img" alt="Третья картинка" />
            <Photo4 src="./img/image-4.webp" className="product-img" alt="Четвертая картинка" />
            <Photo5 src="./img/image-5.webp" className="product-img" alt="Пятая картинка" />
        </Container>
    )
}

export default Image;