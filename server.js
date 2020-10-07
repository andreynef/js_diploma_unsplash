global.fetch= require('node-fetch');
const config=require('universal-config');
const Unsplash=require('unsplash-js').default;
const toJson=require('unsplash-js').toJson;
const express=require('express');

const unsplash = new Unsplash({
  applicationID: config.get('APPLICATION_ID'),// accesskey из настроек вашего приложения
  secret: config.get('SECRET'),// Application Secret из настроек вашего приложения
  callbackUrl: config.get('CALLBACK_URL'),// Полный адрес страницы авторизации приложения (Redirect URI).
});

const app = express();

app.get('api/photos', (req,res)=>{
  unsplash.photos.listPhotos(1,30)
    .then(toJson)
    .then(json=>res.json(json))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))