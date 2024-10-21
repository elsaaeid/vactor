import React from 'react';
import { useTranslation } from "react-i18next";

const SelectCategory = ({ blog, handleInputChange }) => {
    const categories = [
        {
            id: 1,
            "name": "Graphic Designing",
        },
        {
            id: 2,
            "name": "Programming",
        }
    ];
          // Translation
	const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '20px' }}>
      <select
        id="categorySelector"
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px' }}
        name="category" value={blog?.category}
      >
         <option value="">
          {t("blog.category")}
          </option>
        {categories.map(category => (
            <option key={category.id}>
                {category.name}
            </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;