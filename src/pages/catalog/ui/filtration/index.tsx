import React, { useState } from 'react';
import style from './style.module.css';
import { Radio, RadioGroup } from '@gravity-ui/uikit';
import { options, options2 } from './constants';

interface FiltersState {
    price: boolean;
    size: boolean;
    category: boolean;
    genre: boolean;
    style: boolean;
    year: boolean;
    country: boolean;
  }
  

const Filters = ({ isVisible }: {isVisible : boolean}) => {
    const [isOpen, setIsOpen] = useState<FiltersState>({
        price: false,
        size: false,
        category: false,
        genre: false,
        style: false,
        year: false,
        country: false,
    });

  const toggleDropdown = (name: keyof FiltersState) => {
    setIsOpen((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  return (
      <div>
          { isVisible && (
              <div className={style.sidebar}>
                  <div className={style.filters__section}>
                      <h3 className={style.title}>ФИЛЬТРОВАТЬ ПО:</h3>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('price')}>
                              ЦЕНА
                          </div>
                          {isOpen.price && <div className={style.body}>Ценовой фильтр</div>}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('size')}>
                              РАЗМЕР
                          </div>
                          <div>
                              {isOpen.size && (
                                options.map(opt => (
                                    // eslint-disable-next-line react/jsx-key
                                    <Radio value={opt.value} content={opt.value} className={style.radio} />
                                ))
                             )}
                          </div>
                      </div>
  
                      <div className="filter-category">
                          <div className={style.title} onClick={() => toggleDropdown('category')}>
                              КАТЕГОРИЯ
                          </div>
                          {isOpen.category && <div className={style.body}>Категории фильтр</div>}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('genre')}>
                              ЖАНР
                          </div>
                          {isOpen.genre && <div className={style.body}>Жанры фильтр</div>}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('style')}>
                              СТИЛЬ
                          </div>
                          {isOpen.style && (
                              <RadioGroup className={style.body} size="l" name="group2" defaultValue={options[0].value} options={options2} direction="vertical"/>
                          )}
                      </div>
    
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('year')}>
                              ГОД СОЗДАНИЯ
                          </div>
                          {isOpen.year && (
                          <div className={style.body}>
                              <label>От <input type="number" /></label>
                              <label>До <input type="number" /></label>
                          </div>
                          )}
                      </div>
  
                      <div className={style.filters__category}>
                          <div className={style.title} onClick={() => toggleDropdown('country')}>
                              СТРАНА АВТОРА
                          </div>
                          {isOpen.country && (
                          <div className={style.body}>
                              <input type="text" placeholder="Введите страну" />
                          </div>
                          )}
                      </div>
  
                  </div>
              </div>
           )}
      </div>
  );
};

export default Filters;