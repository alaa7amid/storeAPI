const express = require('express')
const app = express()
const port = 3001;
const adminRouter = require('./src/app/router')

app.use(express.json())

const prisma = require('./prisma/prisamClint');

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {

})

process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect(); 
  process.exit(0)});

adminRouter(app)
