import { IoMdStar } from "react-icons/io";

function MenuListingItem({ img, name, description, price, discount, rating }) {
  return (
    <div className="menu-listing-item">
      <div className="menu-item-img">
        <img src={img} />
        <div className="menu-item-discount-rating">
          <p className="menu-item-discount">{discount}%</p>
          <p className="menu-item-rating">
            <IoMdStar />
            {rating}
          </p>
        </div>
      </div>
      <div className="menu-item-name-description-price">
        <p className="menu-item-name">{name}</p>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">${price}</p>
      </div>
    </div>
  );
}

function MenuListing({ data }) {
  return (
    <div className="menu-listing">
      {data.map((item, index) => {
        const { img, name, description, price, discount, rating } = item;
        return (
          <MenuListingItem
            key={index}
            img={img}
            name={name}
            description={description}
            price={price}
            discount={discount}
            rating={rating}
          />
        );
      })}
    </div>
  );
}

export default MenuListing;
