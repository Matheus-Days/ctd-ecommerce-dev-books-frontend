import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import headingBackground from "../../assets/heading-background.svg";
import { CategoryForm } from "../CategoryForm";
import { CategoryListItem } from "../CategoryListItem";
import { Paginator } from "../Paginator";
import "./style.scss";
import { ImCross } from "react-icons/im";
import { useApi } from "../../hooks/useApi";

export function CategoriesList() {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isCreating, setIsCreating] = useState(true);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [categoriesPage, setCategoriesPage] = useState([]);
  const [editingCategory, setEditingCategory] = useState({});

  const doesHaveNextPage = (array = [], page = 1) => {
    const lastPage = Math.ceil(array.length / 10);
    
    return page < lastPage;
  }

  const getCategories = (page = 1) => {
    useApi
      .get("/categories")
      .then((res) => {
        if (res?.data) {
          setCategoriesArr(res.data.content);
          setPage(page);
        }
      })
      .catch((e) => e);
  }

  useEffect(getCategories, []);

  useEffect(() => {
    if(doesHaveNextPage(categoriesArr, page)) {
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }

    const lastPage = Math.ceil(categoriesArr.length / 10);
    if(page > lastPage) {
      setPage(lastPage);
      setCategoriesPage(categoriesArr.slice((lastPage - 1) * 10, lastPage * 10))
    } else {
      setCategoriesPage(categoriesArr.slice((page - 1) * 10, page * 10));
    }
  }, [page, categoriesArr])

  const handlePageChange = (change) => {
    if (page + change === 0) return;

    setPage(page + change);
  };

  const handleFormClose = ({ update } = { update: false }) => {
    setShowForm(false);
    update && getCategories(page);
  };

  const handleCreateNewItem = async () => {
    setEditingCategory(null);
    setIsCreating(true);
    setShowForm(true);
  };

  const handleEdit = (data) => {
    setEditingCategory(data);
    setIsCreating(false);
    setShowForm(true);
  };

  const handleDelete = (data) => {
    const continueDeletion = window.confirm(`Tem certeza de que deseja excluir a categoria "${data.nome}"?`);
    if(continueDeletion)
      useApi
        .delete(`/categories/${data.id}`)
        .then( _ => {
          getCategories(page);
          alert("Categoria excluída com sucesso!")
        })
        .catch(e => {
          if(e.response.status === 500) {
            alert("É preciso excluir ou alterar a categoria de todos os produtos desta categoria antes de excluí-la.");
          } else {
            alert("Houve um erro durante a exclusão, tente novamente.")
          }
        });
  };

  return (
    <div id="categories-list">
      <div className="heading-container">
        <h2>Categorias</h2>
        <img src={headingBackground} alt="" />
      </div>
      <button className="add-btn" onClick={handleCreateNewItem}>
        <FaPlusCircle className="plus-icon" />
        <span>Criar nova</span>
      </button>
      <div className="list-headers">
        <span className="list-header">cód.</span>
        <span className="list-header">Nome</span>
      </div>
      <ul>
        {categoriesPage.map((cat) => (
          <CategoryListItem
            key={cat.id}
            data={cat}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <div className="paginator-container">
        <Paginator
          page={page}
          onPageChange={handlePageChange}
          hasNextPage={hasNextPage}
        />
      </div>
      <Modal
        className="category-form-modal"
        show={showForm}
        onHide={handleFormClose}
        centered
      >
        <Modal.Header>
          <span className="form-heading">
            <p>{isCreating ? "Criar " : "Editar "}categoria</p>
            <img src={headingBackground} alt="" />
          </span>
          <button className="close-btn" onClick={handleFormClose}>
            <ImCross />
          </button>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm
            onClose={handleFormClose}
            data={editingCategory}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
