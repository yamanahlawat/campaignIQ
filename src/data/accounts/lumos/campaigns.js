const campaigns = [
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_August Promo_Manfesto 2_Gif_320x50_Send Message_All_PLC',
    impressions: 1607,
    clicks: 1215,
    spend: 717,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Residential_August Promo_Tagline_Video_300x250_Play Game_All_Group',
    impressions: 2635,
    clicks: 1398,
    spend: 846,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Residential_Seasonal_500mbps_Static_16x9_Send WhatsApp Message_Conversion_Ltd',
    impressions: 1295,
    clicks: 1083,
    spend: 626,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos Fiber_Business_Seasonal_1000mbps_Video_1201x629_Learn More_Consideration_and Sons',
    impressions: 3587,
    clicks: 1221,
    spend: 524,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Business_July Promo_Manfesto_Static_1080x1920_Get Showtimes_Conversion',
    impressions: 4769,
    clicks: 1306,
    spend: 804,
  },
  {
    platform: 'Facebook Ad',
    campaign: 'Lumos_Business_Seasonal_Tagline_Static_1080x1080_Get Quote_All',
    impressions: 4971,
    clicks: 1109,
    spend: 616,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Business_April Promo_100mbps_Carousel_300x600_Buy Tickets_Awareness_Inc',
    impressions: 1532,
    clicks: 1326,
    spend: 602,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Residential_DecemberPromo_Manfesto 3_Video_320x50_View Event_Conversion_Inc',
    impressions: 728,
    clicks: 1405,
    spend: 700,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Northstate_Residential_January Promo_General_Promotional_970x250_View Event_Kaitlyn Rocks',
    impressions: 4354,
    clicks: 1443,
    spend: 880,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Business_August Promo_Manfesto_Static_15_Donate Now_All_PLC',
    impressions: 608,
    clicks: 1341,
    spend: 513,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Residential_March Promo_General_Promotional_300x200_View Event_Conversion',
    impressions: 850,
    clicks: 1443,
    spend: 892,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Business_August Promo_100 Percent Fiber_Video_300x200_Sign Up_All',
    impressions: 1059,
    clicks: 1137,
    spend: 768,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Business_April Promo_Gigabit Fiber_Video_300x600_Sign Up_Awareness_LLC',
    impressions: 4984,
    clicks: 1130,
    spend: 526,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Residential_Seasonal_Manfesto_Carousel_300x50_Call Now_Kaitlyn Rocks_LLC',
    impressions: 1272,
    clicks: 1398,
    spend: 705,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_May Promo_Manfesto 3_Video_728x90_Get Offer_Consideration_Inc',
    impressions: 2496,
    clicks: 1152,
    spend: 579,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Residential_May Promo_Manfesto 1_Static_1920x1080_Request Time_Conversion',
    impressions: 861,
    clicks: 1270,
    spend: 671,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_Evergreen_100 Percent Fiber_Promotional_320x50_Contact Us_Awareness_and Sons',
    impressions: 1999,
    clicks: 1087,
    spend: 811,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos Fiber_Business_September Promo_Gigabit Fiber_Promotional_728x90_Learn More_All',
    impressions: 4654,
    clicks: 1040,
    spend: 968,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos Fiber_Business_DecemberPromo_Tagline_Video_300x600_Sign Up_Consideration',
    impressions: 2531,
    clicks: 1178,
    spend: 757,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos Fiber_Residential_February Promo_500mbps_Gif_16x9_Save_Conversion',
    impressions: 828,
    clicks: 1443,
    spend: 524,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Business_Brand_Manfesto 3_Video_300x60_Open Link_Kaitlyn Rocks',
    impressions: 492,
    clicks: 1102,
    spend: 835,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Business_September Promo_General_Gif_1201x629_See Menu_Consideration',
    impressions: 4513,
    clicks: 1099,
    spend: 650,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos Fiber_Residential_June Promo_1000mbps_Promotional_16x9_Learn More_Kaitlyn Rocks_Ltd',
    impressions: 1920,
    clicks: 1388,
    spend: 567,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Business_NovemberPromo_Tagline_Video_1920x1080_Find a financial advisor_Kaitlyn Rocks',
    impressions: 1905,
    clicks: 1297,
    spend: 865,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Business_May Promo_General_Carousel_300x60_Get Directions_Awareness_and Sons',
    impressions: 3414,
    clicks: 1336,
    spend: 722,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_July Promo_General_Carousel_1080x1920_Like Page_Kaitlyn Rocks_Group',
    impressions: 3233,
    clicks: 1079,
    spend: 601,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Residential_Evergreen_Manfesto 2_Static_300x600_Sign Up_Consideration_LLC',
    impressions: 370,
    clicks: 1491,
    spend: 610,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_NovemberPromo_100 Percent Fiber_Static_1080x1080_Download_Consideration_Inc',
    impressions: 2617,
    clicks: 1097,
    spend: 983,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Residential_September Promo_Manfesto_Carousel_1080x1920_Download_Conversion_PLC',
    impressions: 460,
    clicks: 1103,
    spend: 504,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Residential_September Promo_Manfesto 3_Gif_300x50_Listen Now_Consideration_and Sons',
    impressions: 3581,
    clicks: 1403,
    spend: 832,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_April Promo_100 Percent Fiber_Carousel_300x250_Install Now_Awareness_PLC',
    impressions: 1637,
    clicks: 1216,
    spend: 916,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos Fiber_Business_May Promo_Manfesto 2_Promotional_160x600_Subscribe_Awareness',
    impressions: 4612,
    clicks: 1115,
    spend: 502,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Residential_Seasonal_Tagline_Static_320x50_Apply Now_Consideration_Ltd',
    impressions: 3850,
    clicks: 1232,
    spend: 590,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_Evergreen_Manfesto 3_Promotional_15_Send Message_Consideration_LLC',
    impressions: 3272,
    clicks: 1228,
    spend: 791,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos_Business_July Promo_Manfesto 2_Gif_320x50_Get Directions_All_Ltd',
    impressions: 3252,
    clicks: 1099,
    spend: 986,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos_Residential_January Promo_Manfesto_Static_12_Download_Awareness_Ltd',
    impressions: 4323,
    clicks: 1310,
    spend: 502,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos_Residential_April Promo_Manfesto 1_Static_11_Download_Awareness_PLC',
    impressions: 3524,
    clicks: 1146,
    spend: 602,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos Fiber_Business_June Promo_500mbps_Promotional_1080x1080_Donate Now_Consideration',
    impressions: 4549,
    clicks: 1198,
    spend: 823,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Residential_NovemberPromo_Gigabit Fiber_Gif_160x600_Save_Conversion',
    impressions: 4660,
    clicks: 1301,
    spend: 877,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos Fiber_Business_August Promo_100 Percent Fiber_Static_300x50_Request Time_Conversion_PLC',
    impressions: 2167,
    clicks: 1189,
    spend: 770,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Residential_Evergreen_100mbps_Promotional_300x50_Sign Up_All_PLC',
    impressions: 1449,
    clicks: 1176,
    spend: 505,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Business_Brand_100mbps_Promotional_728x90_Request Time_Awareness_PLC',
    impressions: 2139,
    clicks: 1268,
    spend: 543,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_July Promo_500mbps_Static_25_Call Now_Awareness_Inc',
    impressions: 1778,
    clicks: 1469,
    spend: 568,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_July Promo_Manfesto 1_Carousel_300x200_Sign Up_All_Inc',
    impressions: 3799,
    clicks: 1205,
    spend: 700,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Residential_February Promo_100 Percent Fiber_Carousel_300x200_Buy Tickets_Consideration_Group',
    impressions: 4067,
    clicks: 1177,
    spend: 789,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Business_NovemberPromo_Gigabit Fiber_Promotional_970x250_Download_Awareness_Ltd',
    impressions: 761,
    clicks: 1257,
    spend: 683,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Residential_September Promo_Gigabit Fiber_Promotional_970x250_Order Now_All_PLC',
    impressions: 884,
    clicks: 1151,
    spend: 884,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_DecemberPromo_Manfesto 3_Static_300x200_Use App_All',
    impressions: 3021,
    clicks: 1288,
    spend: 677,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos_Residential_February Promo_Gigabit Fiber_Promotional_300x60_Shop Now_All_Inc',
    impressions: 1054,
    clicks: 1001,
    spend: 504,
  },
  {
    platform: 'Facebook Ad',
    campaign: 'Northstate_Business_OctoberPromo_1000mbps_Gif_300x600_NoCTA_All',
    impressions: 3407,
    clicks: 1410,
    spend: 529,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Residential_August Promo_Manfesto_Promotional_728x90_Order Now_Conversion_Inc',
    impressions: 727,
    clicks: 1180,
    spend: 614,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Residential_January Promo_Manfesto_Promotional_300x600_Get Quote_Kaitlyn Rocks',
    impressions: 2825,
    clicks: 1346,
    spend: 636,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_NovemberPromo_100mbps_Static_320x50_Find a financial advisor_Kaitlyn Rocks',
    impressions: 3971,
    clicks: 1440,
    spend: 942,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Residential_February Promo_100mbps_Promotional_11_Send Message_Consideration_LLC',
    impressions: 1572,
    clicks: 1180,
    spend: 511,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Residential_March Promo_Manfesto 1_Static_1920x1080_Send Message_Conversion_LLC',
    impressions: 3472,
    clicks: 1199,
    spend: 543,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos Fiber_Business_September Promo_Tagline_Video_1201x629_Use App_Awareness',
    impressions: 1391,
    clicks: 1170,
    spend: 704,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Residential_Brand_Manfesto 3_Promotional_1080x1920_Switch Now_All_LLC',
    impressions: 3036,
    clicks: 1470,
    spend: 867,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Business_OctoberPromo_General_Promotional_160x600_Order Now_Consideration_and Sons',
    impressions: 4180,
    clicks: 1053,
    spend: 730,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_June Promo_General_Video_300x200_Listen Now_Consideration',
    impressions: 2083,
    clicks: 1089,
    spend: 538,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Residential_Seasonal_1000mbps_Promotional_300x600_Download_Consideration',
    impressions: 3476,
    clicks: 1165,
    spend: 735,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos Fiber_Business_OctoberPromo_500mbps_Promotional_300x200_Get Quote_Kaitlyn Rocks_and Sons',
    impressions: 2709,
    clicks: 1198,
    spend: 842,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Business_May Promo_Manfesto 2_Carousel_300x250_Sign Up_Awareness_Inc',
    impressions: 3475,
    clicks: 1500,
    spend: 921,
  },
  {
    platform: 'Facebook Placement',
    campaign: 'Northstate_Business_July Promo_General_Gif_320x50_NoCTA_All_LLC',
    impressions: 2918,
    clicks: 1105,
    spend: 982,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_August Promo_General_Gif_300x250_Use App_Kaitlyn Rocks',
    impressions: 2198,
    clicks: 1231,
    spend: 908,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos Fiber_Business_NovemberPromo_Gigabit Fiber_Carousel_12_Like Page_All',
    impressions: 1254,
    clicks: 1434,
    spend: 779,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Residential_NovemberPromo_Manfesto 3_Video_1201x629_Book Now_Awareness_PLC',
    impressions: 555,
    clicks: 1492,
    spend: 929,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Residential_August Promo_100 Percent Fiber_Gif_11_Contact Us_Awareness',
    impressions: 4523,
    clicks: 1033,
    spend: 833,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Business_September Promo_Tagline_Gif_300x250_Send WhatsApp Message_Kaitlyn Rocks_Group',
    impressions: 4607,
    clicks: 1316,
    spend: 562,
  },
  {
    platform: 'Google Ads Placement',
    campaign: 'Northstate_Business_May Promo_500mbps_Video_15_Download_All',
    impressions: 334,
    clicks: 1339,
    spend: 691,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Business_May Promo_500mbps_Video_12_Get Showtimes_Kaitlyn Rocks_PLC',
    impressions: 1687,
    clicks: 1301,
    spend: 775,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Business_September Promo_General_Promotional_300x250_Call Now_Awareness_LLC',
    impressions: 1287,
    clicks: 1200,
    spend: 700,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Residential_Seasonal_Manfesto 2_Promotional_11_Call Now_Kaitlyn Rocks_Group',
    impressions: 1502,
    clicks: 1495,
    spend: 593,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_Seasonal_500mbps_Carousel_25_Get Directions_All_Inc',
    impressions: 4875,
    clicks: 1420,
    spend: 777,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Residential_September Promo_1000mbps_Carousel_300x250_Get Directions_Conversion',
    impressions: 1571,
    clicks: 1426,
    spend: 664,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lumos Fiber_Residential_March Promo_Manfesto 3_Promotional_300x60_View Event_Conversion_and Sons',
    impressions: 755,
    clicks: 1238,
    spend: 731,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Residential_NovemberPromo_100 Percent Fiber_Static_300x60_Get Offer_Kaitlyn Rocks',
    impressions: 588,
    clicks: 1033,
    spend: 826,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Residential_April Promo_100 Percent Fiber_Video_15_Call Now_Consideration_Group',
    impressions: 4050,
    clicks: 1214,
    spend: 639,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Residential_July Promo_Manfesto 1_Video_25_View Event_Kaitlyn Rocks_Inc',
    impressions: 3782,
    clicks: 1068,
    spend: 804,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Business_September Promo_1000mbps_Carousel_300x60_Like Page_All_Ltd',
    impressions: 2176,
    clicks: 1379,
    spend: 607,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Northstate_Residential_Brand_Manfesto 2_Gif_25_Contact Us_Awareness_PLC',
    impressions: 4824,
    clicks: 1161,
    spend: 696,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Business_Evergreen_General_Static_728x90_Learn More_Consideration',
    impressions: 1768,
    clicks: 1205,
    spend: 512,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos Fiber_Residential_January Promo_General_Gif_970x250_Get Directions_Awareness_Inc',
    impressions: 2707,
    clicks: 1288,
    spend: 692,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos Fiber_Residential_NovemberPromo_1000mbps_Carousel_1080x1080_Get Showtimes_All_Group',
    impressions: 1303,
    clicks: 1152,
    spend: 667,
  },
  {
    platform: 'Google Ads Ad',
    campaign: 'Northstate_Residential_Brand_General_Gif_300x50_Sign Up_All_LLC',
    impressions: 847,
    clicks: 1171,
    spend: 867,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Business_NovemberPromo_Tagline_Video_1920x1080_Get Offer_All',
    impressions: 480,
    clicks: 1324,
    spend: 723,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_February Promo_Manfesto 1_Carousel_15_Shop Now_Consideration_Group',
    impressions: 4718,
    clicks: 1011,
    spend: 675,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Residential_OctoberPromo_General_Carousel_16x9_Open Link_Conversion_Ltd',
    impressions: 2905,
    clicks: 1317,
    spend: 708,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Residential_May Promo_100mbps_Video_11_Watch More_Awareness',
    impressions: 2942,
    clicks: 1108,
    spend: 599,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Northstate_Business_September Promo_Tagline_Video_970x250_Apply Now_Awareness',
    impressions: 1707,
    clicks: 1359,
    spend: 917,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Residential_February Promo_1000mbps_Video_1201x629_Subscribe_All_PLC',
    impressions: 3774,
    clicks: 1182,
    spend: 631,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos Fiber_Business_March Promo_Gigabit Fiber_Static_320x50_Like Page_Awareness',
    impressions: 669,
    clicks: 1441,
    spend: 691,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lumos_Business_June Promo_100mbps_Gif_1080x1920_Open Link_Conversion_LLC',
    impressions: 1070,
    clicks: 1295,
    spend: 588,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Business_February Promo_500mbps_Static_728x90_Download_Consideration_Inc',
    impressions: 1487,
    clicks: 1216,
    spend: 550,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Business_Evergreen_1000mbps_Static_11_Get Quote_Awareness_Group',
    impressions: 2899,
    clicks: 1167,
    spend: 556,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos_Residential_February Promo_1000mbps_Promotional_1080x1080_Contact Us_All',
    impressions: 3900,
    clicks: 1487,
    spend: 617,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lumos_Business_Seasonal_General_Promotional_160x600_Request Time_Consideration',
    impressions: 2297,
    clicks: 1030,
    spend: 968,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lumos Fiber_Residential_May Promo_100mbps_Carousel_16x9_Watch More_Awareness_Group',
    impressions: 1668,
    clicks: 1421,
    spend: 818,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Northstate_Business_Seasonal_Gigabit Fiber_Gif_25_Find a financial advisor_Conversion_Group',
    impressions: 1684,
    clicks: 1121,
    spend: 821,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Northstate_Residential_June Promo_Manfesto 2_Carousel_300x60_Install Now_All_and Sons',
    impressions: 2091,
    clicks: 1367,
    spend: 710,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lumos_Residential_May Promo_Tagline_Static_320x50_Install Now_Awareness_PLC',
    impressions: 3343,
    clicks: 1326,
    spend: 617,
  },
];

export default campaigns;
