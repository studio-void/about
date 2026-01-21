import { createFileRoute } from '@tanstack/react-router';

import { PrivacyPolicyPage } from '@/pages';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
});
