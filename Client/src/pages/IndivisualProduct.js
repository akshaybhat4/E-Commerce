import {Add, Remove, ArrowDropDownCircleRounded, AutorenewRounded, BeenhereRounded, LocalOfferRounded, PaymentRounded,  ShoppingCartRounded,  StarBorderRounded } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useLocation, useNavigate} from 'react-router-dom'
//import { Kurtas } from '../components/data'
import { publicRequest } from '../components/requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    padding-top : 75px;
`
const Wrapper = styled.div`
    display : flex;
`
const Left = styled.div`
    flex : 1.2;
`
const Right = styled.div`
    flex : 1.7;
`
const ImageContainer = styled.div`
    padding-left : 70px;
`
const Options = styled.div`
    display : flex;
    padding : 12px;
    align-items: center;
`
const Cart = styled.button`
    background-color : #fcb530;
    padding : 12px;
    cursor : pointer;
    display: flex;
    align-items: center;
    justify-content : center;
    margin : 5px 5px 5px 0px;
    width : 50%;
    border-radius : 3px;
    font-weight : 500;
    border : none;
    color : white;
    font-size : 16px;
`
const Buy = styled.button`
    background-color : #f76425;
    padding : 12px;
    cursor : pointer;
    justify-content : center;
    display: flex;
    align-items: center;
    margin : 5px;
    border-radius : 3px;
    width : 50%;
    font-weight : 500;
    border : none;
    color : white;
    font-size : 16px;
`
const IconColor = styled.div`
   padding-right : 7px;
   color : white;
`
const Image = styled.img`
    height : 90%;
    width : 90%;
`
const InfoContainer = styled.div``
const Brand = styled.div`
padding : 5px;
color : gray;
font-size : 16px;
font-weight : 500;
`
const Title = styled.div`
padding : 5px;
font-size : 17px;
font-weight : 500;
`
const Subtitle = styled.div`
padding : 5px;
color : green;
font-size : 15px;
font-weight : 500;
`
const Price = styled.span`
padding : 5px;
font-weight : 600;
font-size : 30px;
`
const BaseP = styled.span`
padding : 5px;
text-decoration : line-through;
color : gray;
font-weight : 500;
`
const Offers = styled.span`
padding : 5px;
color : green;
font-weight : 600;
`
const Stock = styled.span`
padding : 5px;
color : red;
font-weight : 600;
font-size : 14px;
`

const Rating = styled.span`
    display : inline-flex;
    padding : 3px;
    margin : 5px;
    border : 1px solid green;
    border-radius : 25px;
    background-color : green;
    color : white;
    font-weight : 500;
    font-size : 16px;
`
const Review = styled.span`
    padding : 5px;
    color : gray;
    font-size : 17px;
    font-weight : 500;
`
const Coupen = styled.div`
padding : 10px 0px 10px 5px;
font-size : 17px;
font-weight : 500;
`
const OuterCoupon = styled.div`
padding : 10px 0px 10px 5px;
`
const Coupon = styled.div`
display : flex;
padding : 2px 0px 2px 0px;
`
const Span1 = styled.span`
    font-size : 14px;
    padding : 0px 5px 0px 5px;
    font-weight : 600;
`
const Span2 = styled.span`
font-size : 14px;
`
const Offer = styled.div`
padding : 10px 0px 10px 5px;
font-size : 17px;
font-weight : 500;
`
const Tag = styled.span`
    color : green;
`
const DeliveryIn = styled.div`
    font-size : 14px;
    padding : 10px;
    font-weight : 600;
`
const Services = styled.div`
    display: flex;
`
const Service = styled.div`
    font-size : 14px;
    padding : 10px;
    font-weight : 600;
    display: flex;
`
const ServiceTitle = styled.span`
    padding : 0px 60px 0px 180px;
    color : gray;
`
const ServiceData = styled.div`
    font-size : 13px;
    font-weight : 400;
    padding : 0px 0px 0px 10px;
`
const Span3 = styled.span`
    color : blue;
`
const Size = styled.div`
    display: flex;
    padding : 0px 0px 10px 10px;
`
const Label = styled.div`
    font-size : 15px;
    padding : 10px 20px 10px 0px;
    font-weight : 600;
    color : gray;
`
const Size1 = styled.span`
    padding : 10px;
    display : flex;
    align-items : center;
    justify-content : center;
    width : 20px;
    height : 15px;
    margin : 10px;
    font-weight : 600;
    font-size : 18px;
    cursor : pointer;
    border : 2px solid #d7d8d9;
    &:active{
        border : 2px solid blue;
    }
`
const Bottom = styled.div`
    background-color : #d7d8d9;
    padding : 10px;
`
const Content = styled.div`
    background-color : white;
    display : flex;
    justify-content : space-around;
    padding : 15px;
`
const Trending = styled.div`
display : flex;
cursor : pointer;
`
const Best = styled.div`
display : flex;
cursor : pointer;
`
const Easy = styled.div`
display : flex;
cursor : pointer;
`
const Span4  =styled.span`
    color : blue;
    border : 1px solid #f2df0a;
    border-radius : 50%;
    background-color : #f2df0a;
    align-items : center;
    margin : 4px;
    padding : 5px;
    
`
const Text1  =styled.div`
padding : 2px;
padding-left : 15px;
font-size : 16px;
width : 100%;
flex-direction: column;
font-weight : 600;

