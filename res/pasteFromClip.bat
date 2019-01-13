@echo off
cd /d %~dp0
nircmd.exe clipboard saveimage "c:\windows\temp\smms-temp.png" 
curl https://sm.ms/api/upload/ -X POST -F "smfile=@c:\windows\temp\smms-temp.png"