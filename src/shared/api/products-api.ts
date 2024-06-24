import { ArtworkDetails } from '../entities/product-details';
import { ArtworksResponse } from '../entities/products';
import { base_url } from '../utils/constants';
import { checkResponse } from './utils';

export const getProducts = async () => {
    const res = await fetch('https://sagaart.bounceme.net/api/product/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<ArtworksResponse>(res);
};

export const getProduct = async (id : number) => {
    const res = await fetch(`${base_url}product/${id}/`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    }
    );
	return checkResponse<ArtworkDetails>(res);
};