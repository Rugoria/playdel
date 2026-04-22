'use client';

import { useState } from 'react';
import { useChangePassword } from '../useUpdateSettings';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const SettingsForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { mutate: changePassword, isPending } = useChangePassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    changePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
          alert('Password changed successfully');
        },
        onError: (err: any) => {
          setError(err.message || 'Failed to change password');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Change Password</h2>

      {error && <div className="text-red-600">{error}</div>}

      <Input
        type="password"
        label="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
      />

      <Input
        type="password"
        label="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Changing...' : 'Change Password'}
      </Button>
    </form>
  );
};
