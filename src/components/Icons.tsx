import React from "react";

interface Props {
    className?: string;
}

export const CloseIcon: React.FC<Props> = ({ className = "" }) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export const ChevronIcon: React.FC<Props> = ({ className = "" }) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.07771 6.91751C3.95121 7.17301 3.98121 7.47851 4.15371 7.70501L11.4037 17.205C11.6877 17.577 12.3117 17.577 12.5962 17.205L19.8462 7.70501C20.0192 7.47851 20.0487 7.17301 19.9222 6.91751C19.7962 6.66151 19.5352 6.50001 19.2502 6.50001L4.75021 6.50001C4.46521 6.50001 4.20421 6.66151 4.07771 6.91751Z"
                fill="#393939"
            />
        </svg>
    );
};

export const SearchIcon: React.FC<Props> = ({ className = "" }) => {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
};
