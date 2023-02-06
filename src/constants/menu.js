import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-optimization',
    label: 'menu.media-health',
    to: `${adminRoot}/media-health`,
  },
  {
    id: 'accounts',
    icon: 'iconsminds-monitor-analytics',
    label: 'menu.accounts',
    to: `${adminRoot}/accounts`,
  },
  {
    id: 'data-explorer',
    icon: 'iconsminds-big-data',
    label: 'menu.data-explorer',
    to: `${adminRoot}/data-explorer`,
  },
];
export default data;
