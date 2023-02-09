export const fetchData = () => {
    return fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(res => res.json());
  }
  