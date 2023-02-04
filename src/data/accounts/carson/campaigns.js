const campaigns = [
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Social_Social Post_DRAFTKINGS_Customer_Job Title_CPA_LearnMore_HTML5_Test_Desktop',
    impressions: 438,
    clicks: 948,
    spend: 730,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Audio_Display_In Banner Video_YAHOO_Retargeting_Search Retargeting_CPA_LearnMore_HTML5_Test_Cross Device',
    impressions: 940,
    clicks: 803,
    spend: 724,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Social_Trueview Instream Skip_VEVO.COM_Retargeting_Geo_CPM_LearnMore_Static Display_Reason55_Cross Device',
    impressions: 249,
    clicks: 217,
    spend: 878,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Video_Display_Trueview Instream No Skip_OGURY_Retargeting_Multiple Attributes_CPC_LearnMore_HTML5_Reason58_Cross Device',
    impressions: 225,
    clicks: 847,
    spend: 959,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Audio_Lead Gen_NEW YORK TIMES_Retargeting_ASIN Remarketing_dCPM_LearnMore_Static Display_Reason30_Desktop',
    impressions: 802,
    clicks: 802,
    spend: 691,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Programmatic_Trueview Instream No Skip_IHEARTMEDIA_Prospecting_Click Retargeting_Added Value_LearnMore_HTML5_Streamline_Desktop',
    impressions: 364,
    clicks: 319,
    spend: 438,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Video_Programmatic_In Banner Video_100 THIEVES_Customer_Interests_Added Value_LearnMore_Video_Reason55_Desktop',
    impressions: 641,
    clicks: 757,
    spend: 883,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Social_Programmatic_GIF_MSN_Retargeting_Search Retargeting_CPA_LearnMore_Animated Display_Reason58_CTV',
    impressions: 523,
    clicks: 315,
    spend: 275,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Audio_FEP VOD_LAW & CRIME NETWORK_Customer_Contextual_Make Good_LearnMore_Static Display_Reason108_CTV',
    impressions: 340,
    clicks: 335,
    spend: 876,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Social_Display_Overlay_LIVERAMP_Customer_Geo_CPA_LearnMore_Static Display_Reason58_Desktop',
    impressions: 704,
    clicks: 382,
    spend: 408,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Search_Search_Instream No Skip_TEAM WHISTLE_Customer_Alchemy_Flat Rate_LearnMore_Animated Display_Reason58_CTV',
    impressions: 849,
    clicks: 718,
    spend: 542,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Social_Video_Button_VIANT_Prospecting_Behavioral_Make Good_LearnMore_Video_Price_Desktop',
    impressions: 826,
    clicks: 866,
    spend: 545,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_Reach Skip_WJR-AM_Prospecting_Alchemy_Flat Rate_LearnMore_Static Display_BooksReady_Desktop',
    impressions: 719,
    clicks: 925,
    spend: 481,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Social_Audio_Midroll Skip_ABC_Customer_Click Retargeting_CPM_LearnMore_HTML5_BooksReady_Desktop',
    impressions: 286,
    clicks: 626,
    spend: 673,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Audio_Video_NBC SPORTS NETWORK_Customer_TV Targeting_CPC_LearnMore_Animated Display_Time_Cross Device',
    impressions: 371,
    clicks: 570,
    spend: 742,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Programmatic_Audio_Text_DISCOVERY CHANNEL_Customer_Search Retargeting_dCPM_LearnMore_Video_Reason55_CTV',
    impressions: 311,
    clicks: 642,
    spend: 287,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Search_Video_Reach Skip_AUSTIN AMERICAN STATESMAN_Retargeting_Click Retargeting_CPA_LearnMore_Video_Reason55_Cross Device',
    impressions: 517,
    clicks: 332,
    spend: 382,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Audio_Programmatic_Logo_CAPTIV8_Customer_Demo_Flat Rate_LearnMore_Video_Test_Desktop',
    impressions: 989,
    clicks: 509,
    spend: 520,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Video_Intream Skip_NATIONAL PUBLIC RADIO_Retargeting_Multiple Attributes_dCPM_LearnMore_Video_BooksReady_CTV',
    impressions: 933,
    clicks: 468,
    spend: 473,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Programmatic_Gmail_DRAFTKINGS_Prospecting_Retargeting_Flat Rate_LearnMore_Animated Display_Reason58_Desktop',
    impressions: 220,
    clicks: 398,
    spend: 678,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_FEP_JACKSONVILLE FREE PRESS_Customer_Geo_CPC_LearnMore_Animated Display_Price_CTV',
    impressions: 826,
    clicks: 996,
    spend: 621,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Programmatic_Display_Email_WGRZ-TV_Prospecting_Alchemy_dCPM_LearnMore_Static Display_Price_Tablet',
    impressions: 576,
    clicks: 646,
    spend: 289,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Audio_Programmatic_Masthead_KNIX-FM_Retargeting_Resonate_CPM_LearnMore_Video_Price_Cross Device',
    impressions: 914,
    clicks: 1000,
    spend: 578,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Search_GIF_WTOP-TV_Customer_ASIN Remarketing_Make Good_LearnMore_HTML5_Reason108_Mobile',
    impressions: 770,
    clicks: 238,
    spend: 266,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Display_Social_VOD_BALLY SPORTS FLORIDA_Prospecting_Interests_Make Good_LearnMore_Static Display_Time_Desktop',
    impressions: 632,
    clicks: 553,
    spend: 256,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Social_Search_Outstream_ADDAPTIVE INTELLIGENCE_Retargeting_Contextual_CPA_LearnMore_Animated Display_Streamline_Mobile',
    impressions: 311,
    clicks: 517,
    spend: 701,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Programmatic_CTV Video_TURNER_Prospecting_Interests_Added Value_LearnMore_Video_Price_Tablet',
    impressions: 827,
    clicks: 447,
    spend: 573,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Programmatic_Social_Sponsorship_HARVARD BUSINESS REVIEW_Retargeting_Multiple Attributes_CPM_LearnMore_HTML5_Reason58_Mobile',
    impressions: 733,
    clicks: 245,
    spend: 473,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Audio_Social_Instream No Skip_ROOSTER TEETH_Customer_Interests_dCPM_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 376,
    clicks: 480,
    spend: 410,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Display_Trueview Instream Skip_WARNER MEDIA_Customer_Behavioral_CPM_LearnMore_Video_Reason108_CTV',
    impressions: 967,
    clicks: 327,
    spend: 876,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Search_Video_Expandable_APPLE SEARCH_Customer_CRM_Added Value_LearnMore_Video_Reason55_Tablet',
    impressions: 610,
    clicks: 775,
    spend: 892,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Programmatic_Audio_Intream Skip_USA NETWORK_Retargeting_Demo_Added Value_LearnMore_Video_Test_CTV',
    impressions: 749,
    clicks: 205,
    spend: 894,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Search_Reach No Skip_HOME TEAM SPORTS_Prospecting_Geo_Added Value_LearnMore_Static Display_Reason30_Tablet',
    impressions: 696,
    clicks: 349,
    spend: 999,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Audio_Search_Postroll Skip_INNOVID_Prospecting_Job Title_CPA_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 607,
    clicks: 420,
    spend: 925,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Display_Video_Intream Skip_ROOSTER TEETH_Customer_Search Retargeting_dCPM_LearnMore_Static Display_Reason30_Mobile',
    impressions: 826,
    clicks: 723,
    spend: 577,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Display_Search_Expandable_TWITTER_Customer_Resonate_Added Value_LearnMore_Video_Time_Cross Device',
    impressions: 685,
    clicks: 760,
    spend: 861,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Search_GIF_MEDSCAPE_Prospecting_ASIN Remarketing_Make Good_LearnMore_Animated Display_Streamline_CTV',
    impressions: 725,
    clicks: 375,
    spend: 933,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Social_Audio_Addressable Video_THE PLUG_Customer_Look A Like_CPV_LearnMore_Static Display_Test_Mobile',
    impressions: 932,
    clicks: 553,
    spend: 512,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Search_Text_BUILDERS DIGITAL_Retargeting_Search Retargeting_CPA_LearnMore_Static Display_Reason55_CTV',
    impressions: 213,
    clicks: 755,
    spend: 801,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Programmatic_Social_Trueview Discovery_GOOGLE GDN_Prospecting_Resonate_CPA_LearnMore_HTML5_Time_Tablet',
    impressions: 721,
    clicks: 933,
    spend: 814,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Video_Display_Reach No Skip_ITM NEWSPAPER MEDIA_Retargeting_Impression Retargeting_CPC_LearnMore_Animated Display_Streamline_CTV',
    impressions: 254,
    clicks: 284,
    spend: 737,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Search_Gmail_PWC_Customer_Interests_Added Value_LearnMore_Static Display_Reason30_CTV',
    impressions: 609,
    clicks: 658,
    spend: 835,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Display_Social_Overlay_LUCID_Prospecting_ASIN Remarketing_CPC_LearnMore_Video_Price_Desktop',
    impressions: 532,
    clicks: 739,
    spend: 748,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Video_Social Post_REDDIT_Prospecting_TV Targeting_CPA_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 938,
    clicks: 244,
    spend: 424,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Programmatic_Video_FEP_USA TODAY_Prospecting_Cluster_CPA_LearnMore_Video_Price_CTV',
    impressions: 801,
    clicks: 379,
    spend: 335,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Social_Social_Other Takeover_OATH_Customer_Search Retargeting_CPC_LearnMore_Video_Streamline_Tablet',
    impressions: 243,
    clicks: 586,
    spend: 892,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Search_Video_Midroll No Skip_EPOCRATES_Prospecting_App Retargeting_Make Good_LearnMore_Video_Streamline_Cross Device',
    impressions: 572,
    clicks: 968,
    spend: 688,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Video_Search_Google Preferred_THE PLUG_Prospecting_Keyword_CPA_LearnMore_Animated Display_Reason30_CTV',
    impressions: 779,
    clicks: 806,
    spend: 637,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Audio_Postroll Skip_RESONATE_Prospecting_Look A Like_CPA_LearnMore_Static Display_Reason108_Desktop',
    impressions: 295,
    clicks: 843,
    spend: 915,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Video_Social_Other Takeover_TRU TV_Prospecting_Multiple Attributes_CPM_LearnMore_HTML5_Reason58_CTV',
    impressions: 797,
    clicks: 281,
    spend: 835,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Video_Social_Homepage Takeover_LIVERAMP_Retargeting_Job Title_CPA_LearnMore_Animated Display_Price_Desktop',
    impressions: 879,
    clicks: 913,
    spend: 498,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Audio_Audio_Trueview Instream Skip_AMOBEE_Prospecting_Keyword_CPC_LearnMore_HTML5_Reason55_Desktop',
    impressions: 947,
    clicks: 628,
    spend: 843,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Programmatic_Video_Homepage Takeover_SUPERAWESOME_Retargeting_Geo_CPA_LearnMore_HTML5_Test_CTV',
    impressions: 474,
    clicks: 794,
    spend: 341,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Display_Interstitial_WTOP-TV_Customer_Demo_Make Good_LearnMore_HTML5_Streamline_Mobile',
    impressions: 818,
    clicks: 480,
    spend: 875,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Search_Search_Midroll Skip_YOUTUBE PROGRAMMATIC_Prospecting_Contextual_dCPM_LearnMore_Video_Streamline_Desktop',
    impressions: 301,
    clicks: 754,
    spend: 297,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Search_Social_CTV Video_EPOCRATES_Prospecting_App Retargeting_CPC_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 784,
    clicks: 549,
    spend: 880,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Display_Search_Social Post_VISTAR_Retargeting_Search Retargeting_CPC_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 585,
    clicks: 810,
    spend: 856,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Display_Social_Reach No Skip_ADDAPTIVE INTELLIGENCE_Retargeting_Look A Like_CPA_LearnMore_Video_Time_Tablet',
    impressions: 405,
    clicks: 535,
    spend: 728,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Search_Video_Email_BUILDERS DIGITAL_Prospecting_Look A Like_CPA_LearnMore_Animated Display_Test_Tablet',
    impressions: 312,
    clicks: 227,
    spend: 273,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Display_Display_Logo_YELP_Prospecting_Click Retargeting_Make Good_LearnMore_Static Display_Reason108_Mobile',
    impressions: 574,
    clicks: 383,
    spend: 587,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Search_Homepage Takeover_NEW YORK TIMES_Retargeting_Click Retargeting_Added Value_LearnMore_HTML5_Time_Cross Device',
    impressions: 607,
    clicks: 526,
    spend: 860,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Display_Trueview Instream Skip_DISH NETWORK_Customer_App Retargeting_CPA_LearnMore_Animated Display_Streamline_Desktop',
    impressions: 439,
    clicks: 445,
    spend: 293,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Audio_Sponsorship_GOOGLE ADS_Prospecting_TV Targeting_CPM_LearnMore_Video_Reason55_Desktop',
    impressions: 207,
    clicks: 389,
    spend: 312,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Audio_Social_Addressable Video_VOX MEDIA_Retargeting_Interests_CPC_LearnMore_Static Display_BooksReady_CTV',
    impressions: 358,
    clicks: 565,
    spend: 687,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Social_Audio_AAP NEWS_Customer_Behavioral_Make Good_LearnMore_Static Display_Streamline_CTV',
    impressions: 281,
    clicks: 492,
    spend: 831,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Search_Trueview Instream Skip_THE TRADE DESK_Prospecting_Click Retargeting_CPA_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 899,
    clicks: 349,
    spend: 244,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Audio_VOD_YAHOO_Retargeting_Demo_CPC_LearnMore_Static Display_Price_Cross Device',
    impressions: 711,
    clicks: 672,
    spend: 320,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Social_VOD_NBC UNIVERSAL_Retargeting_Search Retargeting_dCPM_LearnMore_Static Display_BooksReady_Cross Device',
    impressions: 256,
    clicks: 241,
    spend: 285,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Social_Search_CTV Video_MIT SLOAN MANAGEMENT REVIEW_Prospecting_Site Retargeting_Added Value_LearnMore_Animated Display_Reason55_Mobile',
    impressions: 913,
    clicks: 375,
    spend: 265,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Social_Programmatic_Other Takeover_FACEBOOK_Retargeting_App Retargeting_CPV_LearnMore_Video_Time_Tablet',
    impressions: 426,
    clicks: 514,
    spend: 511,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Programmatic_Social_Masthead_DISH NETWORK_Prospecting_Keyword_Flat Rate_LearnMore_Static Display_BooksReady_CTV',
    impressions: 578,
    clicks: 640,
    spend: 725,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Social_Video_Midroll No Skip_VALASSIS_Retargeting_Multiple Attributes_Flat Rate_LearnMore_Video_Time_Tablet',
    impressions: 919,
    clicks: 352,
    spend: 340,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Display_Display_Preroll No Skip_SAMSUNG_Retargeting_Geo_CPV_LearnMore_Animated Display_Time_Tablet',
    impressions: 753,
    clicks: 301,
    spend: 472,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Audio_Display_Instream No Skip_CRACKLE PLUS_Prospecting_Alchemy_Added Value_LearnMore_Static Display_Price_Mobile',
    impressions: 888,
    clicks: 433,
    spend: 412,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Social_Intream Skip_APPLE SEARCH_Prospecting_Alchemy_CPA_LearnMore_Video_Reason55_Tablet',
    impressions: 447,
    clicks: 459,
    spend: 686,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Programmatic_Postroll No Skip_GAMUT SMART MEDIA_Customer_Behavioral_Flat Rate_LearnMore_Video_Price_Mobile',
    impressions: 662,
    clicks: 929,
    spend: 892,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Social_Video_Audio_USA NETWORK_Prospecting_Geo_Flat Rate_LearnMore_Animated Display_Reason58_Tablet',
    impressions: 461,
    clicks: 907,
    spend: 474,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Audio_Social_Logo_YAHOO_Prospecting_Alchemy_Flat Rate_LearnMore_HTML5_Reason58_Desktop',
    impressions: 812,
    clicks: 408,
    spend: 532,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Programmatic_Display_Mix_VEVO.COM_Retargeting_Search Retargeting_Added Value_LearnMore_HTML5_Reason30_CTV',
    impressions: 825,
    clicks: 443,
    spend: 346,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Audio_Audio_Preroll No Skip_BLACK ENTERPRISE_Prospecting_Demo_Added Value_LearnMore_Animated Display_Test_Tablet',
    impressions: 821,
    clicks: 838,
    spend: 899,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Video_Social_VOD_FACEBOOK_Prospecting_Impression Retargeting_Flat Rate_LearnMore_Static Display_Test_Tablet',
    impressions: 502,
    clicks: 330,
    spend: 712,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Display_Social_Audio_PLACE IQ_Prospecting_Cluster_Make Good_LearnMore_Animated Display_Reason108_CTV',
    impressions: 936,
    clicks: 252,
    spend: 381,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Programmatic_Social_Preroll No Skip_GAMUT SMART MEDIA_Retargeting_Resonate_CPC_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 321,
    clicks: 865,
    spend: 392,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Search_Video_Intream Skip_ROKU_Customer_Interests_CPA_LearnMore_Video_BooksReady_CTV',
    impressions: 999,
    clicks: 304,
    spend: 215,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Programmatic_Mix_SAMSUNG_Prospecting_Geo_CPM_LearnMore_Static Display_Reason30_CTV',
    impressions: 310,
    clicks: 262,
    spend: 951,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Programmatic_Social_Banner_QUIZLET_Customer_Contextual_CPM_LearnMore_HTML5_Price_Cross Device',
    impressions: 497,
    clicks: 248,
    spend: 248,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Video_Trueview :6 Bumpers_AMOBEE_Prospecting_Resonate_CPM_LearnMore_Static Display_Streamline_Desktop',
    impressions: 904,
    clicks: 237,
    spend: 864,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Display_OOH_VIANT_Prospecting_ASIN Remarketing_Make Good_LearnMore_Animated Display_Reason55_CTV',
    impressions: 693,
    clicks: 259,
    spend: 225,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Video_Midroll Skip_MIT SLOAN MANAGEMENT REVIEW_Customer_Multiple Attributes_Added Value_LearnMore_Video_Reason30_Tablet',
    impressions: 851,
    clicks: 423,
    spend: 240,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Search_Companion_POLITICO_Retargeting_Multiple Attributes_Make Good_LearnMore_Static Display_BooksReady_CTV',
    impressions: 807,
    clicks: 554,
    spend: 972,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Display_Search_Other Takeover_TRUCKER NEWS_Prospecting_App Retargeting_Flat Rate_LearnMore_Static Display_Test_Desktop',
    impressions: 876,
    clicks: 859,
    spend: 945,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Search_Audio_Other Takeover_IHEARTMEDIA_Prospecting_Alchemy_Make Good_LearnMore_Video_Price_Tablet',
    impressions: 943,
    clicks: 837,
    spend: 583,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Programmatic_Audio_Reach No Skip_KCNC-TV_Retargeting_Cluster_Flat Rate_LearnMore_Static Display_Streamline_CTV',
    impressions: 244,
    clicks: 739,
    spend: 451,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Audio_Video_In Banner Video_EPOCRATES_Prospecting_App Retargeting_Flat Rate_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 222,
    clicks: 677,
    spend: 544,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Display_Audio_Outstream_BROADBANDTV_Prospecting_Contextual_Added Value_LearnMore_Video_Reason55_CTV',
    impressions: 706,
    clicks: 450,
    spend: 950,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Audio_Video_Text_TURNER SPORTS DIGITAL_Prospecting_Site Retargeting_CPM_LearnMore_Animated Display_Reason58_Cross Device',
    impressions: 540,
    clicks: 912,
    spend: 680,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Programmatic_Audio_Roadblock_FLORIDA TIMES UNION_Prospecting_ASIN Remarketing_CPV_LearnMore_Static Display_Streamline_CTV',
    impressions: 495,
    clicks: 422,
    spend: 359,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Search_Search_Audio_ERIE TIMES NEWS_Customer_Impression Retargeting_CPV_LearnMore_Static Display_Reason55_Mobile',
    impressions: 416,
    clicks: 698,
    spend: 716,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Social_Trueview Instream No Skip_ADSWIZZ_Retargeting_Search Retargeting_CPM_LearnMore_Static Display_Streamline_Mobile',
    impressions: 532,
    clicks: 369,
    spend: 311,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Search_Other Takeover_PACVUE_Customer_Geo_CPC_LearnMore_Static Display_Reason58_Desktop',
    impressions: 915,
    clicks: 604,
    spend: 405,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Search_Display_Lead Gen_KATZ DIGITAL_Prospecting_Look A Like_Make Good_LearnMore_Video_BooksReady_Desktop',
    impressions: 791,
    clicks: 768,
    spend: 554,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Video_Display_Instream No Skip_OATH_Prospecting_Behavioral_CPM_LearnMore_Static Display_Price_CTV',
    impressions: 475,
    clicks: 246,
    spend: 950,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Social_Programmatic_Expandable_XANDR_Retargeting_Alchemy_Make Good_LearnMore_Video_Test_Cross Device',
    impressions: 949,
    clicks: 260,
    spend: 224,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Video_Programmatic_Video_MEDSCAPE_Retargeting_Contextual_CPC_LearnMore_HTML5_Reason58_Mobile',
    impressions: 730,
    clicks: 225,
    spend: 788,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Audio_Display_Email_INNOVID_Customer_Keyword_CPV_LearnMore_Animated Display_Reason30_Cross Device',
    impressions: 704,
    clicks: 401,
    spend: 808,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Video_Programmatic_Instream No Skip_904 HAPPY HOUR_Retargeting_Retargeting_CPM_LearnMore_HTML5_BooksReady_Desktop',
    impressions: 576,
    clicks: 602,
    spend: 248,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Programmatic_Video_Outstream_BLACK ENTERTAINMENT TV_Retargeting_CRM_CPV_LearnMore_Static Display_Streamline_Tablet',
    impressions: 655,
    clicks: 671,
    spend: 218,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Search_Video_SPOTX.TV_Prospecting_Geo_CPV_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 788,
    clicks: 537,
    spend: 476,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Display_Logo_FOX_Customer_Click Retargeting_Make Good_LearnMore_Video_Reason30_Cross Device',
    impressions: 265,
    clicks: 821,
    spend: 657,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Audio_Addressable Video_KCNC-TV_Customer_ASIN Remarketing_CPM_LearnMore_Animated Display_BooksReady_Tablet',
    impressions: 374,
    clicks: 256,
    spend: 605,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Display_Programmatic_OOH_PREMION_Prospecting_Cluster_dCPM_LearnMore_HTML5_Reason30_CTV',
    impressions: 219,
    clicks: 813,
    spend: 509,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Programmatic_Video_Outstream_APPLE SEARCH_Customer_Demo_CPC_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 914,
    clicks: 812,
    spend: 264,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Display_Video_Button_PLACEIQ_Retargeting_Job Title_dCPM_LearnMore_Animated Display_BooksReady_Tablet',
    impressions: 420,
    clicks: 787,
    spend: 732,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Programmatic_Programmatic_Trueview Instream No Skip_NIELSEN DIGITAL AD RATINGS_Prospecting_Alchemy_CPV_LearnMore_Video_Reason55_CTV',
    impressions: 655,
    clicks: 475,
    spend: 580,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Video_Display_Logo_TWITTER_Prospecting_Retargeting_Flat Rate_LearnMore_Static Display_Reason58_Cross Device',
    impressions: 610,
    clicks: 867,
    spend: 902,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Video_Trueview for Action_CONTEMPORARY PEDIATRICS_Prospecting_Multiple Attributes_Make Good_LearnMore_HTML5_Time_CTV',
    impressions: 534,
    clicks: 515,
    spend: 538,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Search_Video_In Banner Video_PWC_Prospecting_Geo_CPM_LearnMore_Video_Reason58_CTV',
    impressions: 772,
    clicks: 580,
    spend: 733,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Search_Video_Postroll No Skip_CONTEMPORARY PEDIATRICS_Prospecting_Multiple Attributes_CPV_LearnMore_Animated Display_Reason58_Tablet',
    impressions: 553,
    clicks: 737,
    spend: 405,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Search_Display_Addressable Video_BLACK ENTERPRISE_Retargeting_App Retargeting_Added Value_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 350,
    clicks: 248,
    spend: 543,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Programmatic_Social_Video_FOXFLX_Retargeting_ASIN Remarketing_CPM_LearnMore_HTML5_Test_Cross Device',
    impressions: 334,
    clicks: 295,
    spend: 303,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Programmatic_Text_SAMSUNG_Customer_Search Retargeting_Flat Rate_LearnMore_Static Display_Price_Mobile',
    impressions: 513,
    clicks: 639,
    spend: 802,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Programmatic_Display_DOOH_NBC UNIVERSAL_Retargeting_Geo_Flat Rate_LearnMore_Animated Display_Price_Tablet',
    impressions: 897,
    clicks: 638,
    spend: 509,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Audio_Social_Google Preferred_CRUISE CRITIC_Prospecting_Resonate_CPV_LearnMore_Animated Display_Reason55_Mobile',
    impressions: 852,
    clicks: 992,
    spend: 307,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Audio_Audio_Postroll No Skip_AUSTIN AMERICAN STATESMAN_Prospecting_Cluster_Added Value_LearnMore_Static Display_Streamline_CTV',
    impressions: 389,
    clicks: 389,
    spend: 334,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Search_Midroll Skip_DRAFTKINGS_Retargeting_Keyword_Flat Rate_LearnMore_Static Display_Reason55_Tablet',
    impressions: 651,
    clicks: 280,
    spend: 289,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Audio_Search_Trueview Discovery_THE CW_Customer_Interests_CPC_LearnMore_Video_Reason55_Cross Device',
    impressions: 598,
    clicks: 375,
    spend: 814,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Display_Search_Trueview :6 Bumpers_FACEBOOK_Prospecting_Resonate_Make Good_LearnMore_HTML5_Reason58_Desktop',
    impressions: 527,
    clicks: 691,
    spend: 413,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Display_Social_Intream Skip_NEW YORK TIMES_Prospecting_Demo_CPA_LearnMore_Animated Display_Streamline_Desktop',
    impressions: 954,
    clicks: 375,
    spend: 642,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Display_Outstream_CLUEP_Prospecting_Contextual_dCPM_LearnMore_Static Display_Time_Tablet',
    impressions: 269,
    clicks: 791,
    spend: 574,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Audio_Display_Homepage Takeover_WJR-AM_Retargeting_Cluster_Make Good_LearnMore_Static Display_Streamline_Tablet',
    impressions: 294,
    clicks: 771,
    spend: 334,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Audio_Reach No Skip_SPOTX.TV_Customer_Search Retargeting_CPV_LearnMore_HTML5_Reason58_Cross Device',
    impressions: 945,
    clicks: 584,
    spend: 333,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Display_Programmatic_Intream Skip_ROOSTER TEETH_Retargeting_TV Targeting_CPA_LearnMore_Animated Display_Test_Mobile',
    impressions: 479,
    clicks: 415,
    spend: 666,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Programmatic_Search_Preroll No Skip_BALLY SPORTS FLORIDA_Prospecting_Alchemy_CPC_LearnMore_Video_Price_CTV',
    impressions: 790,
    clicks: 985,
    spend: 696,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Social_Video_Outstream_IHEARTMEDIA_Retargeting_Multiple Attributes_CPC_LearnMore_Static Display_Time_CTV',
    impressions: 443,
    clicks: 312,
    spend: 731,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Programmatic_Search_Preroll No Skip_PINTEREST_Retargeting_Job Title_Added Value_LearnMore_Video_Reason30_Desktop',
    impressions: 489,
    clicks: 430,
    spend: 514,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Programmatic_Audio_Preroll Skip_NY INTERCONNECT_Prospecting_Interests_CPC_LearnMore_Video_Reason58_Mobile',
    impressions: 872,
    clicks: 645,
    spend: 629,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Video_Search_Lead Gen_BUILDING 20_Customer_Click Retargeting_CPA_LearnMore_Animated Display_Streamline_Tablet',
    impressions: 422,
    clicks: 670,
    spend: 628,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Display_Social Post_BALLY SPORTS SUN_Retargeting_Resonate_Make Good_LearnMore_Video_Reason30_Tablet',
    impressions: 246,
    clicks: 726,
    spend: 235,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Display_Companion_FANDOM_Prospecting_Job Title_dCPM_LearnMore_Animated Display_Streamline_CTV',
    impressions: 876,
    clicks: 947,
    spend: 877,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Programmatic_Display_Preroll No Skip_ACUITYADS INC_Customer_Search Retargeting_Added Value_LearnMore_HTML5_Streamline_Mobile',
    impressions: 774,
    clicks: 318,
    spend: 711,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Search_Audio_OOH_FACEBOOK_Customer_Search Retargeting_Added Value_LearnMore_Animated Display_Reason30_Desktop',
    impressions: 724,
    clicks: 668,
    spend: 264,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Video_Display_Interstitial_DISH NETWORK_Customer_Impression Retargeting_Flat Rate_LearnMore_Static Display_Price_Tablet',
    impressions: 862,
    clicks: 625,
    spend: 855,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Programmatic_Roadblock_HOME TEAM SPORTS_Prospecting_Behavioral_CPM_LearnMore_Video_Reason55_Desktop',
    impressions: 896,
    clicks: 552,
    spend: 816,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Social_Display_Text_MIT SLOAN MANAGEMENT REVIEW_Customer_Interests_CPV_LearnMore_Video_BooksReady_Tablet',
    impressions: 975,
    clicks: 551,
    spend: 902,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Audio_Display_Lead Gen_FOX_Retargeting_Look A Like_CPM_LearnMore_Video_Streamline_Tablet',
    impressions: 687,
    clicks: 804,
    spend: 515,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Programmatic_Programmatic_Google Preferred_XANDR_Customer_Geo_CPC_LearnMore_Video_Reason108_Desktop',
    impressions: 582,
    clicks: 301,
    spend: 423,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Search_Audio_FEP_USA TODAY_Prospecting_Keyword_CPA_LearnMore_HTML5_Time_CTV',
    impressions: 684,
    clicks: 667,
    spend: 675,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Search_Display_Trueview Discovery_TURNER SPORTS DIGITAL_Retargeting_Search Retargeting_Added Value_LearnMore_HTML5_BooksReady_Mobile',
    impressions: 501,
    clicks: 410,
    spend: 858,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Video_Outstream_VIZIO ADS_Customer_Multiple Attributes_CPC_LearnMore_Static Display_Reason55_CTV',
    impressions: 698,
    clicks: 881,
    spend: 720,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Programmatic_Search_Interstitial_KATZ MEDIA_Prospecting_CRM_Added Value_LearnMore_HTML5_BooksReady_Cross Device',
    impressions: 959,
    clicks: 297,
    spend: 318,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Audio_Button_LINKEDIN_Customer_Job Title_CPV_LearnMore_HTML5_Reason30_Cross Device',
    impressions: 713,
    clicks: 355,
    spend: 899,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Video_Audio_Interstitial_YAHOO_Prospecting_Contextual_CPV_LearnMore_Animated Display_Reason55_Tablet',
    impressions: 662,
    clicks: 554,
    spend: 406,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Video_Display_Native_INTEGRAL AD SCIENCE_Customer_Geo_CPM_LearnMore_Animated Display_BooksReady_Cross Device',
    impressions: 246,
    clicks: 837,
    spend: 738,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Display_Masthead_CRACKLE PLUS_Prospecting_TV Targeting_CPA_LearnMore_HTML5_Reason108_Cross Device',
    impressions: 729,
    clicks: 577,
    spend: 998,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Programmatic_Banner_FUSION92_Retargeting_Behavioral_Added Value_LearnMore_HTML5_Reason108_Cross Device',
    impressions: 581,
    clicks: 371,
    spend: 378,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Display_Roadblock_WARNER MEDIA_Retargeting_Behavioral_dCPM_LearnMore_Video_Streamline_Cross Device',
    impressions: 631,
    clicks: 692,
    spend: 441,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Programmatic_Programmatic_Trueview for Action_FUSION92_Retargeting_Cluster_CPA_LearnMore_Animated Display_Reason30_Mobile',
    impressions: 519,
    clicks: 585,
    spend: 569,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Display_Display_Mix_BLEACHER REPORT_Retargeting_Contextual_Added Value_LearnMore_Video_Reason55_Mobile',
    impressions: 829,
    clicks: 916,
    spend: 222,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Search_Video_Trueview Instream Skip_PWC_Customer_TV Targeting_CPC_LearnMore_Animated Display_Streamline_Cross Device',
    impressions: 396,
    clicks: 979,
    spend: 540,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Display_Homepage Takeover_WUXP-TV_Prospecting_ASIN Remarketing_Added Value_LearnMore_HTML5_Price_CTV',
    impressions: 273,
    clicks: 376,
    spend: 925,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Social_Programmatic_Google Preferred_INNOVID_Prospecting_Contextual_Flat Rate_LearnMore_Static Display_Time_Cross Device',
    impressions: 573,
    clicks: 916,
    spend: 718,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Video_Social_DOOH_KATZ MEDIA_Retargeting_Multiple Attributes_Make Good_LearnMore_Static Display_Reason108_Desktop',
    impressions: 242,
    clicks: 392,
    spend: 994,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Programmatic_Programmatic_Button_VIANT_Retargeting_CRM_CPC_LearnMore_Animated Display_BooksReady_Desktop',
    impressions: 645,
    clicks: 815,
    spend: 678,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Programmatic_Display_Lead Gen_KENS-TV_Retargeting_Search Retargeting_CPM_LearnMore_Video_Price_Tablet',
    impressions: 406,
    clicks: 704,
    spend: 369,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Programmatic_Overlay_AMC NETWORKS_Retargeting_ASIN Remarketing_CPM_LearnMore_HTML5_Reason58_CTV',
    impressions: 532,
    clicks: 715,
    spend: 654,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Video_Display_Mix_NBC UNIVERSAL_Retargeting_App Retargeting_Added Value_LearnMore_HTML5_Reason55_Tablet',
    impressions: 266,
    clicks: 495,
    spend: 942,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Audio_Social_Postroll Skip_ESPN_Prospecting_Click Retargeting_CPC_LearnMore_HTML5_Reason108_Mobile',
    impressions: 806,
    clicks: 678,
    spend: 351,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Programmatic_Display_Instream No Skip_ADTHEORENT_Customer_Interests_CPM_LearnMore_Static Display_Reason108_CTV',
    impressions: 247,
    clicks: 813,
    spend: 302,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Programmatic_Roadblock_SPOTX.TV_Retargeting_Geo_Make Good_LearnMore_Animated Display_Reason30_CTV',
    impressions: 877,
    clicks: 796,
    spend: 276,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Video_In Banner Video_DISCOVERY CHANNEL_Retargeting_TV Targeting_Flat Rate_LearnMore_Animated Display_Streamline_Tablet',
    impressions: 745,
    clicks: 843,
    spend: 632,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Search_Programmatic_GIF_CHEDDAR TV_Customer_App Retargeting_CPC_LearnMore_Animated Display_Reason108_Cross Device',
    impressions: 831,
    clicks: 774,
    spend: 789,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Search_Display_Companion_ADELPHIC_Prospecting_Look A Like_CPM_LearnMore_Video_Reason108_Desktop',
    impressions: 212,
    clicks: 875,
    spend: 464,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Lower Funnel_Audio_Video_FEP_HULU_Retargeting_Job Title_Added Value_LearnMore_Static Display_Streamline_Cross Device',
    impressions: 542,
    clicks: 810,
    spend: 204,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Programmatic_Overlay_TWITTER_Prospecting_Look A Like_CPM_LearnMore_HTML5_Streamline_CTV',
    impressions: 662,
    clicks: 533,
    spend: 727,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Social_Social_Reach Skip_DRAFTKINGS_Customer_Interests_CPC_LearnMore_Animated Display_Reason55_Cross Device',
    impressions: 730,
    clicks: 891,
    spend: 850,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Search_Audio_Postroll Skip_JUN GROUP_Prospecting_TV Targeting_Flat Rate_LearnMore_Static Display_Streamline_CTV',
    impressions: 893,
    clicks: 854,
    spend: 391,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Video_Search_Postroll Skip_HOME TEAM SPORTS_Customer_Alchemy_Make Good_LearnMore_Video_Price_CTV',
    impressions: 552,
    clicks: 685,
    spend: 942,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Video_Audio_Button_BLACK ENTERTAINMENT TV_Prospecting_Retargeting_CPM_LearnMore_Video_Price_Cross Device',
    impressions: 546,
    clicks: 312,
    spend: 843,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Video_Search_Native_HUDL_Prospecting_CRM_Make Good_LearnMore_HTML5_Price_Mobile',
    impressions: 382,
    clicks: 604,
    spend: 523,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Audio_Programmatic_CTV Video_WGAL-TV_Prospecting_ASIN Remarketing_Make Good_LearnMore_HTML5_Reason58_CTV',
    impressions: 326,
    clicks: 372,
    spend: 566,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Video_Video_Text_FOXFLX_Customer_Job Title_CPV_LearnMore_Animated Display_Time_CTV',
    impressions: 603,
    clicks: 993,
    spend: 480,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Social_In Banner Video_WGRZ-TV_Retargeting_Resonate_Make Good_LearnMore_HTML5_Streamline_Desktop',
    impressions: 231,
    clicks: 201,
    spend: 430,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Audio_Midroll Skip_ADULT SWIM_Prospecting_Contextual_CPV_LearnMore_Animated Display_Reason30_Desktop',
    impressions: 883,
    clicks: 777,
    spend: 923,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Audio_Display_Trueview :6 Bumpers_JACKSONVILLE MAGAZINE_Customer_Cluster_CPM_LearnMore_Animated Display_Time_Cross Device',
    impressions: 283,
    clicks: 423,
    spend: 242,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Social_Search_Video_FLORIDA TIMES UNION_Prospecting_Multiple Attributes_Flat Rate_LearnMore_Animated Display_Test_Mobile',
    impressions: 469,
    clicks: 870,
    spend: 468,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Video_Audio_Gmail_WJR-AM_Retargeting_Look A Like_dCPM_LearnMore_HTML5_Test_Cross Device',
    impressions: 727,
    clicks: 405,
    spend: 641,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Search_Display_OOH_JACKSONVILLE FREE PRESS_Customer_Keyword_Flat Rate_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 283,
    clicks: 389,
    spend: 734,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Audio_Audio_Gmail_AUSTIN AMERICAN STATESMAN_Retargeting_Contextual_Flat Rate_LearnMore_HTML5_Test_CTV',
    impressions: 652,
    clicks: 982,
    spend: 381,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Video_Social_Gmail_CLUEP_Prospecting_Retargeting_CPM_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 735,
    clicks: 201,
    spend: 434,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Display_Video_OOH_NYSSCPA_Customer_Alchemy_CPA_LearnMore_Static Display_Reason55_Cross Device',
    impressions: 471,
    clicks: 569,
    spend: 504,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Programmatic_Programmatic_Trueview Instream Skip_BRIGHTROLL_Prospecting_Retargeting_CPA_LearnMore_HTML5_Reason30_Desktop',
    impressions: 361,
    clicks: 237,
    spend: 957,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Search_Companion_TRUEX_Customer_Behavioral_Flat Rate_LearnMore_HTML5_Reason108_Desktop',
    impressions: 247,
    clicks: 486,
    spend: 731,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Audio_Display_Banner_HULU_Retargeting_Contextual_CPM_LearnMore_Video_Reason30_Tablet',
    impressions: 209,
    clicks: 228,
    spend: 847,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Video_Search_Overlay_POLITICO_Customer_CRM_Added Value_LearnMore_HTML5_Reason58_CTV',
    impressions: 224,
    clicks: 783,
    spend: 932,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Programmatic_Video_CTV Video_UPROXX_Customer_Behavioral_CPC_LearnMore_Static Display_Reason55_Tablet',
    impressions: 609,
    clicks: 577,
    spend: 913,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Programmatic_Audio_Preroll Skip_BUILDING 20_Customer_App Retargeting_Flat Rate_LearnMore_HTML5_Test_Mobile',
    impressions: 949,
    clicks: 874,
    spend: 502,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Video_Sponsorship_AUSTIN AMERICAN STATESMAN_Customer_Impression Retargeting_CPM_LearnMore_Animated Display_Streamline_Desktop',
    impressions: 983,
    clicks: 453,
    spend: 201,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Programmatic_Audio_Overlay_OGURY_Prospecting_Alchemy_dCPM_LearnMore_Video_Reason108_Desktop',
    impressions: 483,
    clicks: 937,
    spend: 942,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Programmatic_Programmatic_Overlay_NATIONAL PUBLIC RADIO_Retargeting_CRM_CPC_LearnMore_HTML5_Streamline_Desktop',
    impressions: 804,
    clicks: 377,
    spend: 452,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Audio_Programmatic_Outstream_SNAPCHAT_Prospecting_Cluster_CPV_LearnMore_Static Display_Reason108_Desktop',
    impressions: 425,
    clicks: 970,
    spend: 857,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Social_Video_Trueview :6 Bumpers_ATTN_Customer_Site Retargeting_CPA_LearnMore_Static Display_Time_Tablet',
    impressions: 749,
    clicks: 982,
    spend: 701,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Search_Banner_EPOCRATES_Customer_ASIN Remarketing_Make Good_LearnMore_Video_Reason58_CTV',
    impressions: 581,
    clicks: 599,
    spend: 335,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Display_Video_Button_ADULT SWIM_Customer_Alchemy_CPM_LearnMore_Static Display_Reason58_CTV',
    impressions: 785,
    clicks: 750,
    spend: 219,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Display_Display_Reach Skip_AMC NETWORKS_Retargeting_Multiple Attributes_CPC_LearnMore_Video_Reason30_Mobile',
    impressions: 320,
    clicks: 738,
    spend: 782,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Video_Programmatic_Interstitial_CLUEP_Retargeting_Alchemy_CPM_LearnMore_Video_Reason58_Desktop',
    impressions: 233,
    clicks: 286,
    spend: 757,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Search_Social_Other Takeover_SUPERAWESOME_Retargeting_Keyword_CPM_LearnMore_Static Display_Reason55_Cross Device',
    impressions: 903,
    clicks: 249,
    spend: 717,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Video_Social_Trueview Instream Skip_KNIX-FM_Prospecting_Job Title_Make Good_LearnMore_Static Display_Reason30_Tablet',
    impressions: 920,
    clicks: 684,
    spend: 436,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Display_Social_Preroll Skip_NBC SPORTS NETWORK_Retargeting_Geo_dCPM_LearnMore_Static Display_Reason108_CTV',
    impressions: 740,
    clicks: 357,
    spend: 828,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Display_Programmatic_VOD_PANDORA_Prospecting_Multiple Attributes_Added Value_LearnMore_Static Display_Time_Cross Device',
    impressions: 793,
    clicks: 393,
    spend: 207,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Video_Video_OOH_SPOTX.TV_Customer_Multiple Attributes_CPA_LearnMore_HTML5_Reason108_Cross Device',
    impressions: 564,
    clicks: 502,
    spend: 641,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Programmatic_Programmatic_Roadblock_BALLY SPORTS SUN_Customer_ASIN Remarketing_dCPM_LearnMore_Animated Display_Test_CTV',
    impressions: 321,
    clicks: 957,
    spend: 465,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Video_Audio_FEP_BALLY SPORTS FLORIDA_Prospecting_Behavioral_dCPM_LearnMore_HTML5_Reason55_Cross Device',
    impressions: 938,
    clicks: 605,
    spend: 734,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Search_Video_Other Takeover_SPOTX.TV_Retargeting_Impression Retargeting_Flat Rate_LearnMore_Static Display_Price_Tablet',
    impressions: 766,
    clicks: 902,
    spend: 254,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Search_Social_Interstitial_FOX_Retargeting_Keyword_CPV_LearnMore_Animated Display_Streamline_Mobile',
    impressions: 975,
    clicks: 948,
    spend: 525,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Display_Display_Postroll Skip_SNAPCHAT_Prospecting_Resonate_CPM_LearnMore_Animated Display_Streamline_Desktop',
    impressions: 505,
    clicks: 474,
    spend: 329,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Audio_Display_Lead Gen_KENS-TV_Retargeting_Demo_CPA_LearnMore_Video_BooksReady_Tablet',
    impressions: 243,
    clicks: 415,
    spend: 809,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Display_Video_Email_PREMION_Customer_Retargeting_CPA_LearnMore_Video_Reason58_CTV',
    impressions: 222,
    clicks: 523,
    spend: 901,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Display_Social_Midroll No Skip_A&E NETWORK_Customer_Site Retargeting_Flat Rate_LearnMore_HTML5_Reason30_Cross Device',
    impressions: 555,
    clicks: 333,
    spend: 992,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Social_Video_Companion_ESPN_Customer_Behavioral_Make Good_LearnMore_Video_Reason30_Desktop',
    impressions: 279,
    clicks: 738,
    spend: 987,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Upper Funnel_Search_Display_VOD_BUILDERS DIGITAL_Prospecting_Search Retargeting_CPM_LearnMore_Static Display_Streamline_Tablet',
    impressions: 432,
    clicks: 414,
    spend: 241,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Video_Display_Trueview for Action_TWITTER_Retargeting_Retargeting_Flat Rate_LearnMore_Video_Reason58_Tablet',
    impressions: 726,
    clicks: 760,
    spend: 766,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Display_Search_Banner_TRAVELZOO_Prospecting_Look A Like_CPV_LearnMore_Static Display_Price_CTV',
    impressions: 581,
    clicks: 589,
    spend: 208,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Display_Mix_WUXP-TV_Retargeting_Impression Retargeting_CPM_LearnMore_Animated Display_Price_Tablet',
    impressions: 824,
    clicks: 640,
    spend: 919,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Social_Search_CTV Video_EMPIRE REPORT_Customer_Alchemy_CPC_LearnMore_HTML5_BooksReady_Cross Device',
    impressions: 601,
    clicks: 687,
    spend: 621,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Audio_Programmatic_Audio_100 THIEVES_Customer_Cluster_CPC_LearnMore_HTML5_Time_Desktop',
    impressions: 662,
    clicks: 943,
    spend: 648,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Programmatic_Mix_TRUEX_Prospecting_Interests_CPM_LearnMore_Static Display_Price_Mobile',
    impressions: 950,
    clicks: 466,
    spend: 257,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Programmatic_Social_Email_THE TRADE DESK_Retargeting_Retargeting_CPC_LearnMore_HTML5_Price_CTV',
    impressions: 579,
    clicks: 743,
    spend: 731,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Upper Funnel_Video_Programmatic_Google Preferred_MIT SLOAN MANAGEMENT REVIEW_Prospecting_Retargeting_CPA_LearnMore_Static Display_Reason55_Cross Device',
    impressions: 929,
    clicks: 353,
    spend: 829,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Mid Funnel_Video_Display_Midroll Skip_DISCOVERY CHANNEL_Prospecting_Keyword_dCPM_LearnMore_Video_BooksReady_Cross Device',
    impressions: 789,
    clicks: 656,
    spend: 530,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'Upper Funnel_Display_Programmatic_VOD_PLACE IQ_Prospecting_Job Title_dCPM_LearnMore_Animated Display_Reason108_CTV',
    impressions: 780,
    clicks: 709,
    spend: 761,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Video_Search_Postroll No Skip_ACUITYADS INC_Prospecting_Demo_dCPM_LearnMore_Animated Display_BooksReady_Mobile',
    impressions: 931,
    clicks: 999,
    spend: 804,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Search_Social_DOOH_BLACK ENTERTAINMENT TV_Prospecting_Look A Like_CPA_LearnMore_Video_Reason108_Cross Device',
    impressions: 464,
    clicks: 678,
    spend: 508,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Programmatic_Video_CTV Video_RESONATE_Customer_Multiple Attributes_CPC_LearnMore_Video_Reason30_Desktop',
    impressions: 396,
    clicks: 1000,
    spend: 221,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Programmatic_Video_Native_BUILDING 20_Prospecting_TV Targeting_dCPM_LearnMore_HTML5_Reason30_Tablet',
    impressions: 486,
    clicks: 513,
    spend: 606,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Social_Video_Instream No Skip_VOX MEDIA_Prospecting_Job Title_dCPM_LearnMore_Static Display_Test_CTV',
    impressions: 789,
    clicks: 282,
    spend: 946,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Mid Funnel_Video_Social_Trueview Instream No Skip_HOME TEAM SPORTS_Customer_Geo_Make Good_LearnMore_Static Display_Test_Desktop',
    impressions: 384,
    clicks: 707,
    spend: 825,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Video_Display_FEP VOD_VOX MEDIA_Customer_Cluster_CPA_LearnMore_Static Display_Price_Mobile',
    impressions: 596,
    clicks: 813,
    spend: 284,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Lower Funnel_Display_Video_Midroll Skip_OGURY_Retargeting_CRM_dCPM_LearnMore_Static Display_Reason30_Tablet',
    impressions: 393,
    clicks: 785,
    spend: 481,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Lower Funnel_Social_Search_Text_MIT SLOAN MANAGEMENT REVIEW_Prospecting_Impression Retargeting_Added Value_LearnMore_Static Display_Reason55_Desktop',
    impressions: 489,
    clicks: 358,
    spend: 538,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Lower Funnel_Audio_Audio_Sponsorship_CNN_Prospecting_Keyword_Added Value_LearnMore_Animated Display_Reason55_Tablet',
    impressions: 392,
    clicks: 506,
    spend: 962,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Video_Video_Trueview for Action_SOJERN_Retargeting_ASIN Remarketing_CPM_LearnMore_Static Display_Reason30_Cross Device',
    impressions: 773,
    clicks: 969,
    spend: 768,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Video_Audio_Trueview Discovery_VOX MEDIA_Retargeting_Behavioral_Added Value_LearnMore_Animated Display_Test_Mobile',
    impressions: 992,
    clicks: 330,
    spend: 480,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'Mid Funnel_Social_Search_Overlay_AAP NEWS_Customer_ASIN Remarketing_CPV_LearnMore_HTML5_Price_Tablet',
    impressions: 683,
    clicks: 670,
    spend: 264,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Video_Video_Button_FACEBOOK_Retargeting_Keyword_Added Value_LearnMore_Animated Display_Streamline_Mobile',
    impressions: 313,
    clicks: 979,
    spend: 492,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'Upper Funnel_Display_Video_Gmail_INSTREAMATIC_Retargeting_Contextual_Flat Rate_LearnMore_Static Display_Reason58_Desktop',
    impressions: 250,
    clicks: 343,
    spend: 813,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Programmatic_Programmatic_Sponsorship_VEVO.COM_Prospecting_TV Targeting_dCPM_LearnMore_Video_BooksReady_Tablet',
    impressions: 720,
    clicks: 440,
    spend: 207,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Mid Funnel_Audio_Programmatic_Lead Gen_A&E NETWORK_Retargeting_Interests_CPA_LearnMore_Static Display_Streamline_Tablet',
    impressions: 321,
    clicks: 749,
    spend: 200,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'Mid Funnel_Audio_Audio_Instream No Skip_CBS SPORTS_Retargeting_Demo_CPC_LearnMore_Video_Reason58_CTV',
    impressions: 594,
    clicks: 957,
    spend: 836,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Upper Funnel_Programmatic_Video_Native_FOXGO_Prospecting_Keyword_dCPM_LearnMore_Video_Test_Tablet',
    impressions: 486,
    clicks: 963,
    spend: 655,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'Lower Funnel_Programmatic_Video_Postroll No Skip_SMART BRIEF_Prospecting_Interests_Flat Rate_LearnMore_HTML5_Reason58_Mobile',
    impressions: 652,
    clicks: 782,
    spend: 208,
  },
];

export default campaigns;
