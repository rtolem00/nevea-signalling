import { sigServer } from '@libp2p/webrtc-star-signalling-server'

// Set up the server config
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4000

async function main () {
  console.log(`Starting server on ${HOST}:${PORT}`)
  const server = await sigServer({
    port: PORT,
    host: HOST,
    metrics: false
  })
}

main().then(() => {
  console.log('Server started successfully')
}).catch((err) => {
  console.error('Server failed to start:', err)
  process.exit(1)
})

// on SIGINT signal and SIGTERM signal, stop the node
process.on('SIGINT', async () => {
  await server.stop()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await server.stop()
  process.exit(0)
})
