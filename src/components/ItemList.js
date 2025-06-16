const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-b-2 text-left">
            <div>
                <span className="font-bold">{item.card.info.name} </span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
