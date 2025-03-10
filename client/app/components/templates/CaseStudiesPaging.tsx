'use client';
import React, { useState } from 'react';
import CaseStudyCard from '../commons/CaseStudyCard';
import Pagination from '../atoms/Pagination';
import { ITEM_PER_PAGE } from '@/app/utils/constants';

interface Props {
    data: {
        id: number;
        thumbnail: string;
        title: string;
        description: string;
    }[];
    handlePageChange?: (page: number) => void;
    itemsPerPage?: number
}

const CaseStudiesPaging: React.FC<Props> = ({ data, itemsPerPage, handlePageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / (itemsPerPage || ITEM_PER_PAGE));
    const currentData = data.slice((currentPage - 1) * (itemsPerPage || ITEM_PER_PAGE), currentPage * (itemsPerPage || ITEM_PER_PAGE));
    const onPageChange = (page: number) => {
        setCurrentPage(page);
        handlePageChange?.(page);
    };

    return (
        <>
            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    currentData.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className={`overflow-hidden ${index === 0 && currentPage === 1 ? "md:col-span-2 lg:col-span-3" : "col-span-1"
                                    }`}
                            >
                                <CaseStudyCard key={index} {...item} isMain={index === 0 && currentPage === 1} />
                            </div>

                        )
                    })
                }
            </div>
            {
                totalPages > 1 && (
                    <div className="pagination">
                        <div className="mt-10">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CaseStudiesPaging;