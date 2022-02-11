import fileRouter from './files.router.js'
export default function routerApi (app) {
  app.use('/files', fileRouter)
}
