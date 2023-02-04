const campaigns = [
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-OLV_Stack Overflow_APAC_SG_Retargeting Bundle_SignEasy_Job-Title_Team Softness',
    impressions: 3161,
    clicks: 1286,
    spend: 606,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_Stack Overflow_G5_NZ_Non-Brand_Basic RFM Green_Keyword_Digital Experience Platform_and Sons',
    impressions: 3529,
    clicks: 1167,
    spend: 785,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Paid-OLV_Direct Buy_EMEA_UK_Retargeting_Pro Cart Abandoner_Job-Title_MOCA Cybersecurity',
    impressions: 1717,
    clicks: 1217,
    spend: 872,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Video_Bidtellect_APJ_SG_Nurturing_Biz Cart Abandoner_Combination_Backup_LLC',
    impressions: 2990,
    clicks: 1273,
    spend: 872,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-Social_Google_GLOBAL_NE_Brand_Organic Video Engagers_Lookalike-Pixel_Team Softness',
    impressions: 3998,
    clicks: 1018,
    spend: 867,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-OLV_LinkedIn_EMEA_AU_Prospecting_HelloFax_Interest_MOCA Cybersecurity',
    impressions: 4136,
    clicks: 1090,
    spend: 741,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-Social_Facebook - ALNALD_APAC_IT_Non-Brand_Pro Cart Abandoner_Customer-List_ALNALD_Ltd',
    impressions: 4749,
    clicks: 1308,
    spend: 724,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_Bidtellect_G5_US_Upsell_Project Managers_Lookalike_Digital Experience Platform',
    impressions: 2147,
    clicks: 1289,
    spend: 597,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-SEM_Google_GLOBAL_UK_Cross-sell_Education_Contextual_Team Softness_Ltd',
    impressions: 579,
    clicks: 1430,
    spend: 650,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-OLV_Paved_NAMER_INT_Brand_Basic RFM Red_Job-Title_MOCA Cybersecurity_PLC',
    impressions: 3554,
    clicks: 1294,
    spend: 927,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-OLV_Bidtellect_APJ_INT_Retargeting Bundle_Real Estate_Lookalike-CRM_MOCA Cybersecurity',
    impressions: 1549,
    clicks: 1146,
    spend: 519,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_LinkedIn_APJ_UK_Retargeting Bundle_Converter_Job-Title_Capture_LLC',
    impressions: 3656,
    clicks: 1492,
    spend: 750,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Prog-Video_TTD - ALNALD_LATAM_USCA_Retargeting Bundle_Sales_Contextual_Backup',
    impressions: 1100,
    clicks: 1258,
    spend: 997,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-OLV_Stack Overflow_NAMER_IT_Cross-sell_Contract_Interest_Capture_and Sons',
    impressions: 3503,
    clicks: 1276,
    spend: 870,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_Twitter_EMEA_ES_Cross-sell_DropboxFax_Website-List_Digital Experience Platform_PLC',
    impressions: 1022,
    clicks: 1347,
    spend: 786,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-OLV_Twitter_NAMER_INT_Retargeting_Clicker-Prog_Custom-Intent_Capture_Group',
    impressions: 3253,
    clicks: 1014,
    spend: 581,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_TTD - Capture_EMEA_INT_Upsell_Pro With High Storage Usage_Job-Title_Capture_PLC',
    impressions: 2786,
    clicks: 1115,
    spend: 621,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-Social_Paved_G5_US_Upsell_Document_Job-Title_Team Softness_and Sons',
    impressions: 3278,
    clicks: 1057,
    spend: 734,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_Direct Buy_GLOBAL_SG_Competitor_Business + Tech_Lookalike-CRM_Backup_LLC',
    impressions: 4790,
    clicks: 1437,
    spend: 538,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-Social_LinkedIn_GLOBAL_JP_Non-Brand_Contextual + Topic + Industry_Job-Title_Backup_Ltd',
    impressions: 3826,
    clicks: 1058,
    spend: 805,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-Social_Paved_APJ_CA_Cross-sell_Basic RFM Green_Second-Party-Data_ALNALD_Inc',
    impressions: 1269,
    clicks: 1361,
    spend: 859,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_TTD_GLOBAL_INT_Non-Brand_Converter_First-Party-Data_Capture_PLC',
    impressions: 4707,
    clicks: 1226,
    spend: 532,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Prog-Video_DV360_G5_IT_Cross-sell_Creative Teams_Second-Party-Data_Capture',
    impressions: 621,
    clicks: 1057,
    spend: 864,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-Social_Stack Overflow_GLOBAL_ES_Upsell_Users With High Propensity To Buy Family_Job-Title_Team Softness_PLC',
    impressions: 4145,
    clicks: 1408,
    spend: 817,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Paved_APJ_NZ_Brand_DocSend_In-Market_Capture_Inc',
    impressions: 4377,
    clicks: 1175,
    spend: 503,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-SEM_Facebook_EMEA_IR_Cross-sell_HelloSign_Interest_ALNALD_Inc',
    impressions: 1184,
    clicks: 1256,
    spend: 807,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-SEM_Bing_EMEA_IR_Non-Brand_Clicker-Prog_Lookalike-CRM_Capture_Ltd',
    impressions: 1374,
    clicks: 1366,
    spend: 887,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_Facebook - Capture_APAC_USCA_Upsell_Users With High Propensity To Buy Family_Contextual_MOCA Cybersecurity',
    impressions: 3359,
    clicks: 1469,
    spend: 520,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-OLV_Youtube_G5_FR_Cross-sell_Dynamic Search_Job-Title_MOCA Cybersecurity_and Sons',
    impressions: 2617,
    clicks: 1382,
    spend: 616,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Display_Twitter_APJ_UK_Prospecting_DropboxFax_Job-Title_Capture_Ltd',
    impressions: 1904,
    clicks: 1061,
    spend: 955,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_TTD_APAC_US_Competitor_Biz Landing Page Visitor_Third-Party-Data_Always-On_PLC',
    impressions: 2387,
    clicks: 1406,
    spend: 743,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Display_Bing_GLOBAL_AU_Retargeting_Document_Lookalike-Pixel_Digital Experience Platform',
    impressions: 988,
    clicks: 1145,
    spend: 730,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Facebook - ALNALD_APJ_SG_Retargeting_Organic Video Engagers_Website-List_MOCA Cybersecurity_LLC',
    impressions: 1020,
    clicks: 1068,
    spend: 892,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-OLV_LinkedIn_EMEA_DE_Competitor_Plus Cart Abandoner_Affinity_ALNALD_Inc',
    impressions: 2512,
    clicks: 1050,
    spend: 890,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-OLV_Paved_EMEA_USCA_Upsell_DropboxForms_Lookalike-Pixel_ALNALD',
    impressions: 4543,
    clicks: 1441,
    spend: 508,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_Bing_APAC_NZ_Competitor_Users With High Propensity To Buy Pro_Interest_Always-On',
    impressions: 1124,
    clicks: 1317,
    spend: 584,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_Paved_APAC_DE_Cross-sell_Dynamic Search_Keyword_Capture_Inc',
    impressions: 3799,
    clicks: 1181,
    spend: 509,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_Facebook - Capture_LATAM_DE_Cross-sell_DropboxSignAPI_Keyword_Team Softness_LLC',
    impressions: 4636,
    clicks: 1500,
    spend: 568,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_LinkedIn_NAMER_NE_Cross-sell_OtherCompetitor_Second-Party-Data_Digital Experience Platform_PLC',
    impressions: 4934,
    clicks: 1193,
    spend: 639,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-OLV_Quora_APJ_FR_Upsell_Family Sharers_Second-Party-Data_Capture',
    impressions: 829,
    clicks: 1293,
    spend: 649,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_DV360_APJ_AU_Competitor_DocSend_Contextual_Capture',
    impressions: 3896,
    clicks: 1164,
    spend: 666,
  },
  {
    platform: 'Facebook Placement',
    campaign: 'DS_Prog-Display_Bing_NAMER_AU_Brand_HR_First-Party-Data_Capture',
    impressions: 872,
    clicks: 1077,
    spend: 667,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-Social_Bidtellect_GLOBAL_INT_Retargeting Bundle_Clicker-Social_Lookalike-CRM_Backup',
    impressions: 4962,
    clicks: 1461,
    spend: 707,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_Facebook - Capture_NAMER_NZ_Prospecting_DocSend Core_Lookalike-CRM_Digital Experience Platform_LLC',
    impressions: 1905,
    clicks: 1177,
    spend: 523,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_TTD - Capture_LATAM_AU_Brand_IT & Technology Employees_Job-Title_Digital Experience Platform_LLC',
    impressions: 4143,
    clicks: 1068,
    spend: 860,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_Youtube_GLOBAL_JP_Competitor_PDF_Second-Party-Data_Always-On',
    impressions: 3292,
    clicks: 1274,
    spend: 918,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_Youtube_G5_IT_Nurturing_HelloFax_Second-Party-Data_MOCA Cybersecurity',
    impressions: 3341,
    clicks: 1454,
    spend: 813,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-OLV_Facebook_LATAM_AUNZ_Retargeting Bundle_PDF_Lookalike_Team Softness_and Sons',
    impressions: 4769,
    clicks: 1053,
    spend: 550,
  },
  {
    platform: 'Google Ads Placement',
    campaign: 'DS_Paid-SEM_TTD_EMEA_IR_Non-Brand_Adobe_Keyword_ALNALD_PLC',
    impressions: 486,
    clicks: 1038,
    spend: 746,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_Paved_LATAM_IR_Brand_Business + Tech_Custom-Intent_ALNALD_Group',
    impressions: 4515,
    clicks: 1182,
    spend: 842,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Display_Stack Overflow_APAC_ES_Prospecting_Small & Mid-size Enterprise Employees_Custom-Intent_Backup_Ltd',
    impressions: 3388,
    clicks: 1087,
    spend: 500,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Prog-Display_Twitter_GLOBAL_AUNZ_Competitor_HelloFax_Lookalike_Always-On',
    impressions: 4998,
    clicks: 1412,
    spend: 808,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-SEM_Youtube_G5_IT_Upsell_IT_In-Market_MOCA Cybersecurity_and Sons',
    impressions: 4970,
    clicks: 1466,
    spend: 993,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Video_Bing_NAMER_SG_Competitor_Creative & Marketing Teams_Second-Party-Data_MOCA Cybersecurity_LLC',
    impressions: 1224,
    clicks: 1120,
    spend: 653,
  },
  {
    platform: 'Google Ads Ad',
    campaign: 'DBS_Prog-Video_DV360_NAMER_UKIR_Upsell_IT_In-Market_Backup_PLC',
    impressions: 4756,
    clicks: 1412,
    spend: 762,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-Social_Paved_G5_IR_Prospecting_CompleteViewer-YT_In-Market_Team Softness_Ltd',
    impressions: 3435,
    clicks: 1451,
    spend: 723,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Prog-Video_DV360_GLOBAL_UK_Nurturing_Clicker-YT_Contextual_MOCA Cybersecurity_Group',
    impressions: 1446,
    clicks: 1031,
    spend: 695,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-Social_Paved_APAC_ES_Cross-sell_Contextual + Topic + Industry_Job-Title_Always-On_PLC',
    impressions: 985,
    clicks: 1064,
    spend: 569,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_LinkedIn_GLOBAL_JP_Prospecting_Organic Video Engagers_Keyword_ALNALD',
    impressions: 2966,
    clicks: 1221,
    spend: 796,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-SEM_Google_NAMER_SG_Retargeting Bundle_Pro With High Storage Usage_Keyword_Capture',
    impressions: 3311,
    clicks: 1067,
    spend: 779,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-Social_Direct Buy_G5_JP_Cross-sell_Real Estate_Website-List_MOCA Cybersecurity_Inc',
    impressions: 782,
    clicks: 1018,
    spend: 729,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_TTD_G5_IT_Retargeting Bundle_CompleteViewer-YT_Affinity_Backup_and Sons',
    impressions: 4589,
    clicks: 1251,
    spend: 758,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-OLV_Direct Buy_APJ_UK_Brand_Clicker-Search_Contextual_Team Softness',
    impressions: 4555,
    clicks: 1417,
    spend: 548,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Facebook - ALNALD_LATAM_NE_Competitor_Small & Mid-size Enterprise Employees_Lookalike-CRM_Digital Experience Platform_Inc',
    impressions: 810,
    clicks: 1478,
    spend: 540,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_TTD - ALNALD_GLOBAL_SG_Retargeting Bundle_Organic Video Engagers_Customer-List_ALNALD_and Sons',
    impressions: 3323,
    clicks: 1139,
    spend: 705,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Facebook - ALNALD_NAMER_US_Retargeting_Project Managers_Lookalike_MOCA Cybersecurity_and Sons',
    impressions: 719,
    clicks: 1041,
    spend: 943,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_Google_APAC_FR_Retargeting_General_Job-Title_Backup_Group',
    impressions: 3492,
    clicks: 1045,
    spend: 958,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Prog-Display_Stack Overflow_APJ_AUNZ_Cross-sell_IT_Lookalike_Always-On',
    impressions: 1075,
    clicks: 1240,
    spend: 509,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Prog-Display_Twitter_APJ_FR_Non-Brand_Converter_Website-List_ALNALD',
    impressions: 1185,
    clicks: 1328,
    spend: 848,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Paid-Social_TTD - ALNALD_APJ_JP_Upsell_HelloWorks_In-Market_Backup_Ltd',
    impressions: 3255,
    clicks: 1385,
    spend: 777,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-Social_Facebook - Capture_EMEA_NE_Cross-sell_VentureCapital_Combination_ALNALD_LLC',
    impressions: 3293,
    clicks: 1481,
    spend: 622,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Facebook_GLOBAL_NZ_Retargeting Bundle_DocSend_Keyword_Capture',
    impressions: 3311,
    clicks: 1475,
    spend: 777,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_Quora_EMEA_DE_Upsell_DropboxSignAPI_Third-Party-Data_Always-On_Ltd',
    impressions: 297,
    clicks: 1316,
    spend: 909,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Direct Buy_LATAM_USCA_Upsell_Lending_First-Party-Data_Team Softness',
    impressions: 4636,
    clicks: 1043,
    spend: 938,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-SEM_Facebook - ALNALD_APJ_NE_Cross-sell_Adobe_Lookalike_ALNALD_and Sons',
    impressions: 4122,
    clicks: 1374,
    spend: 977,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_Bing_APAC_AUNZ_Upsell_Tech Savvy ScrapbooKing Moms_Interest_Digital Experience Platform_Inc',
    impressions: 2905,
    clicks: 1223,
    spend: 570,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Twitter_G5_SG_Non-Brand_Sales_In-Market_Backup_Ltd',
    impressions: 1754,
    clicks: 1287,
    spend: 702,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_DV360_NAMER_JP_Cross-sell_General_Interest_Capture_LLC',
    impressions: 345,
    clicks: 1368,
    spend: 881,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_TTD - Capture_APAC_USCA_Competitor_Healthcare_Website-List_Digital Experience Platform_Group',
    impressions: 4767,
    clicks: 1375,
    spend: 755,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-SEM_Paved_NAMER_DE_Retargeting Bundle_Clicker-Social_Lookalike_Team Softness',
    impressions: 4710,
    clicks: 1387,
    spend: 527,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Google_NAMER_JP_Retargeting Bundle_CompleteViewer-Social_Keyword_Team Softness',
    impressions: 2491,
    clicks: 1199,
    spend: 561,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_DV360_LATAM_FR_Competitor_CompleteViewer-YT_Lookalike-CRM_Always-On',
    impressions: 1993,
    clicks: 1195,
    spend: 878,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-Social_LinkedIn_G5_AUNZ_Upsell_Business_Interest_ALNALD_Ltd',
    impressions: 3577,
    clicks: 1452,
    spend: 569,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_Facebook_APAC_IT_Cross-sell_Technology_Third-Party-Data_MOCA Cybersecurity',
    impressions: 3626,
    clicks: 1430,
    spend: 968,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Quora_APAC_AU_Retargeting Bundle_Basic Dormant_Contextual_Capture',
    impressions: 4312,
    clicks: 1267,
    spend: 941,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Prog-Video_TTD_NAMER_US_Non-Brand_Dynamic Search_Combination_ALNALD_PLC',
    impressions: 2139,
    clicks: 1487,
    spend: 931,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-OLV_Quora_EMEA_UK_Nurturing_Tech Savvy ScrapbooKing Moms_Contextual_Always-On_Ltd',
    impressions: 4374,
    clicks: 1149,
    spend: 712,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_Stack Overflow_LATAM_AUNZ_Retargeting Bundle_Solo Creative_Website-List_Digital Experience Platform_Ltd',
    impressions: 2953,
    clicks: 1116,
    spend: 747,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-Social_DV360_GLOBAL_CA_Retargeting Bundle_Healthcare_Website-List_MOCA Cybersecurity_Group',
    impressions: 4381,
    clicks: 1169,
    spend: 919,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-Social_Stack Overflow_EMEA_ES_Competitor_Trial Sign Ups_Custom-Intent_Always-On',
    impressions: 1444,
    clicks: 1289,
    spend: 559,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_Facebook - Capture_LATAM_USCA_Non-Brand_Revenue-Focused Employees_Third-Party-Data_Backup_PLC',
    impressions: 1707,
    clicks: 1181,
    spend: 626,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Youtube_NAMER_UK_Brand_DocSend_Third-Party-Data_Digital Experience Platform_Inc',
    impressions: 1539,
    clicks: 1328,
    spend: 673,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_Quora_APJ_UKIR_Retargeting_Biz Cart Abandoner_Contextual_MOCA Cybersecurity_PLC',
    impressions: 2887,
    clicks: 1266,
    spend: 630,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Video_Paved_APJ_UKIR_Brand_Organic Video Engagers_Keyword_Backup',
    impressions: 1048,
    clicks: 1257,
    spend: 647,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-SEM_Facebook_APJ_SG_Upsell_Converter_Lookalike-CRM_Backup_Ltd',
    impressions: 803,
    clicks: 1353,
    spend: 863,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Video_Bidtellect_LATAM_INT_Retargeting Bundle_HelloFax_Combination_Digital Experience Platform_PLC',
    impressions: 3280,
    clicks: 1482,
    spend: 707,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Direct Buy_G5_CA_Retargeting_eSignature_Customer-List_Always-On',
    impressions: 3045,
    clicks: 1045,
    spend: 793,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-SEM_Paved_G5_US_Nurturing_Real Estate_Lookalike_MOCA Cybersecurity_PLC',
    impressions: 4349,
    clicks: 1147,
    spend: 688,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-SEM_Facebook - ALNALD_LATAM_FR_Brand_Competitors_In-Market_MOCA Cybersecurity_LLC',
    impressions: 2747,
    clicks: 1066,
    spend: 913,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-OLV_Facebook_G5_DE_Retargeting_DropboxSign_Third-Party-Data_Capture_and Sons',
    impressions: 470,
    clicks: 1041,
    spend: 797,
  },
];

export default campaigns;
