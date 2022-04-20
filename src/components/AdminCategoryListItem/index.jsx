import { FaTrash, FaPen } from "react-icons/fa";
import "./style.scss";

export function AdminCategoryListItem({ data, onEdit, onDelete }) {
  let id, nome;
  if (data) {
    id = data.id;
    nome = data.nome;
  }

  const handleEdit = () => {
    onEdit && onEdit(data);
  };

  const handleDelete = () => {
    onDelete && onDelete(data);
  };

  return (
    <li className="admin-category-list-item">
      <div>
        <div className="info-container">
          <span className="label">Código:</span>
          <span className="value">{id}</span>
        </div>
        <div className="info-container name">
          <span className="label">Nome:</span>
          <span className="value">{nome}</span>
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