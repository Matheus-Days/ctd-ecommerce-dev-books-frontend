import { FaCheck } from "react-icons/fa";
import "./style.scss";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export function CategoryForm({ data, onClose }) {
  const [id] = useState(data?.id);
  const [nome, setNome] = useState(data?.nome || "");
  const [image, setImage] = useState(data?.image || "");
  const [disableForm, setDisableForm] = useState(false);

  useEffect(() => {
    if (!nome) {
      setDisableForm(true);
    } else {
      setDisableForm(false);
    }
  }, [nome]);

  const updateCategory = (category) => {
    useApi
      .put(`/categories/${category.id}`, category)
      .then((_) => {
        alert("Categoria alterada com sucesso!");
        onClose({ update: true });
      })
      .catch((e) => console.log(e));
  };

  const insertCategory = (category) => {
    useApi
      .post("/categories", category)
      .then((_) => {
        alert("Categoria criada com sucesso!");
        onClose({ update: true });
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = {
      id,
      nome,
      image,
    };

    data ? updateCategory(category) : insertCategory(category);
  };

  const handleReset = () => {
    onClose && onClose();
  };

  return (
    <form id="category-form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="fields">
        <label htmlFor="id">cód.</label>
        <input type="text" id="id" name="id" value={id} disabled />
        <label htmlFor="title">Nome *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="author">Url da image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="btns-container">
        <button type="reset">Cancelar</button>
        <button
          disabled={disableForm}
          title={disableForm ? "Nome é obrigatório." : ""}
          type="submit"
        >
          <span>Salvar</span>
          <FaCheck />
        </button>
      </div>
    </form>
  );
}
