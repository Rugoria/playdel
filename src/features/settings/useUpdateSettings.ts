import { useMutation } from '@tanstack/react-query';
import { settingsApi } from './settings.api';

export const useChangePassword = () => {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
      settingsApi.changePassword(currentPassword, newPassword),
  });
};
