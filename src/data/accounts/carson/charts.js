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
    value: '1.76M',
  },
  {
    title: 'data.spend',
    icon: 'iconsminds-dollar',
    value: '$60.7k',
  },
  {
    title: 'data.clicks',
    icon: 'iconsminds-cursor-click-2',
    value: '5.8k',
  },
  {
    title: 'data.average-cpc',
    icon: 'iconsminds-dollar',
    value: '$14',
  },
  {
    title: 'data.average-ctr',
    icon: 'iconsminds-dollar',
    value: '12%',
  },
  {
    title: 'data.average-cpm',
    icon: 'iconsminds-dollar',
    value: '$28',
  },
];

export const carsonErrorsCardsData = [
  {
    title: 'dashboards.errors',
    icon: 'iconsminds-danger',
    value: 172,
  },
  {
    title: 'dashboards.affected-campaigns',
    icon: 'iconsminds-loudspeaker',
    value: '78/180',
  },
  {
    title: 'dashboards.affected-impressions',
    icon: 'simple-icon-eye',
    value: '615k',
  },
  {
    title: 'dashboards.affected-clicks',
    icon: 'iconsminds-cursor-click-2',
    value: '5.8k',
  },
  {
    title: 'dashboards.affected-spend',
    icon: 'iconsminds-dollar',
    value: '60.7k',
  },
  {
    title: 'dashboards.affected-platforms',
    icon: 'iconsminds-testimonal',
    value: 3,
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

export const carsonInsightsTableData = [
  {
    id: 1,
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Audio_FEP VOD_LAW & CRIME NETWORK_Customer_Contextual_Make Good_LearnMore_Static Display_Reason108_CTV',
    insights: 'Optimize your conversions campaigns to increase CTR',
  },
  {
    id: 2,
    platform: 'Facebook Ads',
    campaign:
      'Upper Funnel_Social_Display_Overlay_LIVERAMP_Customer_Geo_CPA_LearnMore_Static Display_Reason58_Desktop',
    insights: 'Optimize creatives to lower your CPM',
  },
  {
    id: 3,
    platform: 'Twitter Ads',
    campaign:
      'Lower Funnel_Social_Video_Button_VIANT_Prospecting_Behavioral_Make Good_LearnMore_Video_Price_Desktop',
    insights: 'Save your budget for March month where it will give more CPC',
  },
];

export const carsonLineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};
