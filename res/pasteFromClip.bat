@echo off
cd /d %~dp0
nircmd.exe clipboard saveimage "c:\temp\temp.png" 
curl https://sm.ms/api/upload/ -X POST -F "smfile=@c:\temp\temp.png"