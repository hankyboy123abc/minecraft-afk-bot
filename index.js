const mineflayer = require('mineflayer');
const http = require('http');

// Create a dummy web server so Render knows your bot is alive
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP',        // Change to your server's IP address
  port: 25565,                   // Change if your server uses a different port
  username: 'YOUR_MICROSOFT_EMAIL', // Your official Minecraft email
  auth: 'microsoft'              // Securely connects to your Microsoft account
});

bot.on('spawn', () => {
  console.log('Successfully spawned in the server. Standing still to save hunger.');
});

// Automatically reconnects if the server restarts
bot.on('end', () => {
  console.log('Disconnected! Attempting to reconnect in 10 seconds...');
  setTimeout(() => process.exit(1), 10000);
});
