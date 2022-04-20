import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Modal } from "react-bootstrap";

import { Paginator } from "../../components/Paginator";

import headingBackground from "../../assets/heading-background.svg";
import { ProductForm } from "../ProductForm";
import "./style.scss";
import { useApi } from "../../hooks/useApi";
import { AdminProductListItem } from "../AdminProductListItem";

export function ProductsList() {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isCreating, setIsCreating] = useState(true);
  const [productsArr, setProductsArr] = useState([]);
  const [productsPage, setProductsPage] = useState([]);
  const [editingProduct, setEditingProduct] = useState({});

  const doesHaveNextPage = (array = [], page = 1) => {
    const lastPage = Math.ceil(array.length / 10);
    
    return page < lastPage;
  }

  const getProducts = (page = 1) => {
    useApi
      .get("/products")
      .then((res) => {
        if (res?.data) {
          setProductsArr(res.data);
          setPage(page);
        }
      })
      .catch((e) => e);
  }

  useEffect(getProducts, []);

  useEffect(() => {
    if(doesHaveNextPage(productsArr, page)) {
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }

    const lastPage = Math.ceil(productsArr.length / 10);
    if(page > lastPage) {
      setPage(lastPage);
      setProductsPage(productsArr.slice((lastPage - 1) * 10, lastPage * 10))
    } else {
      setProductsPage(productsArr.slice((page - 1) * 10, page * 10));
    }
  }, [page, productsArr])

  const handlePageChange = (change) => {
    if (page + change === 0) return;

    setPage(page + change);
  };

  const handleFormClose = ({ update } = { update: false }) => {
    setShowForm(false);
    update && getProducts(page);
  };

  const handleCreateNewItem = async () => {
    setEditingProduct(null)
    setIsCreating(true);
    setShowForm(true);
  };

  const handleEdit = (data) => {
    setEditingProduct(data);
    setIsCreating(false);
    setShowForm(true);
  };

  const handleDelete = (data) => {
    const continueDeletion = window.confirm(`Tem certeza de que deseja excluir o produto "${data.title}"?`);
    if(continueDeletion)
      useApi
        .delete(`/products/${data.id}`)
        .then( _ => {
          getProducts(page);
          alert("Produto excluído com sucesso!")
        })
        .catch(e => e);
  };

  return (
    <div id="products-list">
      <div className="heading-container">
        <h2>Produtos</h2>
        <img src={headingBackground} alt="" />
      </div>
      <button className="add-btn" onClick={handleCreateNewItem}>
        <FaPlusCircle className="plus-icon" />
        <span>Criar novo</span>
      </button>
      <div className="list-headers">
        <span className="list-header">cód.</span>
        <span className="list-header">Título</span>
        <span className="list-header">Editora</span>
        <span className="list-header">Preço</span>
      </div>
      <ul>
        {productsPage.map((data) => (
          <AdminProductListItem
            key={data.id}
            data={data}
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
        className="product-form-modal"
        show={showForm}
        onHide={handleFormClose}
        centered
      >
        <Modal.Header>
          <span className="form-heading">
            <p>{isCreating ? "Criar " : "Editar "}produto</p>
            <img src={headingBackground} alt="" />
          </span>
          <button className="close-btn" onClick={handleFormClose}>
            <ImCross />
          </button>
        </Modal.Header>
        <Modal.Body>
          <ProductForm onClose={handleFormClose} data={editingProduct} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
