const getQueryString = p => {
  var esc = encodeURIComponent;
  return Object.keys(p)
    .map(k => esc(k) + '=' + esc(p[k]))
    .join('&');
};

const fetchAPI = async (URL, params) => {
  const target = `${URL}?${getQueryString(params)}`;
  //console.log(target);
  let res = await fetch(target);
  let json = await res.json();
  //console.log(json);
  return json;
};

export default fetchAPI;
