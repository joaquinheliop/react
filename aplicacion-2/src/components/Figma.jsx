import styled from "styled-components"


export default function MyComponent(props) {
    return (
        <Div>
            <Div2>
                <picture>
                    <source
                        srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523"
                        type="image/webp"
                    />

                    <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523"
                        srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9469c9601b254df5b097814b7fa0a523"
                    />
                </picture>

                <Imagesizer className="builder-image-sizer" />
            </Div2>
            <Div3>Texto1</Div3>
            <Div4>Texto2</Div4>
        </Div>
    );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  justify-content: center;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.25);
  padding-top: 22px;
  padding-bottom: 22px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: rgba(255, 255, 255, 1);
`;

const Div2 = styled.div`
  display: flex;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  max-width: 100px;
  width: 100px;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Imagesizer = styled.div`
  width: 100%;
  padding-top: 100%;
  pointer-events: none;
  font-size: 0;
`;

const Div3 = styled.div`
  max-width: 66px;
  margin-top: 7px;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  letter-spacing: 0%;
  text-align: center;
  font-family: Open Sans, sans-serif;
`;

const Div4 = styled.div`
  max-width: 56px;
  margin-top: 7px;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  letter-spacing: 0%;
  text-align: center;
  font-family: Open Sans, sans-serif;
`;