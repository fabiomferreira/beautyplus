import * as express from 'express';
import db, { serviceSchema } from '../database';

const router: express.Router = express.Router();

const ServiceModel = db.model('Service', serviceSchema);

router.post('/', (request: express.Request, response: express.Response) => {
  const { name } = request.body;
  if (!name) {
    const error = { errorMessage: 'O parâmetro name é obrigatório', status: 302 };
    response.send(error).status(302)
    return;
  }
  const service = new ServiceModel({ name });
  service.save((error, newService) => {

    if (error) {
      const errorResponse = { errorMessage: 'Erro ao salvar serviço', status: 500, errorDetails: error };
      response.send(errorResponse).status(500)
      return;
    }
    response.send({ successMessage: `O serviço ${newService.name} foi salvo com sucesso!`, data: newService });
  })
});

export default router;