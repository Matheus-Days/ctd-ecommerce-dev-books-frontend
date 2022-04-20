import NumberFormat from "react-number-format";
import { FaCheck } from "react-icons/fa";
import "./style.scss";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { currencyFormatter } from "../../utils/currencyFormatter";

export function ProductForm({ data, onClose }) {
  const [id] = useState(data?.id);
  const [title, setTitle] = useState(data?.title || "");
  const [author, setAuthor] = useState(data?.author || "");
  const [publishingCompany, setIdPublishingCompany] = useState(
    data?.publishingCompany || ""
  );
  const [price, setPrice] = useState(data?.price * 100 || 0);
  const [category, setCategory] = useState(data?.category);
  const [image, setImage] = useState(data?.image || "");
  const [description, setDescription] = useState(data?.description || "");
  const [categoriesList, setCategoriesList] = useState([]);
  const [disableForm, setDisableForm] = useState(false);

  useEffect(() => {
    if (!title || !author || !price || !category) {
      setDisableForm(true);
    } else {
      setDisableForm(false);
    }
  }, [title, author, publishingCompany, price, category]);

  useEffect(() => {
    useApi
      .get("categories")
      .then((res) => {
        if (res.data?.content) {
          setCategoriesList(res.data.content);
        }
      })
      .catch((e) => e);
  }, []);

  const updateProduct = (product) => {
    useApi
      .put(`/products/${product.id}`, product)
      .then((_) => {
        alert("Produto alterado com sucesso!");
        onClose({ update: true });
      })
      .catch((e) => console.log(e));
  };

  const insertProduct = (product) => {
    useApi
      .post("/products", product)
      .then((_) => {
        alert("Produto criado com sucesso!");
        onClose({ update: true });
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id,
      title,
      author,
      publishingCompany,
      price: price / 100,
      category: category,
      image,
      description,
    };

    data ? updateProduct(product) : insertProduct(product);
  };

  const handleReset = () => {
    onClose && onClose();
  };

  const handleCategoryChange = (e) => {
    const selectedId = Number(e.target.value);
    const selectedCat = categoriesList.find((cat) => cat.id === selectedId);
    setCategory(selectedCat);
  };

  return (
    <form id="product-form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="fields">
        <label htmlFor="id">cód.</label>
        <input type="text" id="id" name="id" value={id} disabled />
        <label htmlFor="title">Título *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Autor *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="publishingCompany">Editora *</label>
        <input
          type="text"
          id="publishingCompany"
          name="publishingCompany"
          value={publishingCompany}
          onChange={(e) => setIdPublishingCompany(e.target.value)}
        />
        <label htmlFor="price">Preço *</label>
        <NumberFormat
          id="price"
          displayType="input"
          type="text"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          format={currencyFormatter}
          onValueChange={(e) => setPrice(e.value)}
          value={price}
        />
        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="category">Categoria *</label>
        <select
          name="category"
          id="category"
          value={category?.id || 0}
          onChange={handleCategoryChange}
        >
          <option value={0} disabled>
            Selecione uma categoria
          </option>
          {categoriesList.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="btns-container">
        <button type="reset">Cancelar</button>
        <button
          type="submit"
          disabled={disableForm}
          title={disableForm ? "Campo(s) obrigatório(s) pendente(s)." : ""}
        >
          <span>Salvar</span>
          <FaCheck />
        </button>
      </div>
    </form>
  );
}
