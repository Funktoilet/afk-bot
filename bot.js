const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'goodboy4.aternos.me',
    port: 32651,
    username: 'AFK_Bot',
    version: '1.21.11',
    checkTimeoutInterval: 60000,
    hideErrors: false,
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log('Bot joined!')

    // Move randomly every 20 seconds
    setInterval(() => {
      bot.setControlState('forward', true)

      setTimeout(() => {
        bot.setControlState('forward', false)
        bot.setControlState('jump', true)

        setTimeout(() => {
          bot.setControlState('jump', false)
        }, 500)

      }, 2000)

    }, 20000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 5 seconds...')
    setTimeout(createBot, 5000)
  })
}

createBot()
