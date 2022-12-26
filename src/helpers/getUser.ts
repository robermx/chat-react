export const getDataCokie = async (setUsername: any, navigate: any) => {
  const url = 'http://localhost:8000/api/user';

  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

  const content = await response.json();
  if (content.id) {
    setUsername(`${content.name} ${content.lastname}`);
  } else {
    return navigate('/login');
  }
};
