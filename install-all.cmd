@echo off
echo ========================================
echo    INSTALLATION MINI E-COMMERCE
echo ========================================
echo.

echo [1/3] Installation des dependances backend...
cd backend
call npm install
if errorlevel 1 (
    echo ERREUR: Installation backend echouee
    pause
    exit /b 1
)
cd ..

echo.
echo [2/3] Installation des dependances frontend...
cd frontend
call npm install
if errorlevel 1 (
    echo ERREUR: Installation frontend echouee
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo    INSTALLATION TERMINEE AVEC SUCCES !
echo ========================================
echo.
echo Prochaines etapes:
echo 1. Demarrer MongoDB
echo 2. Demarrer le backend (start-backend.cmd)
echo 3. Demarrer le frontend (start-frontend.cmd)
echo.
pause