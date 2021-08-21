
const postToken = async (dataForm) => {
  var raw = `{\n	\"username\": \"${dataForm.username}"\,\n	\"password\": \"${dataForm.password}\"\n}`;

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch("https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth", requestOptions)
  const data = await response.json();
  console.log(data)
  return data
}

export default postToken

