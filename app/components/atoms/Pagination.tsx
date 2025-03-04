import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage, totalPages, onPageChange
}) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i += 1) {
                pageNumbers.push(i);
            }
        } else if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, 4, '...', totalPages);
        } else if (currentPage > 3 && currentPage < totalPages - 2) {
            pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        } else {
            pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        }
        return pageNumbers;
    };

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number' && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className='m-pagination flex items-center space-x-2 justify-center'>
            {/* <span className='mr-2 text-md hidden md:inline'>Trang {currentPage} của {totalPages} (tổng {total})</span> */}
            {/* {
        currentPage > 1
        && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className='text-md px-3 py-1 border border-silver-sand rounded bg-white text-gunmetal dark:bg-charleston-green text-gunmetal dark:text-white w-9 h-9'
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={"fa-solid fa-chevron-left" as any} />
          </button>
        )
      } */}
            {getPageNumbers().map((page, index) => (
                <button
                    key={`page-${index.toString()}`}
                    onClick={() => handlePageChange(page)}
                    className={`font-bold w-14 h-14 rounded-full p-1 border text-center ${currentPage === page ? 'bg-usafa-blue text-white border-usafa-blue' : 'bg-white text-pastel-gray border-pastel-gray base-transition'}`}
                    disabled={typeof page === 'string'}
                >
                    {page}
                </button>
            ))}
            {/* {
        currentPage !== totalPages
        && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className='text-md px-3 py-1 border rounded border-silver-sand bg-white dark:bg-charleston-green text-gunmetal dark:text-white w-9 h-9'
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={"fa-solid fa-chevron-right" as any} />
          </button>
        )
      } */}
        </div>
    );
};

export default Pagination;
