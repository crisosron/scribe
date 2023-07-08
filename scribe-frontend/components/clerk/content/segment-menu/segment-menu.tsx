import { useState, useEffect } from "react";
import classNames from "classnames";

interface Category {
  label: 'General' | 'Actions' | 'Files',
  styles?: string,
  selectedStyles?: string,
}

const SegmentMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<'General' | 'Actions' | 'Files'>('General');

  const categories: Category[] = [
    { label: 'General', selectedStyles: 'bg-white-200 dark:bg-white-700' }, 
    { label: 'Actions', selectedStyles: 'bg-green-100 bg-opacity-25 text-green-500 dark:text-green-100'},
    { label: 'Files', selectedStyles: 'bg-gold-100 bg-opacity-25 text-gold-500 dark:text-gold-100' }
  ]

  const handleCategorySelected = (category: 'General' | 'Actions' | 'Files') => {
    setSelectedCategory(category);
  }

  return (
    <div className="flex justify-center items-center rounded-xl">
      {
        categories.map((category, index) => {
          return (
            <div 
              className={classNames(`min-w-[80px] p-2 text-sm flex justify-center items-center rounded-md cursor-pointer transition-all ${category.styles}`, {
                [`${category.selectedStyles}`]: selectedCategory === category.label
              })}
              onClick={() => handleCategorySelected(category.label)}
              key={`toast-item-${category.label}`}>{category.label}
            </div>
          )
        })
      }
    </div>
  )
}

export default SegmentMenu;