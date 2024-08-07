import { FiltersValues } from '../../pages/catalog/ui/filtration';
import { IArtworkDetails } from '../entities/product-details';
import { IArtworksResponse } from '../entities/products';
import { base_url } from '../utils/constants';
import { checkResponse } from './utils';

export const getProducts = async () => {
    const res = await fetch(`${base_url}product`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<IArtworksResponse>(res);
};

export const getProductsWithFilters = async (filters: FiltersValues, page: number) => {
  const url = generateUrlWithQueryParams(`${base_url}product`, filters, page);
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  }
  );
  return checkResponse<IArtworksResponse>(res);
};

const generateUrlWithQueryParams = (originUrl: string, filters: FiltersValues, page: number): string => {
  const queryParams = new URLSearchParams();

  if (filters.price) queryParams.append('cost_category', filters.price);
  if (filters.size) queryParams.append('size_category', filters.size);
  if (filters.category) queryParams.append('category', filters.category);
  if (filters.genre) queryParams.append('genre', filters.genre);
  if (filters.style) queryParams.append('style', filters.style);
  if (filters.minYear) queryParams.append('min_year', filters.minYear);
  if (filters.maxYear) queryParams.append('max_year', filters.maxYear);
  if (filters.country) queryParams.append('country', encodeURIComponent(filters.country));
  if (filters.searchText) queryParams.append('search', filters.searchText);
  queryParams.append('page', page + '');

  return `${originUrl}?${queryParams.toString()}`;
};

export const getProduct = async (id : string) => {
    const res = await fetch(`${base_url}product/${id}/`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<IArtworkDetails>(res);
};