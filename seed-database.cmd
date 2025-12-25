@echo off
echo ========================================
echo    PEUPLEMENT DE LA BASE DE DONNEES
echo ========================================
echo.

cd backend
node seed.js

if errorlevel 1 (
    echo ERREUR: Impossible de peupler la base
    echo Verifiez que MongoDB est demarre
) else (
    echo.
    echo SUCCES: Base de donnees peuplee !
)

pause