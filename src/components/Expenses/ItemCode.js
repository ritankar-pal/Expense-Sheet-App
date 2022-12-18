function ItemCode(props) {
  const productId = props.code;
  const title = props.title;
  const amt = props.amount;

  return (
    <div className="expense-item_description">
      <span>{`Product ID: ${productId}`}</span>

      <h2>{title}</h2>
      
      <div className="expense-item_price">{`$ ${amt}`}</div>
    </div>
  );
}

export default ItemCode;
