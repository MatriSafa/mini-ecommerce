@echo off
echo ========================================
echo    DEMARRAGE COMPLET MINI E-COMMERCE
echo ========================================
echo.

echo [1/2] Demarrage du backend...
start "Backend" cmd /k "cd /d %~dp0backend && node server.js"
timeout /t 5 /nobreak > nul

echo [2/2] Demarrage du frontend...
start "Frontend" cmd /k "cd /d %~dp0frontend && npx react-scripts start"
timeout /t 5 /nobreak > nul

echo.
echo ========================================
echo    ? PRET A UTILISER !
echo ========================================
echo.
echo ?? Frontend: http://localhost:3000
echo ??  Backend:  http://localhost:5000
echo.
echo Patientez quelques secondes que tout demarre...
echo.
pause