@echo off
cd /d %~dp0
nircmd.exe clipboard saveimage "smms-temp.png" 
curl %1 %2 https://sm.ms/api/upload/ -X POST -F "smfile=@smms-temp.png"