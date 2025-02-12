import React from 'react';

const PortfolioItem = ({ title, image, link, tags }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg">
            <a href={link}>
                <picture>
                    <img
                        className="w-full h-auto transition-transform transform group-hover:scale-105 "
                        alt={title}
                        loading="lazy"
                        src={image}
                    />
                </picture>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white">
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="mt-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm mx-1">
                                    {tag}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PortfolioItem;
