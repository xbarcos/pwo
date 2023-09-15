const getRequest = () => {
  axios.get('http://localhost:3000')
    .then(response => {
      const parseInfo = response.data.data;
    })
    .catch(error => console.error(error));
}  
