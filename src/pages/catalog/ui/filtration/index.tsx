import React, { useState } from 'react';
import style from './style.module.css';
import { RadioGroup } from '@gravity-ui/uikit';
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
  

const Filters = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
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
      <div className={style.filters__container}>
          <button className={style.filters__toggle}
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          >ПОКАЗАТЬ ФИЛЬТРЫ
          </button>
          {isFiltersVisible && (
          <div  className={style.filters__content}>
              <div className={style.filters__section}>
                  <h3>ФИЛЬТРОВАТЬ ПО:</h3>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('price')}>
                          ЦЕНА
                      </div>
                      {isOpen.price && <div className={style.filters__body}>Ценовой фильтр</div>}
                  </div>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('size')}>
                          РАЗМЕР
                      </div>
                      {isOpen.size && (
                          <RadioGroup size="l" name="group1" defaultValue={options[0].value} options={options} direction="vertical"/>
                      )}
                  </div>

                  <div className="filter-category">
                      <div className={style.filters__header} onClick={() => toggleDropdown('category')}>
                          КАТЕГОРИЯ
                      </div>
                      {isOpen.category && <div className="filter-body">Категории фильтр</div>}
                  </div>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('genre')}>
                          ЖАНР
                      </div>
                      {isOpen.genre && <div className="filter-body">Жанры фильтр</div>}
                  </div>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('style')}>
                          СТИЛЬ
                      </div>
                      {isOpen.style && (
                          <RadioGroup size="l" name="group2" defaultValue={options[0].value} options={options2} direction="vertical"/>
                    )}
                  </div>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('year')}>
                          ГОД СОЗДАНИЯ
                      </div>
                      {isOpen.year && (
                      <div className={style.filters__body}>
                          <label>От <input type="number" /></label>
                          <label>До <input type="number" /></label>
                      </div>
                     )}
                  </div>

                  <div className={style.filters__category}>
                      <div className={style.filters__header} onClick={() => toggleDropdown('country')}>
                          СТРАНА АВТОРА
                      </div>
                      {isOpen.country && (
                      <div className={style.filters__body}>
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
