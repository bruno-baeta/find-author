import Api from "./Api";

export const fetchAuthorWorks = async (authorId) => {
    const response = await Api.get('/works', {
        params: {
            filter: `author.id:${authorId}`,  
            sort: 'cited_by_count:desc',
        },
    });
    return response.data.results || [];
};