`
const Text2  =styled.div`
font-size : 14px;
padding : 2px;
font-weight : 500;
color : gray;
`
const I  =styled.span`
color : blue;
text-decoration: underline;
text-decoration-style : dotted;
`
const AddRemove = styled.div`
display : flex;
padding : 5px 5px 5px 0px;
`
const AddCon = styled.span`
margin : 4px 4px 4px 0px;
border : 1px solid #d4d4d4;
justify-content : center;
align-items: center;
border-radius : 40%;
`
const Counts = styled.span`
margin : 4px 4px;
padding : 2px 19px;
justify-content : center;
align-items: center;
border : 1px solid #d4d4d4;
`
const RemoveCon = styled.span`
margin : 4px;
border : 1px solid #d4d4d4;
justify-content : center;
align-items: center;
border-radius : 40%;
`
const IndivisualProduct = () => {
    const current = new Date(new Date().getTime()+48*60*60*1000);
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [size, setSize] = useState(null);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
  
    const handleBuy = ()=>{
        if(size){
            if(product.inStock === "Sorry!! Out of Stock"){
                alert("Sorry!! The selected product is Out of Stock");
            }
            else{
                navigate("/cart");
                dispatch(addProduct({...product, quantity, size}));
                
            }
        }else{
            alert("Please select the size before proceed");
        }
    }
    const handleCount = (type) =>{
        if(type === "asc")
          setQuantity(quantity+1);
        else
        quantity > 1 && setQuantity(quantity-1);
      };

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }catch{}
        };
        getProduct();
    },[id]);

    const handleAddCart = () => {
        if(size){
            if(product.inStock === "Sorry!! Out of Stock"){
                alert("Sorry!! The selected product is Out of Stock");
            }else{
                dispatch(addProduct({ ...product, quantity, size}));
            }
        }
        else{
            alert("Please select the size before proceed");
        }  
    };

  return (
    <Container>
        <Wrapper>
            <Left>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <Options>
                    <Cart onClick={handleAddCart}><IconColor><ShoppingCartRounded /></IconColor>ADD TO CART</Cart>
                    <Buy onClick={handleBuy}><IconColor><ArrowDropDownCircleRounded /></IconColor>BUY NOW</Buy>
                </Options>
            </Left>
            <Right>
                <InfoContainer>
                    <Brand>{product.title} </Brand>
                    <Title>{product.desc}</Title>
                    <Subtitle>Special price</Subtitle>
                    <Price>₹{product.price}</Price><BaseP>₹{product.basePrice}</BaseP><Offers>{product.offer}</Offers><Stock>{product.inStock}</Stock><br />
                    <Rating>4.2<StarBorderRounded /></Rating><Review>2215 ratings and 19 reviews</Review>
                    <Coupen>Coupons for you</Coupen>
                    <Coupon><Tag><PaymentRounded /></Tag><Span1>Special Price</Span1><Span2>Get extra 30% off upto ₹50 on 1 item(s) (price inclusive of discount) T&C</Span2></Coupon>
                    <Offer>Available offers</Offer>
                    <OuterCoupon><Coupon><Tag><LocalOfferRounded /></Tag><Span1>Special Price</Span1><Span2>Get extra 10% off (price inclusive of discount) T&C</Span2></Coupon>
                    <Coupon><Tag><LocalOfferRounded /></Tag><Span1>Partner Offer</Span1><Span2>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹150* T&C</Span2></Coupon>
                    <Coupon><Tag><LocalOfferRounded /></Tag><Span1>Bank Offer</Span1><Span2>Flat ₹50 Instant Cashback on Paytm Wallet. Min Order Value ₹500. T&C</Span2></Coupon>
                    <Coupon><Tag><LocalOfferRounded /></Tag><Span1>Bank Offer</Span1><Span2>5% Cashback on Flipkart Axis Bank Card T&C</Span2></Coupon></OuterCoupon>
                    <Services>
                        <DeliveryIn>Delivery by <I>{current.toDateString()}</I> | {product.price > 500 ? "FREE" : 40} </DeliveryIn>
                        <Service>
                            <ServiceTitle>Services</ServiceTitle>
                            <Span3><AutorenewRounded /> </Span3><ServiceData>14 Days Return Policy</ServiceData> <br />
                        </Service>
                    </Services>
                    <Size> <Label>Size</Label>
                    {product.size?.map((s,id)=>(
                        <Size1 key={id} onClick={()=>setSize(s)}> {s} </Size1>
                    ))}
                    </Size>
                  <AddRemove><Label>Quantity</Label>
                    <AddCon><Add onClick={()=>handleCount("asc")} /></AddCon>
                    <Counts>{quantity}</Counts>
                    <RemoveCon><Remove onClick={()=>handleCount("dec")} /></RemoveCon>
                </AddRemove>
                </InfoContainer>
            </Right>
        </Wrapper>
        <Bottom> 
                <Content>
                    <Trending><Span4><StarBorderRounded /></Span4><Text1>Trending Styles<Text2>from top Brands</Text2></Text1></Trending>
                    <Best><Span4><LocalOfferRounded /></Span4><Text1>Best Prices<Text2>on Top Products</Text2></Text1></Best>
                    <Easy><Span4><BeenhereRounded /></Span4><Text1>Easy Returns<Text2>on every order</Text2></Text1></Easy>
                </Content>
            </Bottom>
    </Container>
  )
}

export default IndivisualProduct
