const campaigns = [
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-OLV_Stack Overflow_APAC_SG_Retargeting Bundle_SignEasy_Job-Title_Team Softness',
    impressions: 564,
    clicks: 1768,
    spend: 969,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_Stack Overflow_G5_NZ_Non-Brand_Basic RFM Green_Keyword_Digital Experience Platform_and Sons',
    impressions: 1078,
    clicks: 1369,
    spend: 1902,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_Direct Buy_EMEA_UK_Retargeting_Pro Cart Abandoner_Job-Title_MOCA Cybersecurity',
    impressions: 1835,
    clicks: 1842,
    spend: 1445,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Video_Bidtellect_APJ_SG_Nurturing_Biz Cart Abandoner_Combination_Backup_LLC',
    impressions: 546,
    clicks: 1600,
    spend: 1565,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-Social_Google_GLOBAL_NE_Brand_Organic Video Engagers_Lookalike-Pixel_Team Softness',
    impressions: 671,
    clicks: 1654,
    spend: 1098,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-OLV_LinkedIn_EMEA_AU_Prospecting_HelloFax_Interest_MOCA Cybersecurity',
    impressions: 1186,
    clicks: 1729,
    spend: 1368,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBX_Paid-Social_Facebook - ALNALD_APAC_IT_Non-Brand_Pro Cart Abandoner_Customer-List_ALNALD_Ltd',
    impressions: 546,
    clicks: 1840,
    spend: 1841,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Display_Bidtellect_G5_US_Upsell_Project Managers_Lookalike_Digital Experience Platform',
    impressions: 1894,
    clicks: 1793,
    spend: 1648,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-SEM_Google_GLOBAL_UK_Cross-sell_Education_Contextual_Team Softness_Ltd',
    impressions: 1250,
    clicks: 877,
    spend: 1318,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_Paved_NAMER_INT_Brand_Basic RFM Red_Job-Title_MOCA Cybersecurity_PLC',
    impressions: 1699,
    clicks: 614,
    spend: 764,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-OLV_Bidtellect_APJ_INT_Retargeting Bundle_Real Estate_Lookalike-CRM_MOCA Cybersecurity',
    impressions: 1609,
    clicks: 1501,
    spend: 968,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-Social_LinkedIn_APJ_UK_Retargeting Bundle_Converter_Job-Title_Capture_LLC',
    impressions: 1684,
    clicks: 1011,
    spend: 1093,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Prog-Video_TTD - ALNALD_LATAM_USCA_Retargeting Bundle_Sales_Contextual_Backup',
    impressions: 1114,
    clicks: 502,
    spend: 1214,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-OLV_Stack Overflow_NAMER_IT_Cross-sell_Contract_Interest_Capture_and Sons',
    impressions: 929,
    clicks: 858,
    spend: 1225,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_Twitter_EMEA_ES_Cross-sell_DropboxFax_Website-List_Digital Experience Platform_PLC',
    impressions: 538,
    clicks: 1991,
    spend: 1558,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Twitter_NAMER_INT_Retargeting_Clicker-Prog_Custom-Intent_Capture_Group',
    impressions: 525,
    clicks: 888,
    spend: 993,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-OLV_TTD - Capture_EMEA_INT_Upsell_Pro With High Storage Usage_Job-Title_Capture_PLC',
    impressions: 1822,
    clicks: 518,
    spend: 577,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-Social_Paved_G5_US_Upsell_Document_Job-Title_Team Softness_and Sons',
    impressions: 1835,
    clicks: 737,
    spend: 725,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_Direct Buy_GLOBAL_SG_Competitor_Business + Tech_Lookalike-CRM_Backup_LLC',
    impressions: 735,
    clicks: 1045,
    spend: 542,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-Social_LinkedIn_GLOBAL_JP_Non-Brand_Contextual + Topic + Industry_Job-Title_Backup_Ltd',
    impressions: 1836,
    clicks: 1184,
    spend: 1248,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_Paved_APJ_CA_Cross-sell_Basic RFM Green_Second-Party-Data_ALNALD_Inc',
    impressions: 1177,
    clicks: 1611,
    spend: 720,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_TTD_GLOBAL_INT_Non-Brand_Converter_First-Party-Data_Capture_PLC',
    impressions: 1370,
    clicks: 1419,
    spend: 1257,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Prog-Video_DV360_G5_IT_Cross-sell_Creative Teams_Second-Party-Data_Capture',
    impressions: 1241,
    clicks: 948,
    spend: 989,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-Social_Stack Overflow_GLOBAL_ES_Upsell_Users With High Propensity To Buy Family_Job-Title_Team Softness_PLC',
    impressions: 1342,
    clicks: 1509,
    spend: 910,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_Paved_APJ_NZ_Brand_DocSend_In-Market_Capture_Inc',
    impressions: 1544,
    clicks: 687,
    spend: 1228,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-SEM_Facebook_EMEA_IR_Cross-sell_HelloSign_Interest_ALNALD_Inc',
    impressions: 1401,
    clicks: 1445,
    spend: 1942,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-SEM_Bing_EMEA_IR_Non-Brand_Clicker-Prog_Lookalike-CRM_Capture_Ltd',
    impressions: 1120,
    clicks: 902,
    spend: 1832,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_Facebook - Capture_APAC_USCA_Upsell_Users With High Propensity To Buy Family_Contextual_MOCA Cybersecurity',
    impressions: 1375,
    clicks: 1902,
    spend: 1649,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-OLV_Youtube_G5_FR_Cross-sell_Dynamic Search_Job-Title_MOCA Cybersecurity_and Sons',
    impressions: 757,
    clicks: 788,
    spend: 1668,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_Twitter_APJ_UK_Prospecting_DropboxFax_Job-Title_Capture_Ltd',
    impressions: 888,
    clicks: 1738,
    spend: 1627,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_TTD_APAC_US_Competitor_Biz Landing Page Visitor_Third-Party-Data_Always-On_PLC',
    impressions: 1041,
    clicks: 1061,
    spend: 666,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Prog-Display_Bing_GLOBAL_AU_Retargeting_Document_Lookalike-Pixel_Digital Experience Platform',
    impressions: 640,
    clicks: 1664,
    spend: 1784,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Prog-Video_Facebook - ALNALD_APJ_SG_Retargeting_Organic Video Engagers_Website-List_MOCA Cybersecurity_LLC',
    impressions: 1305,
    clicks: 1844,
    spend: 658,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-OLV_LinkedIn_EMEA_DE_Competitor_Plus Cart Abandoner_Affinity_ALNALD_Inc',
    impressions: 612,
    clicks: 1441,
    spend: 1014,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-OLV_Paved_EMEA_USCA_Upsell_DropboxForms_Lookalike-Pixel_ALNALD',
    impressions: 1064,
    clicks: 1210,
    spend: 1032,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_Bing_APAC_NZ_Competitor_Users With High Propensity To Buy Pro_Interest_Always-On',
    impressions: 1812,
    clicks: 937,
    spend: 1674,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Paved_APAC_DE_Cross-sell_Dynamic Search_Keyword_Capture_Inc',
    impressions: 1529,
    clicks: 1179,
    spend: 1842,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_Facebook - Capture_LATAM_DE_Cross-sell_DropboxSignAPI_Keyword_Team Softness_LLC',
    impressions: 1031,
    clicks: 1490,
    spend: 743,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-OLV_LinkedIn_NAMER_NE_Cross-sell_OtherCompetitor_Second-Party-Data_Digital Experience Platform_PLC',
    impressions: 1041,
    clicks: 1723,
    spend: 1538,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-OLV_Quora_APJ_FR_Upsell_Family Sharers_Second-Party-Data_Capture',
    impressions: 833,
    clicks: 1087,
    spend: 1706,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBX_Prog-Video_DV360_APJ_AU_Competitor_DocSend_Contextual_Capture',
    impressions: 1938,
    clicks: 544,
    spend: 1049,
  },
  {
    platform: 'Google Ads Placement',
    campaign: 'DS_Prog-Display_Bing_NAMER_AU_Brand_HR_First-Party-Data_Capture',
    impressions: 1255,
    clicks: 1833,
    spend: 1975,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_Bidtellect_GLOBAL_INT_Retargeting Bundle_Clicker-Social_Lookalike-CRM_Backup',
    impressions: 1497,
    clicks: 729,
    spend: 1214,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Facebook - Capture_NAMER_NZ_Prospecting_DocSend Core_Lookalike-CRM_Digital Experience Platform_LLC',
    impressions: 1280,
    clicks: 722,
    spend: 928,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_TTD - Capture_LATAM_AU_Brand_IT & Technology Employees_Job-Title_Digital Experience Platform_LLC',
    impressions: 1951,
    clicks: 724,
    spend: 1530,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-Social_Youtube_GLOBAL_JP_Competitor_PDF_Second-Party-Data_Always-On',
    impressions: 622,
    clicks: 734,
    spend: 918,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_Youtube_G5_IT_Nurturing_HelloFax_Second-Party-Data_MOCA Cybersecurity',
    impressions: 1336,
    clicks: 1012,
    spend: 1307,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-OLV_Facebook_LATAM_AUNZ_Retargeting Bundle_PDF_Lookalike_Team Softness_and Sons',
    impressions: 1610,
    clicks: 1956,
    spend: 1784,
  },
  {
    platform: 'Google Ads Ad',
    campaign: 'DS_Paid-SEM_TTD_EMEA_IR_Non-Brand_Adobe_Keyword_ALNALD_PLC',
    impressions: 1921,
    clicks: 1773,
    spend: 1379,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_Paved_LATAM_IR_Brand_Business + Tech_Custom-Intent_ALNALD_Group',
    impressions: 927,
    clicks: 724,
    spend: 970,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Display_Stack Overflow_APAC_ES_Prospecting_Small & Mid-size Enterprise Employees_Custom-Intent_Backup_Ltd',
    impressions: 1612,
    clicks: 1596,
    spend: 1954,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Twitter_GLOBAL_AUNZ_Competitor_HelloFax_Lookalike_Always-On',
    impressions: 1419,
    clicks: 1681,
    spend: 1419,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-SEM_Youtube_G5_IT_Upsell_IT_In-Market_MOCA Cybersecurity_and Sons',
    impressions: 922,
    clicks: 1876,
    spend: 1459,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Video_Bing_NAMER_SG_Competitor_Creative & Marketing Teams_Second-Party-Data_MOCA Cybersecurity_LLC',
    impressions: 1315,
    clicks: 1863,
    spend: 1532,
  },
  {
    platform: 'Google Ads Ad',
    campaign: 'DBS_Prog-Video_DV360_NAMER_UKIR_Upsell_IT_In-Market_Backup_PLC',
    impressions: 722,
    clicks: 1888,
    spend: 1443,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-Social_Paved_G5_IR_Prospecting_CompleteViewer-YT_In-Market_Team Softness_Ltd',
    impressions: 1531,
    clicks: 1617,
    spend: 1290,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Video_DV360_GLOBAL_UK_Nurturing_Clicker-YT_Contextual_MOCA Cybersecurity_Group',
    impressions: 1940,
    clicks: 1637,
    spend: 687,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-Social_Paved_APAC_ES_Cross-sell_Contextual + Topic + Industry_Job-Title_Always-On_PLC',
    impressions: 1785,
    clicks: 1549,
    spend: 871,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_LinkedIn_GLOBAL_JP_Prospecting_Organic Video Engagers_Keyword_ALNALD',
    impressions: 888,
    clicks: 1352,
    spend: 584,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-SEM_Google_NAMER_SG_Retargeting Bundle_Pro With High Storage Usage_Keyword_Capture',
    impressions: 1543,
    clicks: 573,
    spend: 1121,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-Social_Direct Buy_G5_JP_Cross-sell_Real Estate_Website-List_MOCA Cybersecurity_Inc',
    impressions: 1844,
    clicks: 1100,
    spend: 1080,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-Social_TTD_G5_IT_Retargeting Bundle_CompleteViewer-YT_Affinity_Backup_and Sons',
    impressions: 1573,
    clicks: 1341,
    spend: 669,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-OLV_Direct Buy_APJ_UK_Brand_Clicker-Search_Contextual_Team Softness',
    impressions: 1015,
    clicks: 1622,
    spend: 1588,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-OLV_Facebook - ALNALD_LATAM_NE_Competitor_Small & Mid-size Enterprise Employees_Lookalike-CRM_Digital Experience Platform_Inc',
    impressions: 1278,
    clicks: 920,
    spend: 1752,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Display_TTD - ALNALD_GLOBAL_SG_Retargeting Bundle_Organic Video Engagers_Customer-List_ALNALD_and Sons',
    impressions: 1772,
    clicks: 1922,
    spend: 1166,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Facebook - ALNALD_NAMER_US_Retargeting_Project Managers_Lookalike_MOCA Cybersecurity_and Sons',
    impressions: 1807,
    clicks: 1487,
    spend: 988,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_Google_APAC_FR_Retargeting_General_Job-Title_Backup_Group',
    impressions: 1388,
    clicks: 627,
    spend: 1178,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_Stack Overflow_APJ_AUNZ_Cross-sell_IT_Lookalike_Always-On',
    impressions: 601,
    clicks: 1078,
    spend: 710,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Display_Twitter_APJ_FR_Non-Brand_Converter_Website-List_ALNALD',
    impressions: 777,
    clicks: 1228,
    spend: 560,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-Social_TTD - ALNALD_APJ_JP_Upsell_HelloWorks_In-Market_Backup_Ltd',
    impressions: 1413,
    clicks: 618,
    spend: 1728,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_Facebook - Capture_EMEA_NE_Cross-sell_VentureCapital_Combination_ALNALD_LLC',
    impressions: 1489,
    clicks: 1749,
    spend: 727,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Facebook_GLOBAL_NZ_Retargeting Bundle_DocSend_Keyword_Capture',
    impressions: 1821,
    clicks: 1250,
    spend: 800,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_Quora_EMEA_DE_Upsell_DropboxSignAPI_Third-Party-Data_Always-On_Ltd',
    impressions: 690,
    clicks: 648,
    spend: 1019,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Direct Buy_LATAM_USCA_Upsell_Lending_First-Party-Data_Team Softness',
    impressions: 1007,
    clicks: 1625,
    spend: 1375,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-SEM_Facebook - ALNALD_APJ_NE_Cross-sell_Adobe_Lookalike_ALNALD_and Sons',
    impressions: 654,
    clicks: 931,
    spend: 720,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-OLV_Bing_APAC_AUNZ_Upsell_Tech Savvy ScrapbooKing Moms_Interest_Digital Experience Platform_Inc',
    impressions: 1806,
    clicks: 989,
    spend: 607,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_Twitter_G5_SG_Non-Brand_Sales_In-Market_Backup_Ltd',
    impressions: 954,
    clicks: 1724,
    spend: 1701,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBX_Prog-Video_DV360_NAMER_JP_Cross-sell_General_Interest_Capture_LLC',
    impressions: 1333,
    clicks: 1772,
    spend: 1778,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Video_TTD - Capture_APAC_USCA_Competitor_Healthcare_Website-List_Digital Experience Platform_Group',
    impressions: 596,
    clicks: 743,
    spend: 554,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-SEM_Paved_NAMER_DE_Retargeting Bundle_Clicker-Social_Lookalike_Team Softness',
    impressions: 1237,
    clicks: 852,
    spend: 1329,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Google_NAMER_JP_Retargeting Bundle_CompleteViewer-Social_Keyword_Team Softness',
    impressions: 1579,
    clicks: 1289,
    spend: 727,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_DV360_LATAM_FR_Competitor_CompleteViewer-YT_Lookalike-CRM_Always-On',
    impressions: 1938,
    clicks: 1944,
    spend: 754,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_LinkedIn_G5_AUNZ_Upsell_Business_Interest_ALNALD_Ltd',
    impressions: 1852,
    clicks: 682,
    spend: 747,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_Facebook_APAC_IT_Cross-sell_Technology_Third-Party-Data_MOCA Cybersecurity',
    impressions: 986,
    clicks: 770,
    spend: 553,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Paid-Social_Quora_APAC_AU_Retargeting Bundle_Basic Dormant_Contextual_Capture',
    impressions: 742,
    clicks: 1306,
    spend: 1816,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_TTD_NAMER_US_Non-Brand_Dynamic Search_Combination_ALNALD_PLC',
    impressions: 889,
    clicks: 648,
    spend: 1268,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Quora_EMEA_UK_Nurturing_Tech Savvy ScrapbooKing Moms_Contextual_Always-On_Ltd',
    impressions: 1115,
    clicks: 1206,
    spend: 784,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Display_Stack Overflow_LATAM_AUNZ_Retargeting Bundle_Solo Creative_Website-List_Digital Experience Platform_Ltd',
    impressions: 1590,
    clicks: 937,
    spend: 721,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-Social_DV360_GLOBAL_CA_Retargeting Bundle_Healthcare_Website-List_MOCA Cybersecurity_Group',
    impressions: 989,
    clicks: 1915,
    spend: 791,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-Social_Stack Overflow_EMEA_ES_Competitor_Trial Sign Ups_Custom-Intent_Always-On',
    impressions: 1697,
    clicks: 1473,
    spend: 643,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-Social_Facebook - Capture_LATAM_USCA_Non-Brand_Revenue-Focused Employees_Third-Party-Data_Backup_PLC',
    impressions: 517,
    clicks: 1558,
    spend: 558,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_Youtube_NAMER_UK_Brand_DocSend_Third-Party-Data_Digital Experience Platform_Inc',
    impressions: 1640,
    clicks: 694,
    spend: 835,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_Quora_APJ_UKIR_Retargeting_Biz Cart Abandoner_Contextual_MOCA Cybersecurity_PLC',
    impressions: 1195,
    clicks: 1822,
    spend: 808,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Prog-Video_Paved_APJ_UKIR_Brand_Organic Video Engagers_Keyword_Backup',
    impressions: 1098,
    clicks: 1076,
    spend: 1237,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Paid-SEM_Facebook_APJ_SG_Upsell_Converter_Lookalike-CRM_Backup_Ltd',
    impressions: 1249,
    clicks: 1399,
    spend: 1494,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Video_Bidtellect_LATAM_INT_Retargeting Bundle_HelloFax_Combination_Digital Experience Platform_PLC',
    impressions: 833,
    clicks: 1600,
    spend: 1226,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Direct Buy_G5_CA_Retargeting_eSignature_Customer-List_Always-On',
    impressions: 1300,
    clicks: 1541,
    spend: 529,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-SEM_Paved_G5_US_Nurturing_Real Estate_Lookalike_MOCA Cybersecurity_PLC',
    impressions: 1410,
    clicks: 1758,
    spend: 1915,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-SEM_Facebook - ALNALD_LATAM_FR_Brand_Competitors_In-Market_MOCA Cybersecurity_LLC',
    impressions: 1870,
    clicks: 1901,
    spend: 712,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-OLV_Facebook_G5_DE_Retargeting_DropboxSign_Third-Party-Data_Capture_and Sons',
    impressions: 1891,
    clicks: 1345,
    spend: 558,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-OLV_Twitter_APJ_SG_Prospecting_IT_Customer-List_Digital Experience Platform',
    impressions: 1124,
    clicks: 596,
    spend: 1316,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBX_Paid-Social_Bing_GLOBAL_JP_Nurturing_Pro Cart Abandoner_Custom-Intent_Capture_LLC',
    impressions: 827,
    clicks: 1807,
    spend: 607,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_LinkedIn_EMEA_NE_Non-Brand_Users With High Propensity To Buy Plus_Customer-List_Backup',
    impressions: 653,
    clicks: 1195,
    spend: 601,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Prog-Display_Google_LATAM_NZ_Upsell_Document_In-Market_Capture',
    impressions: 547,
    clicks: 1172,
    spend: 976,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Video_Youtube_APJ_UK_Prospecting_Business + Tech_Customer-List_MOCA Cybersecurity_PLC',
    impressions: 1977,
    clicks: 558,
    spend: 1200,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-SEM_Facebook_LATAM_UK_Cross-sell_Users With High Propensity To Buy Plus_First-Party-Data_Digital Experience Platform_Ltd',
    impressions: 1079,
    clicks: 1130,
    spend: 1299,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-SEM_Bidtellect_LATAM_NE_Retargeting_Document_Job-Title_Backup',
    impressions: 1606,
    clicks: 1133,
    spend: 845,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Quora_APJ_INT_Nurturing_HelloSign_First-Party-Data_Always-On_Inc',
    impressions: 1707,
    clicks: 626,
    spend: 1466,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-SEM_LinkedIn_APJ_IR_Upsell_Contextual + Topic + Industry_Lookalike-Pixel_Team Softness_Group',
    impressions: 1152,
    clicks: 707,
    spend: 1403,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-OLV_Youtube_G5_AUNZ_Prospecting_Biz Landing Page Visitor_Second-Party-Data_Always-On_PLC',
    impressions: 1730,
    clicks: 1409,
    spend: 663,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Google_EMEA_DE_Retargeting Bundle_Solo Creative_Combination_ALNALD_LLC',
    impressions: 1022,
    clicks: 1859,
    spend: 1574,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_Twitter_LATAM_SG_Nurturing_Users With High Propensity To Buy Biz_Customer-List_Always-On_Ltd',
    impressions: 1296,
    clicks: 1064,
    spend: 1664,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-OLV_TTD - Capture_GLOBAL_INT_Non-Brand_Tech Savvy ScrapbooKing Moms_Lookalike-CRM_Digital Experience Platform',
    impressions: 1683,
    clicks: 1590,
    spend: 1941,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-SEM_Quora_NAMER_NZ_Prospecting_Integration_Customer-List_Always-On_Group',
    impressions: 1924,
    clicks: 708,
    spend: 668,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_Facebook_APJ_DE_Retargeting Bundle_DropboxFax_Keyword_MOCA Cybersecurity',
    impressions: 546,
    clicks: 605,
    spend: 1763,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Prog-Video_DV360_EMEA_UK_Retargeting_HelloWorks_Lookalike-CRM_Team Softness',
    impressions: 1014,
    clicks: 1053,
    spend: 1539,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_DV360_EMEA_JP_Upsell_Plus With High Storage Usage_In-Market_Digital Experience Platform_Inc',
    impressions: 832,
    clicks: 1241,
    spend: 1023,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-SEM_Quora_LATAM_AU_Retargeting Bundle_Pro With High Storage Usage_Customer-List_MOCA Cybersecurity',
    impressions: 1219,
    clicks: 1176,
    spend: 1316,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_Bing_NAMER_AU_Brand_HelloSign_Lookalike_Capture_LLC',
    impressions: 1495,
    clicks: 553,
    spend: 1651,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_Twitter_APAC_UKIR_Non-Brand_Users With High Propensity To Buy Family_First-Party-Data_Digital Experience Platform_Group',
    impressions: 1459,
    clicks: 1105,
    spend: 1850,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Video_LinkedIn_APAC_AU_Retargeting Bundle_Document_First-Party-Data_MOCA Cybersecurity_LLC',
    impressions: 694,
    clicks: 1904,
    spend: 1465,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_Facebook - Capture_NAMER_DE_Retargeting Bundle_DropboxForms_Combination_MOCA Cybersecurity_and Sons',
    impressions: 1471,
    clicks: 1709,
    spend: 1736,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Prog-Display_Facebook - Capture_G5_US_Cross-sell_StartUps_Contextual_Team Softness',
    impressions: 1718,
    clicks: 1342,
    spend: 1124,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_Stack Overflow_APAC_NZ_Prospecting_DropboxForms_Contextual_ALNALD',
    impressions: 1044,
    clicks: 1175,
    spend: 571,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Facebook_G5_US_Prospecting_Basic_Lookalike-Pixel_Digital Experience Platform',
    impressions: 1404,
    clicks: 1389,
    spend: 1868,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Video_Direct Buy_APJ_IR_Retargeting_Creative Teams_Second-Party-Data_ALNALD_and Sons',
    impressions: 1757,
    clicks: 1427,
    spend: 599,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Prog-Display_Bidtellect_LATAM_UKIR_Prospecting_Clicker-Prog_Lookalike_Backup_Group',
    impressions: 1102,
    clicks: 1442,
    spend: 1087,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Twitter_APJ_USCA_Non-Brand_Revenue-Focused Employees_Job-Title_Capture_and Sons',
    impressions: 1326,
    clicks: 1857,
    spend: 884,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-SEM_Bidtellect_NAMER_NZ_Brand_Pro With High Storage Usage_Lookalike-CRM_ALNALD_LLC',
    impressions: 1230,
    clicks: 1177,
    spend: 1339,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Display_Youtube_G5_FR_Non-Brand_DocuSign_Contextual_ALNALD_Group',
    impressions: 1293,
    clicks: 959,
    spend: 847,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-OLV_Facebook_APJ_NE_Retargeting_Marketing Teams_Lookalike-CRM_MOCA Cybersecurity_Group',
    impressions: 578,
    clicks: 1308,
    spend: 1268,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_DV360_APJ_NE_Non-Brand_CompleteViewer-YT_Combination_ALNALD_LLC',
    impressions: 1432,
    clicks: 1463,
    spend: 1907,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-OLV_Facebook - ALNALD_G5_USCA_Cross-sell_Dynamic Search_Affinity_MOCA Cybersecurity',
    impressions: 1606,
    clicks: 1304,
    spend: 566,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Video_Bing_APAC_NZ_Nurturing_Healthcare_Second-Party-Data_Always-On',
    impressions: 1840,
    clicks: 1132,
    spend: 1872,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_TTD - Capture_APJ_AU_Upsell_Basic Dormant PDF_Keyword_Digital Experience Platform',
    impressions: 1184,
    clicks: 785,
    spend: 1209,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_Direct Buy_NAMER_US_Upsell_General_Second-Party-Data_Capture',
    impressions: 1020,
    clicks: 1929,
    spend: 955,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-Social_TTD - Capture_APAC_JP_Brand_Adobe_Contextual_Team Softness_Ltd',
    impressions: 841,
    clicks: 613,
    spend: 1657,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Video_Direct Buy_G5_USCA_Brand_Trial Sign Ups_Lookalike_Backup_and Sons',
    impressions: 1977,
    clicks: 1240,
    spend: 558,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_Quora_LATAM_FR_Upsell_Users With High Propensity To Buy Family_Third-Party-Data_MOCA Cybersecurity',
    impressions: 781,
    clicks: 1058,
    spend: 1152,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Display_Stack Overflow_GLOBAL_NE_Retargeting_StartUps_Second-Party-Data_Team Softness_and Sons',
    impressions: 647,
    clicks: 869,
    spend: 1590,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Display_LinkedIn_APAC_IR_Prospecting_Trial Sign Ups_Customer-List_Team Softness_Group',
    impressions: 859,
    clicks: 1398,
    spend: 1276,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Bing_GLOBAL_ES_Cross-sell_Pro Cart Abandoner_Keyword_Always-On',
    impressions: 1815,
    clicks: 1770,
    spend: 710,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Prog-Display_Youtube_G5_NE_Brand_Pro Cart Abandoner_Custom-Intent_Always-On_Group',
    impressions: 1840,
    clicks: 1718,
    spend: 601,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Video_DV360_APJ_JP_Retargeting Bundle_Lending_Customer-List_Digital Experience Platform_Inc',
    impressions: 697,
    clicks: 577,
    spend: 1797,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Stack Overflow_G5_US_Prospecting_Competitors_Customer-List_Capture',
    impressions: 929,
    clicks: 1266,
    spend: 633,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Bidtellect_NAMER_UKIR_Non-Brand_DropboxForms_First-Party-Data_Capture_Inc',
    impressions: 1191,
    clicks: 590,
    spend: 1788,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Prog-Display_Youtube_EMEA_FR_Prospecting_OtherCompetitor_Keyword_Digital Experience Platform_PLC',
    impressions: 1807,
    clicks: 1823,
    spend: 1214,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-Social_Bing_GLOBAL_FR_Competitor_DocuSign_Customer-List_Always-On',
    impressions: 1026,
    clicks: 1515,
    spend: 724,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Prog-Video_Bing_EMEA_CA_Retargeting Bundle_Lending_Contextual_MOCA Cybersecurity',
    impressions: 1205,
    clicks: 718,
    spend: 1176,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Prog-Video_DV360_EMEA_DE_Brand_Revenue-Focused Employees_Customer-List_MOCA Cybersecurity',
    impressions: 964,
    clicks: 1429,
    spend: 1850,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Paid-SEM_Bidtellect_GLOBAL_AU_Upsell_Adobe_Combination_Team Softness_PLC',
    impressions: 631,
    clicks: 1550,
    spend: 1393,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-OLV_Paved_APAC_DE_Non-Brand_Plus Cart Abandoner_First-Party-Data_MOCA Cybersecurity',
    impressions: 1309,
    clicks: 1033,
    spend: 1489,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Prog-Display_Paved_G5_JP_Upsell_Integration_Keyword_Digital Experience Platform',
    impressions: 1647,
    clicks: 1085,
    spend: 1538,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_DV360_EMEA_SG_Upsell_Basic RFM Yellow_Second-Party-Data_Backup_Ltd',
    impressions: 1808,
    clicks: 1658,
    spend: 609,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-Social_Google_EMEA_NE_Competitor_OtherCompetitor_Lookalike_ALNALD',
    impressions: 1310,
    clicks: 1889,
    spend: 1112,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_Paved_APAC_IR_Upsell_StartUps_Lookalike-Pixel_Team Softness',
    impressions: 947,
    clicks: 678,
    spend: 1027,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Prog-Display_Facebook - ALNALD_APJ_UKIR_Prospecting_Converter_Interest_MOCA Cybersecurity_Inc',
    impressions: 1777,
    clicks: 1883,
    spend: 1724,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Prog-Display_Bing_NAMER_SG_Upsell_Business_Second-Party-Data_MOCA Cybersecurity_PLC',
    impressions: 1831,
    clicks: 840,
    spend: 660,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Twitter_GLOBAL_INT_Brand_Technology_Keyword_Team Softness',
    impressions: 1709,
    clicks: 1823,
    spend: 1881,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Paid-OLV_Bidtellect_LATAM_USCA_Competitor_eSignature_First-Party-Data_Capture_Inc',
    impressions: 941,
    clicks: 1114,
    spend: 1924,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Bing_APAC_IT_Cross-sell_MediaProfesional_Custom-Intent_MOCA Cybersecurity',
    impressions: 1407,
    clicks: 1546,
    spend: 1612,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-SEM_Twitter_EMEA_DE_Brand_VentureCapital_Contextual_ALNALD',
    impressions: 531,
    clicks: 1638,
    spend: 1561,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-SEM_Stack Overflow_GLOBAL_AUNZ_Cross-sell_SignEasy_Website-List_Capture_and Sons',
    impressions: 1109,
    clicks: 844,
    spend: 1682,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-Social_TTD - Capture_NAMER_NE_Cross-sell_CompleteViewer-YT_Job-Title_Capture',
    impressions: 1766,
    clicks: 610,
    spend: 1389,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-Social_Bidtellect_APJ_ES_Nurturing_eSignature_Combination_Capture_and Sons',
    impressions: 1017,
    clicks: 1261,
    spend: 1002,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBS_Prog-Display_Facebook - Capture_NAMER_FR_Cross-sell_Capture Page Visitors_Job-Title_Backup_Group',
    impressions: 1137,
    clicks: 1286,
    spend: 1502,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Prog-Display_Google_APJ_UKIR_Prospecting_Organic Video Engagers_Website-List_Capture',
    impressions: 1563,
    clicks: 621,
    spend: 1108,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-OLV_Bing_NAMER_DE_Brand_Basic RFM Green_Third-Party-Data_Backup_Group',
    impressions: 523,
    clicks: 647,
    spend: 744,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-OLV_TTD - Capture_NAMER_IR_Nurturing_Users With High Propensity To Buy Plus_First-Party-Data_ALNALD',
    impressions: 1026,
    clicks: 885,
    spend: 1348,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_TTD - Capture_GLOBAL_US_Retargeting Bundle_Basic RFM Yellow_First-Party-Data_Team Softness',
    impressions: 518,
    clicks: 1571,
    spend: 844,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Display_Twitter_APAC_JP_Non-Brand_Healthcare_Third-Party-Data_Digital Experience Platform_Ltd',
    impressions: 1546,
    clicks: 810,
    spend: 1898,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Prog-Display_Facebook - Capture_EMEA_NZ_Nurturing_MediaProfesional_Lookalike-CRM_ALNALD',
    impressions: 1721,
    clicks: 1378,
    spend: 1585,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_Paved_EMEA_AU_Cross-sell_Plus & Family Landing Page Visitors_Combination_ALNALD_and Sons',
    impressions: 1560,
    clicks: 1189,
    spend: 1371,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Bing_GLOBAL_ES_Non-Brand_Plus Cart Abandoner_Third-Party-Data_ALNALD',
    impressions: 1197,
    clicks: 1379,
    spend: 508,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Video_LinkedIn_APAC_US_Retargeting Bundle_Clicker-Social_Customer-List_Always-On',
    impressions: 1092,
    clicks: 1366,
    spend: 1291,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-SEM_TTD - ALNALD_APAC_US_Brand_Healthcare_Website-List_ALNALD_PLC',
    impressions: 1157,
    clicks: 1712,
    spend: 1157,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Paid-SEM_DV360_GLOBAL_UK_Prospecting_CompleteViewer-YT_Customer-List_ALNALD_PLC',
    impressions: 1957,
    clicks: 1343,
    spend: 575,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_TTD_APAC_IR_Prospecting_Biz Cart Abandoner_Website-List_Capture_PLC',
    impressions: 1162,
    clicks: 1808,
    spend: 535,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Quora_GLOBAL_NE_Prospecting_CompleteViewer-Social_Combination_MOCA Cybersecurity_and Sons',
    impressions: 661,
    clicks: 594,
    spend: 500,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Paid-OLV_Facebook_LATAM_UKIR_Non-Brand_Plus Cart Abandoner_Custom-Intent_Capture_and Sons',
    impressions: 1540,
    clicks: 1474,
    spend: 1922,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Stack Overflow_NAMER_IR_Prospecting_General_Custom-Intent_Backup',
    impressions: 609,
    clicks: 1575,
    spend: 599,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-SEM_Twitter_APAC_IR_Brand_Users With High Propensity To Buy Biz_In-Market_ALNALD_LLC',
    impressions: 745,
    clicks: 581,
    spend: 939,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-OLV_Facebook - ALNALD_NAMER_AUNZ_Nurturing_Dynamic Search_Lookalike_Team Softness',
    impressions: 1835,
    clicks: 1657,
    spend: 1802,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-Social_Youtube_NAMER_US_Retargeting Bundle_HelloSign_Custom-Intent_ALNALD_Ltd',
    impressions: 872,
    clicks: 1534,
    spend: 1828,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Prog-Video_Google_GLOBAL_IR_Brand_Contextual + Topic + Industry_Lookalike_MOCA Cybersecurity_Ltd',
    impressions: 1504,
    clicks: 1163,
    spend: 563,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_TTD_GLOBAL_ES_Cross-sell_Contract_Customer-List_Team Softness_and Sons',
    impressions: 978,
    clicks: 507,
    spend: 1161,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Prog-Video_Youtube_G5_US_Retargeting Bundle_VentureCapital_Third-Party-Data_Capture',
    impressions: 1707,
    clicks: 1145,
    spend: 1017,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Bing_EMEA_AUNZ_Upsell_VentureCapital_Combination_MOCA Cybersecurity_LLC',
    impressions: 1329,
    clicks: 914,
    spend: 754,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_TTD - ALNALD_GLOBAL_UKIR_Retargeting Bundle_Clicker-Search_Contextual_Digital Experience Platform_Inc',
    impressions: 1687,
    clicks: 686,
    spend: 1576,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-Social_TTD - ALNALD_NAMER_JP_Prospecting_Basic Dormant PDF_Lookalike-CRM_Capture_and Sons',
    impressions: 1857,
    clicks: 1462,
    spend: 981,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_Bing_G5_USCA_Non-Brand_CompleteViewer-Social_Lookalike-CRM_MOCA Cybersecurity_Group',
    impressions: 1118,
    clicks: 895,
    spend: 809,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-OLV_Twitter_LATAM_JP_Competitor_Marketing Teams_Combination_ALNALD',
    impressions: 1378,
    clicks: 1453,
    spend: 779,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'HS_Prog-Display_Paved_GLOBAL_IR_Upsell_FinServ_In-Market_Team Softness_PLC',
    impressions: 566,
    clicks: 697,
    spend: 763,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-OLV_Youtube_LATAM_AUNZ_Brand_Business + Tech_Custom-Intent_Capture',
    impressions: 1098,
    clicks: 1124,
    spend: 875,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Prog-Video_TTD - ALNALD_EMEA_USCA_Nurturing_Healthcare_First-Party-Data_Backup',
    impressions: 578,
    clicks: 1379,
    spend: 1740,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-Social_Quora_GLOBAL_DE_Competitor_Business_Website-List_Team Softness',
    impressions: 1485,
    clicks: 1279,
    spend: 1468,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Prog-Display_TTD - ALNALD_G5_FR_Upsell_Family Sharers_Keyword_MOCA Cybersecurity_Inc',
    impressions: 1149,
    clicks: 1351,
    spend: 1452,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-OLV_TTD - Capture_EMEA_USCA_Retargeting Bundle_Business + Tech_Affinity_Backup_Ltd',
    impressions: 1131,
    clicks: 1201,
    spend: 519,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Prog-Video_Youtube_NAMER_DE_Cross-sell_MediaProfesional_In-Market_Team Softness_Group',
    impressions: 1821,
    clicks: 1409,
    spend: 1683,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Facebook - Capture_G5_DE_Non-Brand_Pro_First-Party-Data_Team Softness',
    impressions: 1990,
    clicks: 502,
    spend: 1613,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Paid-SEM_Paved_LATAM_AU_Prospecting_Clicker-Prog_First-Party-Data_MOCA Cybersecurity_LLC',
    impressions: 687,
    clicks: 1385,
    spend: 1377,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_TTD_APAC_AU_Upsell_Clicker-Search_First-Party-Data_MOCA Cybersecurity_Ltd',
    impressions: 1179,
    clicks: 1481,
    spend: 1794,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_Quora_EMEA_AUNZ_Retargeting Bundle_Basic Dormant Video_Website-List_Always-On_Inc',
    impressions: 1535,
    clicks: 1577,
    spend: 948,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Prog-Display_Twitter_GLOBAL_INT_Prospecting_VentureCapital_Lookalike_Team Softness_PLC',
    impressions: 518,
    clicks: 697,
    spend: 1732,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-OLV_Quora_EMEA_ES_Retargeting_IT_Affinity_MOCA Cybersecurity_Inc',
    impressions: 1870,
    clicks: 1893,
    spend: 1974,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_Direct Buy_APAC_IR_Retargeting_Education_Lookalike-Pixel_ALNALD_PLC',
    impressions: 1340,
    clicks: 1500,
    spend: 1180,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_Bing_APAC_IR_Retargeting Bundle_PDF_Keyword_Team Softness_LLC',
    impressions: 1854,
    clicks: 933,
    spend: 998,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-Social_Stack Overflow_GLOBAL_INT_Retargeting_Clicker-Search_In-Market_ALNALD_Ltd',
    impressions: 623,
    clicks: 1734,
    spend: 1637,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Google_G5_UK_Prospecting_Project Managers_Third-Party-Data_Capture_LLC',
    impressions: 854,
    clicks: 1462,
    spend: 1862,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'HS_Prog-Video_Quora_NAMER_UKIR_Non-Brand_Basic_Lookalike-Pixel_MOCA Cybersecurity',
    impressions: 1060,
    clicks: 1182,
    spend: 1061,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Prog-Video_Quora_NAMER_IR_Upsell_ProServ_Lookalike-Pixel_Always-On',
    impressions: 1639,
    clicks: 922,
    spend: 1306,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'HS_Paid-OLV_Direct Buy_LATAM_IR_Retargeting_HR_Job-Title_Always-On_LLC',
    impressions: 1078,
    clicks: 535,
    spend: 1460,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Video_TTD - Capture_GLOBAL_INT_Retargeting Bundle_Pro Cart Abandoner_Third-Party-Data_MOCA Cybersecurity',
    impressions: 1440,
    clicks: 1864,
    spend: 1846,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-Social_Facebook_APAC_ES_Brand_DocSend Core_Affinity_Capture_LLC',
    impressions: 1889,
    clicks: 684,
    spend: 1426,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-SEM_Facebook - ALNALD_EMEA_AUNZ_Retargeting_Business Operations Employees_Customer-List_Team Softness_Ltd',
    impressions: 1762,
    clicks: 1154,
    spend: 1569,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-SEM_Google_APAC_FR_Retargeting Bundle_Business + Tech_Interest_Team Softness_Group',
    impressions: 1349,
    clicks: 1522,
    spend: 898,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_Quora_G5_UKIR_Competitor_Sales_First-Party-Data_Capture_and Sons',
    impressions: 1816,
    clicks: 697,
    spend: 1949,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Paid-SEM_Bidtellect_APAC_JP_Retargeting Bundle_Plus & Family Landing Page Visitors_Lookalike-Pixel_Capture_PLC',
    impressions: 1165,
    clicks: 930,
    spend: 554,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-SEM_DV360_APAC_JP_Prospecting_Organic Video Engagers_Website-List_Team Softness',
    impressions: 933,
    clicks: 1236,
    spend: 1254,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Display_Twitter_LATAM_DE_Non-Brand_Dynamic Search_Job-Title_Always-On_Group',
    impressions: 1503,
    clicks: 786,
    spend: 1018,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-SEM_TTD_NAMER_INT_Brand_DropboxForms_Combination_Digital Experience Platform_Ltd',
    impressions: 1085,
    clicks: 1830,
    spend: 1467,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Paid-Social_TTD_GLOBAL_SG_Nurturing_Document_Affinity_Team Softness_LLC',
    impressions: 1237,
    clicks: 1396,
    spend: 1713,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBX_Paid-Social_Bidtellect_LATAM_JP_Nurturing_Business Operations Employees_Keyword_Capture_Inc',
    impressions: 1845,
    clicks: 550,
    spend: 857,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBX_Prog-Display_Quora_APAC_AUNZ_Brand_Document_Job-Title_Backup',
    impressions: 1417,
    clicks: 1853,
    spend: 1302,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Twitter_G5_IR_Retargeting_DropboxFax_Lookalike-Pixel_Always-On_Inc',
    impressions: 656,
    clicks: 1713,
    spend: 1556,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Paid-OLV_Bing_GLOBAL_DE_Retargeting_PandaDoc_Interest_Capture_LLC',
    impressions: 744,
    clicks: 501,
    spend: 1511,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Display_TTD - ALNALD_GLOBAL_FR_Retargeting_HelloFax_Lookalike-CRM_ALNALD',
    impressions: 547,
    clicks: 1834,
    spend: 1946,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'HS_Paid-SEM_Facebook_NAMER_FR_Retargeting Bundle_Competitors_Contextual_Digital Experience Platform_LLC',
    impressions: 783,
    clicks: 1664,
    spend: 986,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Prog-Display_TTD - Capture_G5_DE_Competitor_Sales_Second-Party-Data_Capture',
    impressions: 1497,
    clicks: 1163,
    spend: 1467,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-SEM_Facebook - Capture_APJ_JP_Nurturing_ProServ_Job-Title_Team Softness',
    impressions: 900,
    clicks: 897,
    spend: 1738,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-SEM_Bidtellect_G5_ES_Prospecting_Pro Cart Abandoner_Custom-Intent_Backup_LLC',
    impressions: 1328,
    clicks: 1112,
    spend: 1773,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Paid-Social_Bing_LATAM_AUNZ_Retargeting Bundle_StartUps_Lookalike-Pixel_Capture_and Sons',
    impressions: 1096,
    clicks: 1848,
    spend: 1623,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DS_Paid-Social_Google_LATAM_IT_Competitor_Dynamic Search_Third-Party-Data_MOCA Cybersecurity_and Sons',
    impressions: 850,
    clicks: 545,
    spend: 1489,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DS_Paid-Social_DV360_APJ_DE_Non-Brand_Dynamic Search_Contextual_Always-On_Group',
    impressions: 1520,
    clicks: 1833,
    spend: 611,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_Stack Overflow_LATAM_USCA_Prospecting_Creative & Marketing Teams_Affinity_ALNALD_Group',
    impressions: 1604,
    clicks: 908,
    spend: 1433,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Display_Direct Buy_APAC_JP_Brand_Technology_Website-List_MOCA Cybersecurity_Inc',
    impressions: 742,
    clicks: 1834,
    spend: 1926,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBX_Prog-Video_LinkedIn_LATAM_UKIR_Prospecting_Team Leads_Combination_MOCA Cybersecurity_Ltd',
    impressions: 1335,
    clicks: 1275,
    spend: 1211,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBX_Prog-Video_Google_LATAM_US_Non-Brand_Marketing Teams_Interest_Always-On_Inc',
    impressions: 1388,
    clicks: 904,
    spend: 712,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Paid-OLV_TTD - ALNALD_G5_ES_Non-Brand_Users With High Propensity To Buy Family_Combination_ALNALD_PLC',
    impressions: 1892,
    clicks: 1323,
    spend: 572,
  },
  {
    platform: 'Google Ads Ad',
    campaign:
      'DBS_Paid-Social_Paved_G5_DE_Retargeting_Document_Contextual_Capture',
    impressions: 1102,
    clicks: 1992,
    spend: 1384,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'DBS_Prog-Display_DV360_NAMER_IR_Prospecting_Users With High Propensity To Buy Biz_Affinity_Digital Experience Platform',
    impressions: 877,
    clicks: 1585,
    spend: 1819,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DBS_Prog-Video_LinkedIn_APJ_UKIR_Retargeting Bundle_CompleteViewer-YT_Keyword_Capture_LLC',
    impressions: 1159,
    clicks: 1325,
    spend: 1762,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-Social_TTD_LATAM_INT_Prospecting_Small & Mid-size Enterprise Employees_Keyword_MOCA Cybersecurity',
    impressions: 1354,
    clicks: 948,
    spend: 1959,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Video_Quora_EMEA_NE_Nurturing_MediaProfesional_Customer-List_ALNALD_Group',
    impressions: 1902,
    clicks: 1296,
    spend: 1935,
  },
  {
    platform: 'Twitter Ad',
    campaign:
      'DS_Prog-Video_Bing_EMEA_NZ_Cross-sell_Business + Tech_Combination_Capture_PLC',
    impressions: 1759,
    clicks: 1228,
    spend: 1776,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DBX_Prog-Video_Bing_NAMER_DE_Competitor_Education_Affinity_Backup_Ltd',
    impressions: 1498,
    clicks: 887,
    spend: 1979,
  },
  {
    platform: 'Facebook Placement',
    campaign:
      'DS_Prog-Display_Youtube_GLOBAL_IR_Cross-sell_DocSend Core_Keyword_Backup',
    impressions: 1042,
    clicks: 1252,
    spend: 1204,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DS_Paid-SEM_Bing_NAMER_US_Prospecting_Biz Landing Page Visitor_Contextual_Backup_Group',
    impressions: 611,
    clicks: 657,
    spend: 994,
  },
  {
    platform: 'Facebook Ad',
    campaign:
      'HS_Prog-Display_Bidtellect_NAMER_US_Cross-sell_Pro Cart Abandoner_Customer-List_Backup',
    impressions: 638,
    clicks: 918,
    spend: 1487,
  },
  {
    platform: 'Google Ads Placement',
    campaign:
      'DBS_Paid-OLV_LinkedIn_LATAM_IR_Cross-sell_IT_Combination_Always-On_Ltd',
    impressions: 559,
    clicks: 1172,
    spend: 1358,
  },
];

export default campaigns;
