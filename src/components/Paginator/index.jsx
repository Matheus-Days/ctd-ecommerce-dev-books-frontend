import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.scss";

export function Paginator({page, onPageChange, hasNextPage}) {
  
  const handlePrevClick = () => {
    onPageChange(-1);
  }

  const handleNextClick = () => {
    onPageChange(1);
  }
  
  return (
    <div className="paginator">
      <button disabled={page === 1} className="prev-btn" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <span className="page-number">{page}</span>
      <button disabled={!hasNextPage} className="next-btn" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  );
}
