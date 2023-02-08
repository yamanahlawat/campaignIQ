import { ThemeColors } from 'helpers/ThemeColors';

const colors = ThemeColors();

export const tableData = [
  {
    account: 'Dropbox',
    totalCampaigns: 379,
    campaigns: 95,
    health: Math.round((95 / 379) * 100),
    errors: 88,
    managers: 'Nelson',
    totalSpend: '260.57k',
    spend: '65.14k',
    totalImpressions: '4.29M',
    impressions: '1.07M',
    totalClicks: '81.35k',
    clicks: '20.3k',
  },
  {
    account: 'Lumos',
    totalCampaigns: 150,
    campaigns: 47,
    health: Math.round((47 / 150) * 100),
    errors: 91,
    managers: 'Hrithik',
    totalSpend: '913.01k',
    spend: '13.69k',
    totalImpressions: '57.67M',
    impressions: '8.6M',
    totalClicks: '166.94k',
    clicks: '25.04k',
  },
  {
    account: 'Carson',
    totalCampaigns: 180,
    campaigns: 78,
    health: Math.round((78 / 180) * 100),
    errors: 172,
    managers: 'Anumeha',
    totalSpend: '173.65k',
    spend: '60.7k',
    totalImpressions: '1.76M',
    impressions: '615k',
    totalClicks: '16.74k',
    clicks: '5.8k',
  },
  {
    account: 'MilkPep',
    totalCampaigns: 65,
    campaigns: 0,
    health: 100,
    managers: 'Nikhil',
    errors: 0,
    totalSpend: '202.69M',
    spend: 0,
    totalImpressions: '33.52B',
    impressions: 0,
    totalClicks: '167.58M',
    clicks: 0,
  },
  {
    account: 'easyJet',
    totalCampaigns: 167,
    campaigns: 0,
    health: 100,
    managers: 'BhanuKiran',
    errors: 0,
    totalSpend: 8645,
    spend: 0,
    totalImpressions: 10897,
    impressions: 0,
    totalClicks: 5674,
    clicks: 0,
  },
  {
    account: 'United MileagePlus',
    totalCampaigns: 56,
    campaigns: 0,
    health: 100,
    managers: 'Nagendra',
    errors: 0,
    totalSpend: 8645,
    spend: 0,
    totalImpressions: 10897,
    impressions: 0,
    totalClicks: 5674,
    clicks: 0,
  },
  {
    account: 'Hilton',
    totalCampaigns: 95,
    campaigns: 0,
    health: 100,
    managers: 'Sharashchandra',
    errors: 0,
    totalSpend: 8645,
    spend: 0,
    totalImpressions: 10897,
    impressions: 0,
    totalClicks: 5674,
    clicks: 0,
  },
];

export const affectedCampaignsChartData = {
  labels: ['Dropbox', 'Lumos', 'Carson'],
  datasets: [
    {
      data: [95, 47, 78],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
    },
  ],
};

export const errorDistributionChartData = {
  labels: ['Dropbox', 'Lumos', 'Carson'],
  datasets: [
    {
      data: [88, 91, 172],
      borderWidth: 2,
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
        colors.themeColor5,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
      ],
    },
  ],
};

export const cardsData = [
  {
    title: 'dashboards.affected-accounts',
    icon: 'iconsminds-clothing-store',
    value: 3,
  },
  {
    title: 'dashboards.affected-campaigns',
    icon: 'iconsminds-loudspeaker',
    value: 220,
  },
  {
    title: 'dashboards.errors',
    icon: 'iconsminds-danger',
    value: 351,
  },
  {
    title: 'dashboards.affected-spend',
    icon: 'iconsminds-dollar',
    value: 2075,
  },
];
