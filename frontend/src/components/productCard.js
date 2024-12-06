import {Link} from 'react-router-dom';

export default function ProductCard({product}){
    return <div class="col-sm-12 col-md-6 col-lg-3 my-3">
    <div class="card p-3 rounded">
      <img
        class="card-img-top mx-auto"
        src={product.images[0].image}
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">
        <Link to={"/product/"+product._id}>{product.name}</Link>
        </h5>
        <div class="ratings mt-auto">
          <div class="rating-outer">
            <div class="rating-inner" style={{width:`${product.ratings/5 * 100}%`}}></div>
          </div>
        </div>
        <p class="card-text">{product.price}</p>
        <Link to={"/product/"+product._id} id="view_btn" class="btn btn-block">View Details</Link>
      </div>
    </div>
  </div>
}