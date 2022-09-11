
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { removeProduct, palceOrders} from '../redux/cartRedux';
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 40px 0px 7px 0px;
    background-color: white;
    display : flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex : 2;
  padding: 30px;
`
const Title = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size : 18px;
`
const CartItem = styled.div`
display : flex;
padding : 20px;
box-shadow: 0px 10px 22px 0px #e4e3e6;
`
const Image = styled.img`
width : 120px;
height : 160px;
`
const ImageCon = styled.div`
display : flex;
flex-direction : column;
`
const Info = styled.div`
padding : 0px 15px;
`
const Name = styled.div`
padding : 5px;
font-size : 15px;
font-weight : 500;
`
const Size = styled.div`
padding : 5px;
color : gray;
font-weight : 500;
font-size : 15px;
`
const Brand = styled.div`
padding : 5px;
color : #445063;
font-weight : 500;
font-size : 15px;
`
const Color = styled.div`
padding : 5px;
color : gray;
font-weight : 400;
font-size : 15px;
`
const OriginalPrice = styled.span`
padding : 5px;
color : gray;
font-weight : 400;
text-decoration : line-through;
`
const Price = styled.span`
padding : 5px;
font-weight : 600;
font-size : 20px;
`
const Offer = styled.span`
padding : 5px;
color : green;
font-weight : 500;
`
const RemoveButton = styled.button`
padding: 5px;
margin : 15px;
font-weight: 500;
font-size : 16px;
cursor : pointer;
border : none;
&:hover {
  transform : scale(1.01);
  color : blue;
}
`
const PlaceOrder = styled.div`
background-color : #f76425;
padding: 12px;
cursor : pointer;
display: flex;
justify-content: center;
align-items: center;
margin : 5px;
width : 25%;
border-radius : 3px;
font-weight : 500;
border : none;
color : white;
font-size : 16px;
&:hover {
  transform : scale(1.01);
}
`
const LeftBottom = styled.div`
display : flex;
justify-content : space-between;
`
const DeliveryIn = styled.div`
    font-size : 14px;
    padding : 10px;
    color : green;
    font-weight : 600;
`
const Right = styled.div`
  padding : 60px;
  flex : 1;
`
const HeaderName = styled.div`
padding : 10px 5px;
font-weight: 600;
font-size : 17px;
color : gray;
`
const TotalPrice = styled.div`
padding : 10px 5px;
font-size : 15px;
font-weight : 500;
margin : auto;
`
const TotalPay = styled.div`
padding : 10px 5px;
font-weight: 700;
font-size : 18px;
margin: auto;
`
const TotalSave = styled.div`
padding : 10px 5px;
font-size : 16px;
font-weight : 500;
color : green;
margin : auto;
`
const Container = styled.div`
display : flex;
`
const Quantity = styled.div`  
padding : 5px 5px 5px 150px;
margin : auto;
font-size : 15px;
font-weight : 500;
color : green;
`
const HR = styled.hr`
background-color: #dce0e6;
border: none;
height: 1px;
`
const Bill = styled.span`
padding : 10px 5px;
margin : auto;
font-size : 15px;
font-weight : 500;
`
const Bill1 = styled.span`
padding : 35px;
font-size : 18px;
margin : auto;
font-weight : 700;
`
const JSX = styled.div`
align-items : center;
justify-content : center;
display: block; margin-left: auto; margin-right: auto;
`
const NoItem = styled.h2`
color : green;
`
const Button = styled.button`
background-color : #f76425;
padding: 12px;
cursor : pointer;
display: flex;
justify-content: center;
align-items: center;
margin : 5px;
width : 75%;
border-radius : 3px;
font-weight : 500;
border : none;
color : white;
font-size : 16px;
&:hover {
  transform : scale(1.01);
}
`
const Error = styled.span`
color : red;
padding-top : 10px;
font-weight : 600;
font-size : 17px;
`

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const quan = cart.quantity;

  const removeHandler = (product)=> {
    dispatch(removeProduct(product));
  }

  const handleQuantity = ()=>{
      dispatch(palceOrders(cart.products.length));
  }

  const current = new Date(new Date().getTime()+48*60*60*1000);

  return (
      <Wrapper>
        <Left>
          <Title>My Cart</Title>
          {cart.products.map((product) => (
          <CartItem key={product._id}>
            <ImageCon>
              <Image src={product.img} />
            </ImageCon>
            <Info>
              <Container>
                <Name>{product.desc}</Name> 
                <Quantity>Quantity: {product.quantity}</Quantity>
              </Container>
              <Brand>Brand : {product.title}</Brand>
              <Size>Size : {product.size}</Size>              
              <Color>Color : {product.color}</Color>
              <OriginalPrice>₹{product.basePrice*product.quantity}</OriginalPrice>
              <Price>₹{product.price*product.quantity}</Price>
              <Offer> {product.offer}</Offer><br />
              <RemoveButton onClick={()=>removeHandler(product)} >Remove</RemoveButton>
            </Info>
          </CartItem>
          ))}
          {quan ?
          <LeftBottom>
            <DeliveryIn>Delivery by {current.toDateString()}| {cart.Delivery}</DeliveryIn>
            {user ? <PlaceOrder onClick={()=>{navigation('/order'); handleQuantity()}}>PLACE ORDER</PlaceOrder> : 
            <Error>Please login to Continue..!!</Error>}
          </LeftBottom> :
          <JSX>
            <NoItem>Opps!! Cart Is Empty...</NoItem>
            <Link to="/" style={{textDecoration : "none"}}><Button >Continue Shopping</Button></Link> 
          </JSX> 
           }         
        </Left>
        {quan ?
        <Right><HR />
            <HeaderName>PRICE DETAILS</HeaderName><HR />
            <Container><TotalPrice> Price ( {cart.quantity} items) </TotalPrice><Bill>₹{cart.OriginalPrice}</Bill></Container>
            <Container><TotalPrice> Total Discounts </TotalPrice> <TotalSave>₹{cart.Discout}</TotalSave></Container>
            <Container><TotalPrice> Delivery Charges </TotalPrice> <TotalSave>{cart.Delivery}</TotalSave></Container><HR />
            <Container><TotalPay> Total Amount <Bill1>₹{cart.Sum}</Bill1></TotalPay></Container><HR />
            <TotalSave>You will save ₹{cart.Discout} on this order </TotalSave><HR />
        </Right> : 'none'}
    </Wrapper>
  );
};

export default Cart;