import { graphqlFetcher } from "@/lib/graphqlFetcher";

export const getClubs = async () => {
  const query = `
    query GetClubs {
      clubs {
        id
        name
        location
        description
      }
    }
  `;

  return graphqlFetcher(query);
};
