import { ThemeColors } from 'helpers/ThemeColors';
import { getWeekLabels } from 'helpers/Utils';

const colors = ThemeColors();
const labels = getWeekLabels();

export const carsonImpressionsChartData = {
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
      data: [1436, 1828, 942, 1365, 2881, 2400, 1407],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const carsonClicksChartData = {
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
      data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const carsonSpendChartData = {
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
      data: [2639, 1904, 2786, 2799, 1630, 849, 1480],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const carsonPlatformMismatchChartData = {
  labels: [
    'Google Ads Ad',
    'Google Ads Placement',
    'Facebook Placement',
    'Facebook Ad',
    'Twitter Ad',
  ],
  datasets: [
    {
      data: [24, 73, 12, 79, 46],
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

export const carsonBarChartData = {
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

export const carsonCardsData = [
  {
    title: 'data.impressions',
    icon: 'simple-icon-eye',
    value: 3,
  },
  {
    title: 'data.spend',
    icon: 'iconsminds-dollar',
    value: 220,
  },
  {
    title: 'data.clicks',
    icon: 'iconsminds-cursor-click-2',
    value: 351,
  },
  {
    title: 'dashboards.affected-spend',
    icon: 'iconsminds-dollar',
    value: 2075,
  },
];

export const carsonErrorsCardsData = [
  {
    title: 'dashboards.affected-campaigns',
    icon: 'iconsminds-loudspeaker',
    value: 220,
  },
  {
    title: 'dashboards.affected-impressions',
    icon: 'iconsminds-loudspeaker',
    value: 220,
  },
  {
    title: 'dashboards.affected-clicks',
    icon: 'iconsminds-loudspeaker',
    value: 220,
  },
  {
    title: 'dashboards.affected-spend',
    icon: 'iconsminds-loudspeaker',
    value: 220,
  },
];

export const carsonWarningsData = [
  {
    id: 1,
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Social_Social Post_DRAFTKINGS_Customer_Job Title_CPA_LearnMore_HTML5_Test_Desktop',
    warning: 'Low CTR',
  },
  {
    id: 2,
    platform: 'Facebook Ads',
    campaign:
      'Mid Funnel_Audio_Display_In Banner Video_YAHOO_Retargeting_Search Retargeting_CPA_LearnMore_HTML5_Test_Cross Device',
    warning: 'High CPM',
  },
  {
    id: 3,
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Video_Display_Trueview Instream No Skip_OGURY_Retargeting_Multiple Attributes_CPC_LearnMore_HTML5_Reason58_Cross Device',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 4,
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Social_Programmatic_GIF_MSN_Retargeting_Search Retargeting_CPA_LearnMore_Animated Display_Reason58_CTV',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 5,
    platform: 'Twitter',
    campaign:
      'Upper Funnel_Social_Audio_FEP VOD_LAW & CRIME NETWORK_Customer_Contextual_Make Good_LearnMore_Static Display_Reason108_CTV',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 6,
    platform: 'Facebook Ads',
    campaign:
      'Upper Funnel_Social_Display_Overlay_LIVERAMP_Customer_Geo_CPA_LearnMore_Static Display_Reason58_Desktop',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 7,
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Social_Video_Button_VIANT_Prospecting_Behavioral_Make Good_LearnMore_Video_Price_Desktop',
    warning: 'Active Campaigns with no active ads',
  },
];
