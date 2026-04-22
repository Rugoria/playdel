// API functions for settings
import { graphqlFetcher } from '@/lib/graphqlFetcher';

export const settingsApi = {
  changePassword: async (currentPassword: string, newPassword: string) => {
    const mutation = `
      mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
        changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
          success
          message
        }
      }
    `;

    return graphqlFetcher(mutation, { currentPassword, newPassword });
  },
};
