const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('X-Emulator-Type', 'SmartGaGa-Lightweight-Bypass');
    res.setHeader('X-Bluestacks-Connection', 'Redirected');
    next();
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Cloud SmartGaGa / BlueStacks Bypass</title>
            <style>
                body { background-color: #121212; color: #00ffcc; font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
                .container { background: #1e1e1e; padding: 20px; border-radius: 10px; display: inline-block; }
                h1 { font-size: 24px; }
                .status { color: #00ff00; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Cloud Emulator Bypass Active</h1>
                <p>Status: <span class="status">Connected (SmartGaGa Mode)</span></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
