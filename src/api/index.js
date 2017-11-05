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
const payoff = (id, body) => {
  console.log(id, body)
  return fetch(`${API}/${id}/payoff`, {
    method: 'post',
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(json => json)
    .catch(function (error) {
      console.log(error, ' Error getting account try again, or just give up...');
    });
};

export {
  getAccount,
  getAccountTransactions,
  payoff,
}
