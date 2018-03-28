var rooty = require('rooty');
rooty('./dist');

import 'reflect-metadata'; // this shim is required
import {createKoaServer} from 'routing-controllers';
const { ApolloEngine } = require('apollo-engine');
var koaBody = require('koa-bodyparser');
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
var Router = require('koa-router');
var router = new Router();

import conf from './core/conf';
import UserCtrl from './ctrl/UserCtrl';
import schema from './core/prepareSchema';

// import Knex from 'knex';
const Knex = require('knex');

// console.log(conf);
const { Model } = require('objection');
// import { Model } from 'objection';
// Initialize knex.
const knex = Knex(conf.knex);

/*knex.select().from('persons')
.then((res) => {
  console.log('res', res);
})*/

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

// creates koa app, registers all controller routes and returns you express app instance
const app = createKoaServer({
   controllers: [UserCtrl]
});

const engine = new ApolloEngine({
  apiKey: "service:pavlovt-tst:x0z0YlR7z-9o91ioRd29Fg",
  logging: {
    level: "DEBUG" // Engine Proxy logging level. DEBUG, INFO (default), WARN or ERROR.
  }
});

app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());

engine.listen({
  port: 3000,
  koaApp: app,
});