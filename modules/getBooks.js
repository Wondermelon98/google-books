const getBooks = async (url, searchTerm) => {
    const response = await fetch(`${url}+${searchTerm}&maxResults=30`);
    const data = await response.json();
    console.log(data);
    return data.items;
};

export default getBooks