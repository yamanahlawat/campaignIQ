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
