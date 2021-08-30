const login = async (data) => {
  let body = JSON.stringify(data);

  return await fetch('http://localhost:3001/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: body
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
export default login;
