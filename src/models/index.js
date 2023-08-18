// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Estado = {
  "CDMX": "CDMX",
  "CHIHUAHUA": "Chihuahua",
  "COAHUILA": "Coahuila",
  "JALISCO": "Jalisco",
  "NUEVOLEON": "NUEVOLEON"
};

const { Cine, Institucion } = initSchema(schema);

export {
  Cine,
  Institucion,
  Estado
};