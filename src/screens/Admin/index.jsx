import { CategoriesList } from "../../components/CategoriesList";
import { ProductsList } from "../../components/ProductsList";
import "./style.scss";

export function Admin() {
  return (
    <div id="admin">
      <ProductsList />
      <CategoriesList />
    </div>
  );
}
