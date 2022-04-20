import { FaTrash, FaPen } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { currencyFormatter } from "../../utils/currencyFormatter";
import "./style.scss";

export function ProductListItem({ data, onEdit, onDelete }) {
  let id, title, publishingCompany, price;
  if(data) {
    id = data.id;
    title = data.title;
    publishingCompany = data.publishingCompany;
    price = data.price * 100;
  }

  const handleEdit = () => {
    onEdit && onEdit(data);
  }

  const handleDelete = () => {
    onDelete && onDelete(data)
  }

  return (
    <li className="product-list-item">
      <div>
        <div className="info-container">
          <span className="label">Código:</span>
          <span className="value">{id}</span>
        </div>
        <div className="info-container">
          <span className="label">Título:</span>
          <span className="value">{title}</span>
        </div>
        <div className="info-container">
          <span className="label">Editora:</span>
          <span className="value">{publishingCompany}</span>
        </div>
        <div className="info-container">
          <span className="label">Preço:</span>
          <NumberFormat
            className="value"
            displayType="text"
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            format={currencyFormatter}
            value={price}
          />
        </div>
        <div className="btns-container">
          <button className="edit-btn" onClick={handleEdit}>
            <FaPen />
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
}
