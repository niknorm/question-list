import arrowPagionationLeft from "@/shared/assets/images/arrowPaginationLeft.svg";
import arrowPagionationRight from "@/shared/assets/images/arrowPaginationRight.svg";
import styles from "./Pagination.module.css";
import { getPaginationPages } from "@/shared/libs/getPaginationPages";
import { Button } from "../Button/Button";

interface Props {
  page: number;
  totalPage?: number
  limit?: number
  nextPage: () => void;
  prevPage: () => void
  selectPage: (page: number) => void
}

export const Pagination = ({
  page,
  totalPage = 1,
  nextPage,
  prevPage,
  selectPage,
}: Props) => {
  const pages = getPaginationPages(page, totalPage);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={page === 1}
        onClick={prevPage}
      >
        <img src={arrowPagionationLeft} />
      </button>

      {page > 3 && (
        <>
          <Button
            className={styles.pageButton}
            version="small"
            onClick={() => selectPage(1)}
          >
            1
          </Button>
          <span>...</span>
        </>
      )}

      {pages.map((p) => (
        <Button
          key={p}
          className={
            p === page
              ? `${styles.pageButton} ${styles.active}`
              : styles.pageButton
          }
          version="small"
          onClick={() => selectPage(p)}
        >
          {p}
        </Button>
      ))}

      {page < totalPage - 2 && (
        <>
          <span>...</span>
          <Button
            className={styles.pageButton}
            version="small"
            onClick={() => selectPage(totalPage)}
          >
            {totalPage}
          </Button>
        </>
      )}

      <button
        className={styles.button}
        disabled={page >= totalPage}
        onClick={nextPage}
      >
        <img src={arrowPagionationRight} />
      </button>
    </div>
  );
};