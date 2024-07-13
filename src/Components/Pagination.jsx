import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    useEffect(() => {
        console.log('Pagination Component Rendered');
        console.log('Total Posts:', totalPosts);
        console.log('Current Page:', currentPage);
    }, [totalPosts, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="pagination mb-[1.5rem]  w-[100%]">
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={page === currentPage ? "active" : ""}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
