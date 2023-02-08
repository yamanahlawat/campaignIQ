import { ThemeColors } from 'helpers/ThemeColors';
import { getWeekLabels } from 'helpers/Utils';

const colors = ThemeColors();
const labels = getWeekLabels();

export const lumosImpressionsChartData = {
  labels,
  datasets: [
    {
      label: 'Affected Impressions',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [1485, 1990, 2721, 3528, 1961, 4762, 3982],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const lumosClicksChartData = {
  labels,
  datasets: [
    {
      label: 'Affected Clicks',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [513, 2127, 4671, 4692, 2116, 2522, 1502],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const lumosSpendChartData = {
  labels,
  datasets: [
    {
      label: 'Affected Spend',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [996, 984, 2928, 3391, 3175, 4310, 4190],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const lumosPlatformMismatchChartData = {
  labels: [
    'Google Ads Ad',
    'Google Ads Placement',
    'Facebook Placement',
    'Facebook Ad',
    'Twitter Ad',
  ],
  datasets: [
    {
      data: [17, 44, 38, 16, 27],
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

export const lumosBarChartData = {
  labels: ['Affected Impressions', 'Affected Clicks', 'Affected Spend'],
  datasets: [
    {
      label: 'Google Ads Placement',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324],
      borderWidth: 2,
    },
    {
      label: 'Google Ads Ad',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605],
      borderWidth: 2,
    },
    {
      label: 'Facebook Placement',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [400, 345, 320],
      borderWidth: 2,
    },
    {
      label: 'Facebook Ad',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605],
      borderWidth: 2,
    },
    {
      label: 'Twitter Ad',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const lumosCardsData = [
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

export const lumosWarningsData = [
  {
    id: 1,
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_August Promo_Manfesto 2_Gif_320x50_Send Message_All_PLC',
    warning: 'Low CTR',
  },
  {
    id: 2,
    platform: 'Facebook Ads',
    campaign:
      'Northstate_Residential_August Promo_Tagline_Video_300x250_Play Game_All_Group',
    warning: 'High CPM',
  },
  {
    id: 3,
    platform: 'Google Ads Placement',
    campaign:
      'Lumos_Residential_Seasonal_500mbps_Static_16x9_Send WhatsApp Message_Conversion_Ltd',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 4,
    platform: 'Facebook Placement',
    campaign:
      'Lumos Fiber_Business_Seasonal_1000mbps_Video_1201x629_Learn More_Consideration_and Sons',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 5,
    platform: 'Twitter',
    campaign:
      'Lumos_Business_July Promo_Manfesto_Static_1080x1920_Get Showtimes_Conversion',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 6,
    platform: 'Facebook Ads',
    campaign: 'Lumos_Business_Seasonal_Tagline_Static_1080x1080_Get Quote_All',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 7,
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_April Promo_100mbps_Carousel_300x600_Buy Tickets_Awareness_Inc',
    warning: 'Active Campaigns with no active ads',
  },
];
