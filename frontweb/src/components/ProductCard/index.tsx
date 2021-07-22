import './styles.css';
import Productimg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={Productimg} alt="Nome do Produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do Produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
};
export default ProductCard;
