interface Props {
  items: string[];
}
const Cart = ({ items }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.map((item) => (
          <li>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
