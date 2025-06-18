import { FaChampagneGlasses } from "react-icons/fa6";
import { GiHotSpices, GiWrappedSweet } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuPizza, LuSalad } from "react-icons/lu";

function MenuCategoryItem({ name, icon }) {
  return (
    <>
      <p className="category-item">
        {icon}
        {name}
      </p>
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <div className="header-menucategory">
        <MenuCategoryItem name="All" icon={<IoFastFoodOutline />} />
        <MenuCategoryItem name="Drinks" icon={<FaChampagneGlasses />} />
        <MenuCategoryItem name="Pizza" icon={<LuPizza />} />
        <MenuCategoryItem name="salad" icon={<LuSalad />} />
        <MenuCategoryItem name="spicy" icon={<GiHotSpices />} />
        <MenuCategoryItem name="Sweets" icon={<GiWrappedSweet />} />
      </div>
      <button className="header-cta-btn">View All</button>
    </header>
  );
}
export default Header;
