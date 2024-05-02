Name:
-----
IBM Tivoli Netcool Omnibus Performance Health Check Evaluation Portal.


Description:
------------
This Web Portal identifies the Key Performance Indicators(KPIs) of existing IBM Tivoli Netcool Omnibus deployment, validates the KPI values with the reference baseline values recommended by IBM and generates a Performance Health Check Report.


Usage:
------
To Generate the Performance Health Check Report for IBM Tivoli Netcool Omnibus, Obtain the KPI's from the existing installation of Omnibus by using the script: get_nco_metrics.pl and upload the output file (generated in the json format) by using the upload option available on the web portal and click the Submit button.

There is an alternate option to manually enter the values of KPI's obtained from the existing Omnibus Installation and then click on the submit button to generate the Performance Health Check Report.

Refer to the Section "Procedure to run the get_nco_metrics.pl script" for more details.


Dependencies:
-------------
For obtaining the Netcool Omnibus Performance KPI's, the get_nco_metrics.pl script needs to be executed. It needs 4 input arguments.

1. PATH of Netcool Home directory $NCHOME, The Default path of Netcool Home directory is /opt/IBM/tivoli/netcool
2. Name of the ObjectServer, Default value of ObjectServer is NCOMS
3. ObjectServer SQL UserName, Default username is root
4. ObjectServer SQL User Password to be entered as Terminal Input after prompting for it. 


Procedure to Run the get_nco_metrics.pl Script:
--------------------------------------------------
Run the script "get_nco_metrics.pl" for obtaining the Key Performance Indicators(KPIs) from the existing installation of IBM Tivoli Netcool Omnibus.
1. Download the "get_nco_metrics.pl" script from the location: https://github.com/ArchanaDNaik/Demo

2. Create a new directory (Ex: mkdir /tmp/nco_kpis)
3. Copy the "get_nco_metrics.pl" script to the newly created directory /tmp/nco_kpis.
4. Run the commands given below:
   cd /tmp/nco_kpis
   perl get_nco_metrics.pl <$NCHOME> <ObjectServer Name> <ObjectServer SQL UserName>.
   The Script prompts for ObjectServer SQL User Password, Type the password on the tty.  
5. The output file nco_kpi.out is generated in the same directory /tmp/nco_kpis.
6. Get the nco_kpi.out file from the server where it was generated and upload it on the Netcool Omnibus Health Check Portal to validate & generate the Tivoli Netcool Omnibus Performance Health Check Report.
7. Once the Report is generated, It can be downloaded in the pdf format to the local pc.


Limitations:
------------
1. The Script get_nco_metrics.pl retrieves the Performance KPI's only from the Linux based installation of IBM Tivoli Netcool Omnibus.
2. Perl is required to run the script get_nco_metrics.pl. Perl should be pre-installed on the server where the script get_nco_metrics.pl is executed.


Scripts Download Location:
--------------------------
https://github.com/ArchanaDNaik/Demo

REVISION HISTORY:
-----------------
REVISION 1 :
Date: 15-April-2024, Initial release.


CONTACT:
--------
Author: Karthikeyan P, karpandr@in.ibm.com

