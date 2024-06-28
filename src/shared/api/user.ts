import { IUser, IToken } from '../entities/user';
import { base_url } from '../utils/constants';
import { checkResp } from './utils';

export const errorParser = (err: any) => {
  const key = '';
  let resultServerError = 'Ошибка на сервере. ';
  for (const currentKey in err) {
    if (Object.prototype.hasOwnProperty.call(err, currentKey)) {
      let currentKeyResultError = '';
      currentKeyResultError += err[currentKey].reduce((res: string, item: string) => {
        res += item;
      }, '');
      resultServerError += `${currentKey}, значение: ${err[currentKey]} `;
    }
  }
  return resultServerError;
};

export const createUser = async (user: IUser) => {
  const res = await fetch(`${base_url}user/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  );
  return checkResp<IUser>(res);
};

export const signIn = async (data: any): Promise<IToken | void> => {
  const res = await fetch(`${base_url}user/token/login/`, {
      method: 'POST',
      headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  return checkResp<IToken>(res);
};


export const resetPassword = async (email: string) => {
  const res = await fetch(`${base_url}user/emailpassword/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( email )
  }
  );
  return checkResp(res);
};





