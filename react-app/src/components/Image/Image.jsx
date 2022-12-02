import styled from "styled-components"

const Container = styled.div`
display: flex;    
    gap: 10px;
    justify-content: space-between;
`;
const Photo = styled.img`
    height: 387px;
    margin-top: 30px;
    @media (max-width: 1499px) {
        height: 272px;
    }
`;


function Image() {
    return (
        <Container>
            <Photo src="./img/image-1.webp" className="product-img" alt="Первая картинка" />
            <Photo src="./img/image-2.webp" className="product-img" alt="Вторая картинка" />
            <Photo src="./img/image-3.webp" className="product-img" alt="Третья картинка" />
            <Photo src="./img/image-4.webp" className="product-img" alt="Четвертая картинка" />
            <Photo src="./img/image-5.webp" className="product-img" alt="Пятая картинка" />
        </Container>
    )
}

export default Image;