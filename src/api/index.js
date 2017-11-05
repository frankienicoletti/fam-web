import axios from 'axios';

const API = '/launchers';

// Returns an account.
const getAccount = id => {
  return fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(json => json)
    .catch(function (error) {
      console.log(error, ' Error getting account try again, or just give up...');
    });
};

// Returns account transactions
const getAccountTransactions = id => {
  return fetch(`${API}/${id}/transactions`)
    .then(res => res.json())
    .then(json => json)
    .catch(function (error) {
      console.log(error, ' Error getting account try again, or just give up...');
    });
};

// Returns payoff data from the API
const payoff = (body) => {
  return axios
    .post(`${API}/payoff`, { ...body })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error, ' Error getting account try again, or just give up...');
    });
};

export {
  getAccount,
  getAccountTransactions,
  payoff,
}
