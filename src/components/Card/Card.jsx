// import { Products } from "../../Datas";

export function Card({ props }) {
  console.log(props);
  return (
    <section>
      <p>{props.brand}</p>
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <p>Discount: {props.discount}%</p>
      <img src={props.image} alt="Product Image" />
      <p>${props.price}</p>
      <p>Rating: {props.rating}</p>
      <p>Stock: {props.stock}</p>
      {/* <button>Shop Product</button>
      <img
        src="https://www.worten.pt/i/03dfd91db61d2207e12c8caf8a3d2e68691b5268"
        alt="Image"
      />
      <p>Description</p>
      <p>Category</p>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-fill"></i>
      <i className="bi bi-star-half"></i>
      <i className="bi bi-star"></i>
      <p>Stock</p>
      <p>Brand</p>
      <p>Discount</p>
      <i className="bi bi-chat"></i> */}
    </section>
  );
}
