import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  className = "",
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      {onPageChange ? (
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-6 h-6 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <Image
            className="w-1.5 h-2.5"
            alt="Previous"
            src="/vector-57.png"
            width={6}
            height={10}
            priority
          />
        </button>
      ) : (
        <Link href={`/blog?page=${currentPage - 1}`}>
          <button
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-6 h-6 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Image
              className="w-1.5 h-2.5"
              alt="Previous"
              src="/vector-57.png"
              width={6}
              height={10}
              priority
            />
          </button>
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
        onPageChange ? (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`rounded-full h-[29px] w-[29px] flex items-center justify-center font-semibold ${
              currentPage === page
                ? "bg-[#eff4f7] text-[#127749]"
                : "text-[#7b868f]"
            }`}
          >
            {page}
          </button>
        ) : (
          <Link href={`/blog?page=${page}`} key={page}>
            <button
              className={`rounded-full h-[29px] w-[29px] flex items-center justify-center font-semibold ${
                currentPage === page
                  ? "bg-[#eff4f7] text-[#127749]"
                  : "text-[#7b868f]"
              }`}
            >
              {page}
            </button>
          </Link>
        ),
      )}

      {onPageChange ? (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-6 h-6 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <Image
            className="w-1.5 h-2.5"
            alt="Next"
            src="/vector-56.png"
            width={6}
            height={10}
            priority
          />
        </button>
      ) : (
        <Link href={`/blog?page=${currentPage + 1}`}>
          <button
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-6 h-6 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <Image
              className="w-1.5 h-2.5"
              alt="Next"
              src="/vector-56.png"
              width={6}
              height={10}
              priority
            />
          </button>
        </Link>
      )}
    </div>
  );
};
