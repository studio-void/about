import { createFileRoute } from '@tanstack/react-router';

import { TeamMainPage } from '@/pages/team/team-main';

export const Route = createFileRoute('/team')({
  component: TeamMainPage,
});
