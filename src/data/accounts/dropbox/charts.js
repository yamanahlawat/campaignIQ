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
