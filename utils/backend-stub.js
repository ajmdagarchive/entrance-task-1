import { generateData, generateDetails } from './generate-data';

const data = generateData();
const cache = {};

const initBackendStub = app => {
  app.get('/api/stations', (req, res) => {
    res.json(data);
  });

  app.get('/api/stations/:id', (req, res) => {
    const id = req.params.id;
    const info = data[id];
    const details = cache[id] || (cache[id] = generateDetails(info));

    res.json({ ...info, ...details });

    return {};
  });
};

export { initBackendStub };
