export async function getRecords(url: String) {
  const res = await fetch(url as RequestInfo);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch records',
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data;
}

export async function getRecord(url: String, id: String) {
  const res = await fetch(`${url}/${id}`);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch record.',
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data;
}
