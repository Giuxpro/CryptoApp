import Parse from 'parse/node'; 

const UserModel = Parse.Object.extend('User');
module.exports = UserModel;

const schema = new Parse.Schema('User');

schema.removeUnique('username');

schema.addUnique('email');

schema.save().then(() => {
    console.log('Se ha actualizado el esquema correctamente');
}).catch((error:any) => {
    console.error('Error al actualizar el esquema:', error);
});