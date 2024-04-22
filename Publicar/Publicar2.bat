SET ORIGEN=C:\Desarrollo\Android\Proyectos\Herramientas\www
SET DESTINOTEMPORAL=/home/pi/Herramientas
SET DESTINO=/var/www/html/Herramientas
SET SERVIDOR=192.168.1.129
SET USUARIO=pi
SET PWD=delfines

pscp -pw %PWD% -r %ORIGEN%\*.* %USUARIO%@%SERVIDOR%:%DESTINOTEMPORAL%

ssh %USUARIO%@%SERVIDOR% -t sudo cp -r %DESTINOTEMPORAL%/* %DESTINO% 
