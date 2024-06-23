import { ArtworkDetails } from '../entities/product-details';
import { Artwork } from '../entities/products';
import { base_url } from '../utils/constants';
import { checkResponse } from './utils';

export const getProducts = async () => {
    const res = await fetch(`${base_url}/api/product`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<Artwork[]>(res);
};

export const getProduct = async (id : number) => {
    const res = await fetch(`${base_url}/api/product/${id}/`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<ArtworkDetails>(res);
};