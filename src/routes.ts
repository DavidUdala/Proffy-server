import express, { Request, Response, request, response } from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();


routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/Connections', connectionsController.create);
routes.get('/Connections', connectionsController.index)

export default routes;