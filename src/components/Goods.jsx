function Goods({ goods }) {

  const goodsList = goods.map((good, index) => (
    <div className="goods-item" key={index}>
      {good}
    </div>
  ));
  return goodsList;
}

export default Goods;
