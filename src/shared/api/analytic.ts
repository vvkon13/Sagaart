import { base_url } from '../utils/constants';
import { checkResp } from './utils';

import { IAnalytic } from '../entities/analytic';

export const analytic = async (obj:IAnalytic ) => {
    const res = await fetch(`${base_url}/analytics/`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(obj)
    });
    return checkResp(res);
  };
  