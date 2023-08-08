import { sigServer } from '@libp2p/webrtc-star-signalling-server'

// Set up the server config
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 4000

async function main () {
  const server = await sigServer({
    port: PORT,
    host: HOST,
    metrics: false
  })
}

main()

// on SIGINT signal and SIGTERM signal, stop the node
process.on('SIGINT', async () => {
  await server.stop()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await server.stop()
  process.exit(0)
})
