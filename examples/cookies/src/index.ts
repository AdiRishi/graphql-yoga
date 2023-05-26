import { createServer } from 'node:http'
import { app } from './app'

const server = createServer(app)
server.listen(4000, () => {
  console.info(
    `Server is running on http://localhost:4000${app.graphqlEndpoint}`,
  )
})
