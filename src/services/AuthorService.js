import Api from "./Api";

export const fetchAuthors = async (searchTerm) => {
  const response = await Api.get('/authors', {
    params: {
      select: 'id,display_name,works_count,cited_by_count',
      search: searchTerm,
    },
  });
  return response.data.results || [];
};
