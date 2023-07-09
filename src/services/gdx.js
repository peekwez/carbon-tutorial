const gdxAPI = async ({ method, path, body }) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify(body);
  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return await fetch(path, requestOptions);
};
export default gdxAPI;
