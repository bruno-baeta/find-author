import Api from "./Api";

export const fetchHomeWorks = async (searchTerm) => {
  const response = await Api.get('/works', {
    params: {
      sort: 'cited_by_count:desc',
      filter: `title.search:${searchTerm}`,
      select: 'id,doi,title,display_name,publication_year,authorships,cited_by_count,concepts',
      per_page: '10'
    },
  });
  return response.data.results || [];
};
