export default async function fetchCity() {
  const response = await fetch(
    `http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off&offset=${Math.floor(
      Math.random() * 1000,
    )}`,
    { method: 'GET' },
  );
  const { data } = await response.json();
  const city = data[Math.floor(Math.random() * 4)].city;
  return city;
}
