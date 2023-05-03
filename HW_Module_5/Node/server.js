import {app, PORT} from './app.js'

app.listen(PORT, (err) => {
  if (err) throw err

  console.log(`Server is running on http://localhost:${PORT}`)
})