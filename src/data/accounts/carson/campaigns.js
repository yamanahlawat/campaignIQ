const campaigns = [
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Social_Social Post_DRAFTKINGS_Customer_Job Title_CPA_LearnMore_HTML5_Test_Desktop',
    impressions: 1316,
    clicks: 1111,
    spend: 658,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Audio_Display_In Banner Video_YAHOO_Retargeting_Search Retargeting_CPA_LearnMore_HTML5_Test_Cross Device',
    impressions: 4902,
    clicks: 1242,
    spend: 562,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Social_Trueview Instream Skip_VEVO.COM_Retargeting_Geo_CPM_LearnMore_Static Display_Reason55_Cross Device',
    impressions: 1345,
    clicks: 1247,
    spend: 855,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Video_Display_Trueview Instream No Skip_OGURY_Retargeting_Multiple Attributes_CPC_LearnMore_HTML5_Reason58_Cross Device',
    impressions: 2262,
    clicks: 1443,
    spend: 869,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Audio_Lead Gen_NEW YORK TIMES_Retargeting_ASIN Remarketing_dCPM_LearnMore_Static Display_Reason30_Desktop',
    impressions: 1525,
    clicks: 1403,
    spend: 874,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Display_Programmatic_Trueview Instream No Skip_IHEARTMEDIA_Prospecting_Click Retargeting_Added Value_LearnMore_HTML5_Streamline_Desktop',
    impressions: 1300,
    clicks: 1412,
    spend: 853,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Video_Programmatic_In Banner Video_100 THIEVES_Customer_Interests_Added Value_LearnMore_Video_Reason55_Desktop',
    impressions: 1223,
    clicks: 1011,
    spend: 549,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_GIF_MSN_Retargeting_Search Retargeting_CPA_LearnMore_Animated Display_Reason58_CTV',
    impressions: 1307,
    clicks: 1260,
    spend: 719,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Audio_FEP VOD_LAW & CRIME NETWORK_Customer_Contextual_Make Good_LearnMore_Static Display_Reason108_CTV',
    impressions: 1257,
    clicks: 1480,
    spend: 659,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Display_Overlay_LIVERAMP_Customer_Geo_CPA_LearnMore_Static Display_Reason58_Desktop',
    impressions: 2610,
    clicks: 1058,
    spend: 697,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Search_Search_Instream No Skip_TEAM WHISTLE_Customer_Alchemy_Flat Rate_LearnMore_Animated Display_Reason58_CTV',
    impressions: 1936,
    clicks: 1428,
    spend: 690,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Social_Video_Button_VIANT_Prospecting_Behavioral_Make Good_LearnMore_Video_Price_Desktop',
    impressions: 3813,
    clicks: 1190,
    spend: 991,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_Reach Skip_WJR-AM_Prospecting_Alchemy_Flat Rate_LearnMore_Static Display_BooksReady_Desktop',
    impressions: 3990,
    clicks: 1116,
    spend: 552,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Social_Audio_Midroll Skip_ABC_Customer_Click Retargeting_CPM_LearnMore_HTML5_BooksReady_Desktop',
    impressions: 1090,
    clicks: 1078,
    spend: 900,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Social_Audio_Video_NBC SPORTS NETWORK_Customer_TV Targeting_CPC_LearnMore_Animated Display_Time_Cross Device',
    impressions: 3510,
    clicks: 1183,
    spend: 640,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Programmatic_Audio_Text_DISCOVERY CHANNEL_Customer_Search Retargeting_dCPM_LearnMore_Video_Reason55_CTV',
    impressions: 1661,
    clicks: 1166,
    spend: 559,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Search_Video_Reach Skip_AUSTIN AMERICAN STATESMAN_Retargeting_Click Retargeting_CPA_LearnMore_Video_Reason55_Cross Device',
    impressions: 3133,
    clicks: 1183,
    spend: 668,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Audio_Programmatic_Logo_CAPTIV8_Customer_Demo_Flat Rate_LearnMore_Video_Test_Desktop',
    impressions: 4485,
    clicks: 1498,
    spend: 665,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Video_Intream Skip_NATIONAL PUBLIC RADIO_Retargeting_Multiple Attributes_dCPM_LearnMore_Video_BooksReady_CTV',
    impressions: 2215,
    clicks: 1339,
    spend: 915,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Programmatic_Gmail_DRAFTKINGS_Prospecting_Retargeting_Flat Rate_LearnMore_Animated Display_Reason58_Desktop',
    impressions: 2335,
    clicks: 1226,
    spend: 540,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_FEP_JACKSONVILLE FREE PRESS_Customer_Geo_CPC_LearnMore_Animated Display_Price_CTV',
    impressions: 1524,
    clicks: 1159,
    spend: 530,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Programmatic_Display_Email_WGRZ-TV_Prospecting_Alchemy_dCPM_LearnMore_Static Display_Price_Tablet',
    impressions: 2894,
    clicks: 1159,
    spend: 897,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Audio_Programmatic_Masthead_KNIX-FM_Retargeting_Resonate_CPM_LearnMore_Video_Price_Cross Device',
    impressions: 3384,
    clicks: 1358,
    spend: 891,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Search_GIF_WTOP-TV_Customer_ASIN Remarketing_Make Good_LearnMore_HTML5_Reason108_Mobile',
    impressions: 2797,
    clicks: 1150,
    spend: 632,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Social_VOD_BALLY SPORTS FLORIDA_Prospecting_Interests_Make Good_LearnMore_Static Display_Time_Desktop',
    impressions: 3804,
    clicks: 1272,
    spend: 530,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Social_Search_Outstream_ADDAPTIVE INTELLIGENCE_Retargeting_Contextual_CPA_LearnMore_Animated Display_Streamline_Mobile',
    impressions: 291,
    clicks: 1471,
    spend: 674,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Programmatic_CTV Video_TURNER_Prospecting_Interests_Added Value_LearnMore_Video_Price_Tablet',
    impressions: 1999,
    clicks: 1218,
    spend: 975,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Social_Sponsorship_HARVARD BUSINESS REVIEW_Retargeting_Multiple Attributes_CPM_LearnMore_HTML5_Reason58_Mobile',
    impressions: 2209,
    clicks: 1338,
    spend: 752,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Audio_Social_Instream No Skip_ROOSTER TEETH_Customer_Interests_dCPM_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 4504,
    clicks: 1202,
    spend: 692,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Display_Trueview Instream Skip_WARNER MEDIA_Customer_Behavioral_CPM_LearnMore_Video_Reason108_CTV',
    impressions: 3504,
    clicks: 1013,
    spend: 818,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Search_Video_Expandable_APPLE SEARCH_Customer_CRM_Added Value_LearnMore_Video_Reason55_Tablet',
    impressions: 4380,
    clicks: 1008,
    spend: 799,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Programmatic_Audio_Intream Skip_USA NETWORK_Retargeting_Demo_Added Value_LearnMore_Video_Test_CTV',
    impressions: 4015,
    clicks: 1406,
    spend: 994,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Search_Reach No Skip_HOME TEAM SPORTS_Prospecting_Geo_Added Value_LearnMore_Static Display_Reason30_Tablet',
    impressions: 4672,
    clicks: 1188,
    spend: 704,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Audio_Search_Postroll Skip_INNOVID_Prospecting_Job Title_CPA_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 2752,
    clicks: 1299,
    spend: 793,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Display_Video_Intream Skip_ROOSTER TEETH_Customer_Search Retargeting_dCPM_LearnMore_Static Display_Reason30_Mobile',
    impressions: 3457,
    clicks: 1427,
    spend: 916,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Search_Expandable_TWITTER_Customer_Resonate_Added Value_LearnMore_Video_Time_Cross Device',
    impressions: 4039,
    clicks: 1039,
    spend: 941,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Search_Search_GIF_MEDSCAPE_Prospecting_ASIN Remarketing_Make Good_LearnMore_Animated Display_Streamline_CTV',
    impressions: 2385,
    clicks: 1353,
    spend: 981,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Social_Audio_Addressable Video_THE PLUG_Customer_Look A Like_CPV_LearnMore_Static Display_Test_Mobile',
    impressions: 3576,
    clicks: 1064,
    spend: 504,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Search_Text_BUILDERS DIGITAL_Retargeting_Search Retargeting_CPA_LearnMore_Static Display_Reason55_CTV',
    impressions: 4417,
    clicks: 1292,
    spend: 823,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Programmatic_Social_Trueview Discovery_GOOGLE GDN_Prospecting_Resonate_CPA_LearnMore_HTML5_Time_Tablet',
    impressions: 491,
    clicks: 1336,
    spend: 502,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Video_Display_Reach No Skip_ITM NEWSPAPER MEDIA_Retargeting_Impression Retargeting_CPC_LearnMore_Animated Display_Streamline_CTV',
    impressions: 3860,
    clicks: 1462,
    spend: 629,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Search_Search_Gmail_PWC_Customer_Interests_Added Value_LearnMore_Static Display_Reason30_CTV',
    impressions: 1730,
    clicks: 1471,
    spend: 950,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Display_Social_Overlay_LUCID_Prospecting_ASIN Remarketing_CPC_LearnMore_Video_Price_Desktop',
    impressions: 982,
    clicks: 1249,
    spend: 971,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Social_Video_Social Post_REDDIT_Prospecting_TV Targeting_CPA_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 4512,
    clicks: 1156,
    spend: 654,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Programmatic_Video_FEP_USA TODAY_Prospecting_Cluster_CPA_LearnMore_Video_Price_CTV',
    impressions: 380,
    clicks: 1194,
    spend: 933,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Social_Social_Other Takeover_OATH_Customer_Search Retargeting_CPC_LearnMore_Video_Streamline_Tablet',
    impressions: 1692,
    clicks: 1435,
    spend: 958,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Search_Video_Midroll No Skip_EPOCRATES_Prospecting_App Retargeting_Make Good_LearnMore_Video_Streamline_Cross Device',
    impressions: 4719,
    clicks: 1337,
    spend: 560,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Video_Search_Google Preferred_THE PLUG_Prospecting_Keyword_CPA_LearnMore_Animated Display_Reason30_CTV',
    impressions: 4020,
    clicks: 1292,
    spend: 977,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Audio_Postroll Skip_RESONATE_Prospecting_Look A Like_CPA_LearnMore_Static Display_Reason108_Desktop',
    impressions: 2329,
    clicks: 1283,
    spend: 513,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Video_Social_Other Takeover_TRU TV_Prospecting_Multiple Attributes_CPM_LearnMore_HTML5_Reason58_CTV',
    impressions: 3863,
    clicks: 1277,
    spend: 731,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Video_Social_Homepage Takeover_LIVERAMP_Retargeting_Job Title_CPA_LearnMore_Animated Display_Price_Desktop',
    impressions: 1967,
    clicks: 1472,
    spend: 547,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Audio_Audio_Trueview Instream Skip_AMOBEE_Prospecting_Keyword_CPC_LearnMore_HTML5_Reason55_Desktop',
    impressions: 4741,
    clicks: 1179,
    spend: 839,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Programmatic_Video_Homepage Takeover_SUPERAWESOME_Retargeting_Geo_CPA_LearnMore_HTML5_Test_CTV',
    impressions: 202,
    clicks: 1291,
    spend: 898,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Search_Display_Interstitial_WTOP-TV_Customer_Demo_Make Good_LearnMore_HTML5_Streamline_Mobile',
    impressions: 3190,
    clicks: 1245,
    spend: 902,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Search_Search_Midroll Skip_YOUTUBE PROGRAMMATIC_Prospecting_Contextual_dCPM_LearnMore_Video_Streamline_Desktop',
    impressions: 3228,
    clicks: 1218,
    spend: 547,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Search_Social_CTV Video_EPOCRATES_Prospecting_App Retargeting_CPC_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 3916,
    clicks: 1103,
    spend: 932,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Search_Social Post_VISTAR_Retargeting_Search Retargeting_CPC_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 2891,
    clicks: 1308,
    spend: 875,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Display_Social_Reach No Skip_ADDAPTIVE INTELLIGENCE_Retargeting_Look A Like_CPA_LearnMore_Video_Time_Tablet',
    impressions: 4850,
    clicks: 1420,
    spend: 969,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Video_Email_BUILDERS DIGITAL_Prospecting_Look A Like_CPA_LearnMore_Animated Display_Test_Tablet',
    impressions: 313,
    clicks: 1308,
    spend: 949,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Display_Display_Logo_YELP_Prospecting_Click Retargeting_Make Good_LearnMore_Static Display_Reason108_Mobile',
    impressions: 1816,
    clicks: 1346,
    spend: 895,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Search_Homepage Takeover_NEW YORK TIMES_Retargeting_Click Retargeting_Added Value_LearnMore_HTML5_Time_Cross Device',
    impressions: 2014,
    clicks: 1050,
    spend: 874,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Social_Display_Trueview Instream Skip_DISH NETWORK_Customer_App Retargeting_CPA_LearnMore_Animated Display_Streamline_Desktop',
    impressions: 2694,
    clicks: 1171,
    spend: 783,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Audio_Sponsorship_GOOGLE ADS_Prospecting_TV Targeting_CPM_LearnMore_Video_Reason55_Desktop',
    impressions: 4786,
    clicks: 1462,
    spend: 701,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Audio_Social_Addressable Video_VOX MEDIA_Retargeting_Interests_CPC_LearnMore_Static Display_BooksReady_CTV',
    impressions: 4412,
    clicks: 1061,
    spend: 599,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Social_Audio_AAP NEWS_Customer_Behavioral_Make Good_LearnMore_Static Display_Streamline_CTV',
    impressions: 4068,
    clicks: 1050,
    spend: 613,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Search_Trueview Instream Skip_THE TRADE DESK_Prospecting_Click Retargeting_CPA_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 843,
    clicks: 1135,
    spend: 615,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Display_Audio_VOD_YAHOO_Retargeting_Demo_CPC_LearnMore_Static Display_Price_Cross Device',
    impressions: 4108,
    clicks: 1229,
    spend: 903,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Social_VOD_NBC UNIVERSAL_Retargeting_Search Retargeting_dCPM_LearnMore_Static Display_BooksReady_Cross Device',
    impressions: 1552,
    clicks: 1488,
    spend: 556,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Social_Search_CTV Video_MIT SLOAN MANAGEMENT REVIEW_Prospecting_Site Retargeting_Added Value_LearnMore_Animated Display_Reason55_Mobile',
    impressions: 1119,
    clicks: 1047,
    spend: 902,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Programmatic_Other Takeover_FACEBOOK_Retargeting_App Retargeting_CPV_LearnMore_Video_Time_Tablet',
    impressions: 1137,
    clicks: 1135,
    spend: 880,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Programmatic_Social_Masthead_DISH NETWORK_Prospecting_Keyword_Flat Rate_LearnMore_Static Display_BooksReady_CTV',
    impressions: 3433,
    clicks: 1190,
    spend: 940,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Social_Video_Midroll No Skip_VALASSIS_Retargeting_Multiple Attributes_Flat Rate_LearnMore_Video_Time_Tablet',
    impressions: 4931,
    clicks: 1084,
    spend: 690,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Display_Display_Preroll No Skip_SAMSUNG_Retargeting_Geo_CPV_LearnMore_Animated Display_Time_Tablet',
    impressions: 1792,
    clicks: 1218,
    spend: 740,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Audio_Display_Instream No Skip_CRACKLE PLUS_Prospecting_Alchemy_Added Value_LearnMore_Static Display_Price_Mobile',
    impressions: 1335,
    clicks: 1242,
    spend: 911,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Search_Social_Intream Skip_APPLE SEARCH_Prospecting_Alchemy_CPA_LearnMore_Video_Reason55_Tablet',
    impressions: 1122,
    clicks: 1205,
    spend: 738,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Display_Programmatic_Postroll No Skip_GAMUT SMART MEDIA_Customer_Behavioral_Flat Rate_LearnMore_Video_Price_Mobile',
    impressions: 3978,
    clicks: 1028,
    spend: 622,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Social_Video_Audio_USA NETWORK_Prospecting_Geo_Flat Rate_LearnMore_Animated Display_Reason58_Tablet',
    impressions: 1191,
    clicks: 1056,
    spend: 975,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Audio_Social_Logo_YAHOO_Prospecting_Alchemy_Flat Rate_LearnMore_HTML5_Reason58_Desktop',
    impressions: 1066,
    clicks: 1404,
    spend: 512,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Programmatic_Display_Mix_VEVO.COM_Retargeting_Search Retargeting_Added Value_LearnMore_HTML5_Reason30_CTV',
    impressions: 631,
    clicks: 1165,
    spend: 790,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Audio_Audio_Preroll No Skip_BLACK ENTERPRISE_Prospecting_Demo_Added Value_LearnMore_Animated Display_Test_Tablet',
    impressions: 2397,
    clicks: 1093,
    spend: 717,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Video_Social_VOD_FACEBOOK_Prospecting_Impression Retargeting_Flat Rate_LearnMore_Static Display_Test_Tablet',
    impressions: 3015,
    clicks: 1248,
    spend: 892,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Display_Social_Audio_PLACE IQ_Prospecting_Cluster_Make Good_LearnMore_Animated Display_Reason108_CTV',
    impressions: 4933,
    clicks: 1169,
    spend: 591,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Programmatic_Social_Preroll No Skip_GAMUT SMART MEDIA_Retargeting_Resonate_CPC_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 3584,
    clicks: 1379,
    spend: 802,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Video_Intream Skip_ROKU_Customer_Interests_CPA_LearnMore_Video_BooksReady_CTV',
    impressions: 2572,
    clicks: 1250,
    spend: 592,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Programmatic_Mix_SAMSUNG_Prospecting_Geo_CPM_LearnMore_Static Display_Reason30_CTV',
    impressions: 3402,
    clicks: 1424,
    spend: 666,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Programmatic_Social_Banner_QUIZLET_Customer_Contextual_CPM_LearnMore_HTML5_Price_Cross Device',
    impressions: 959,
    clicks: 1416,
    spend: 640,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Video_Trueview :6 Bumpers_AMOBEE_Prospecting_Resonate_CPM_LearnMore_Static Display_Streamline_Desktop',
    impressions: 3052,
    clicks: 1408,
    spend: 910,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Display_OOH_VIANT_Prospecting_ASIN Remarketing_Make Good_LearnMore_Animated Display_Reason55_CTV',
    impressions: 3378,
    clicks: 1219,
    spend: 959,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Social_Video_Midroll Skip_MIT SLOAN MANAGEMENT REVIEW_Customer_Multiple Attributes_Added Value_LearnMore_Video_Reason30_Tablet',
    impressions: 3011,
    clicks: 1016,
    spend: 800,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Search_Companion_POLITICO_Retargeting_Multiple Attributes_Make Good_LearnMore_Static Display_BooksReady_CTV',
    impressions: 732,
    clicks: 1287,
    spend: 783,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Display_Search_Other Takeover_TRUCKER NEWS_Prospecting_App Retargeting_Flat Rate_LearnMore_Static Display_Test_Desktop',
    impressions: 4927,
    clicks: 1362,
    spend: 608,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Search_Audio_Other Takeover_IHEARTMEDIA_Prospecting_Alchemy_Make Good_LearnMore_Video_Price_Tablet',
    impressions: 666,
    clicks: 1467,
    spend: 716,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Programmatic_Audio_Reach No Skip_KCNC-TV_Retargeting_Cluster_Flat Rate_LearnMore_Static Display_Streamline_CTV',
    impressions: 4931,
    clicks: 1166,
    spend: 630,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Audio_Video_In Banner Video_EPOCRATES_Prospecting_App Retargeting_Flat Rate_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 4635,
    clicks: 1347,
    spend: 730,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Audio_Outstream_BROADBANDTV_Prospecting_Contextual_Added Value_LearnMore_Video_Reason55_CTV',
    impressions: 711,
    clicks: 1144,
    spend: 737,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Audio_Video_Text_TURNER SPORTS DIGITAL_Prospecting_Site Retargeting_CPM_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 2234,
    clicks: 1039,
    spend: 989,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Programmatic_Audio_Roadblock_FLORIDA TIMES UNION_Prospecting_ASIN Remarketing_CPV_LearnMore_Static Display_Streamline_CTV',
    impressions: 4685,
    clicks: 1052,
    spend: 928,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Search_Audio_ERIE TIMES NEWS_Customer_Impression Retargeting_CPV_LearnMore_Static Display_Reason55_Mobile',
    impressions: 1731,
    clicks: 1025,
    spend: 935,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Social_Trueview Instream No Skip_ADSWIZZ_Retargeting_Search Retargeting_CPM_LearnMore_Static Display_Streamline_Mobile',
    impressions: 4930,
    clicks: 1290,
    spend: 954,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Search_Other Takeover_PACVUE_Customer_Geo_CPC_LearnMore_Static Display_Reason58_Desktop',
    impressions: 812,
    clicks: 1209,
    spend: 819,
  },
];

export default campaigns;
