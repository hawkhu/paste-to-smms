@echo off
cd /d %~dp0
nircmd.exe clipboard saveimage "smms-temp.png" 
curl https://sm.ms/api/upload/ -X POST -F "smfile=@smms-temp.png"