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

export const fetchRandomTopics = async () => {
  const response = await Api.get('/concepts', {
    params: {
      select: 'id,display_name',
      per_page: 100, 
    },
  });

  const topics = response.data.results || [];

  const shuffledTopics = topics.sort(() => 0.5 - Math.random());

  return shuffledTopics.slice(0, 12);
};
