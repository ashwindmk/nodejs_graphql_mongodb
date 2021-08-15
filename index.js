const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    // Connect MongoDB
    await mongoose.connect('mongodb://root:ashwin123@localhost:27017/postdb', { 
        authSource: 'admin', 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false }
    );
    console.log('Mongoose connected');

    // Apollo server must start before express
    await apolloServer.start();

    // This will handle the route: /graphql
    apolloServer.applyMiddleware({ app: app, path: '/graphql' });

    // All other routes will be handled by express
    app.use((req, res) => {
        res.send("Hello from express");
    });

    const PORT = 4000;
    app.listen(PORT, () => console.log('Server is running on port ' + PORT));
}
startServer();
