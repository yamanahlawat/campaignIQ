import { ThemeColors } from 'helpers/ThemeColors';
import { getWeekLabels } from 'helpers/Utils';

const colors = ThemeColors();
const labels = getWeekLabels();

export const dropboxImpressionsChartData = {
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
      data: [2977, 2144, 2875, 2622, 2245, 1625, 2427],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const dropboxClicksChartData = {
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
      data: [1605, 2597, 2316, 2120, 2961, 1268, 1545],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const dropboxSpendChartData = {
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
      data: [1706, 2911, 2324, 1226, 2414, 2167, 1932],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const dropboxPlatformMismatchChartData = {
  labels: [
    'Google Ads Ad',
    'Google Ads Placement',
    'Facebook Placement',
    'Facebook Ad',
    'Twitter Ad',
  ],
  datasets: [
    {
      data: [93, 80, 31, 93, 26],
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

export const dropboxBarChartData = {
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
      backgroundColor: colors.themeColor3_10,
      data: [400, 345, 320],
      borderWidth: 2,
    },
    {
      label: 'Facebook Ad',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor4_10,
      data: [364, 504, 605],
      borderWidth: 2,
    },
    {
      label: 'Twitter Ad',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor5_10,
      data: [400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const dropboxCardsData = [
  {
    title: 'data.impressions',
    icon: 'simple-icon-eye',
    value: '4.29M',
  },
  {
    title: 'data.spend',
    icon: 'iconsminds-dollar',
    value: '$260.57k',
  },
  {
    title: 'data.clicks',
    icon: 'iconsminds-cursor-click-2',
    value: '81.35k',
  },
  {
    title: 'data.average-cpc',
    icon: 'iconsminds-dollar',
    value: '$28',
  },
  {
    title: 'data.average-ctr',
    icon: 'iconsminds-dollar',
    value: '21%',
  },
  {
    title: 'data.average-cpm',
    icon: 'iconsminds-dollar',
    value: '$42',
  },
];

export const dropboxErrorsCardsData = [
  {
    title: 'dashboards.errors',
    icon: 'iconsminds-danger',
    value: 88,
  },
  {
    title: 'dashboards.affected-campaigns',
    icon: 'iconsminds-loudspeaker',
    value: '95/379',
  },
  {
    title: 'dashboards.affected-impressions',
    icon: 'simple-icon-eye',
    value: '1.07M',
  },
  {
    title: 'dashboards.affected-clicks',
    icon: 'iconsminds-cursor-click-2',
    value: '20.3k',
  },
  {
    title: 'dashboards.affected-spend',
    icon: 'iconsminds-dollar',
    value: '65.14k',
  },
  {
    title: 'dashboards.affected-platforms',
    icon: 'iconsminds-testimonal',
    value: 4,
  },
];

export const dropboxWarningsData = [
  {
    id: 1,
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_Stack Overflow_APAC_SG_Retargeting Bundle_SignEasy_Job-Title_Team Softness',
    warning: 'Low CTR',
  },
  {
    id: 2,
    platform: 'Facebook Ads',
    campaign:
      'DBS_Prog-Display_Stack Overflow_G5_NZ_Non-Brand_Basic RFM Green_Keyword_Digital Experience Platform_and Sons',
    warning: 'High CPM',
  },
  {
    id: 3,
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-OLV_Direct Buy_EMEA_UK_Retargeting_Pro Cart Abandoner_Job-Title_MOCA Cybersecurity',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 4,
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Video_Bidtellect_APJ_SG_Nurturing_Biz Cart Abandoner_Combination_Backup_LLC',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 5,
    platform: 'Twitter',
    campaign:
      'HS_Paid-Social_Google_GLOBAL_NE_Brand_Organic Video Engagers_Lookalike-Pixel_Team Softness',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 6,
    platform: 'Facebook Ads',
    campaign:
      'DBX_Paid-OLV_LinkedIn_EMEA_AU_Prospecting_HelloFax_Interest_MOCA Cybersecurity',
    warning: 'Active Campaigns with no active ads',
  },
  {
    id: 7,
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_Facebook - ALNALD_APAC_IT_Non-Brand_Pro Cart Abandoner_Customer-List_ALNALD_Ltd',
    warning: 'Active Campaigns with no active ads',
  },
];

export const dropboxInsightsTableData = [
  {
    id: 1,
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Social_Social Post_DRAFTKINGS_Customer_Job Title_CPA_LearnMore_HTML5_Test_Desktop',
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

export const dropboxLineChartData = {
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
