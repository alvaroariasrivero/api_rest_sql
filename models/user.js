const {Model, DataTypes} = require('sequelize');

const User = Model

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
    type: DataTypes.STRING,
    allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logged: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: 'user',
    timestamps: false
})

// const username = 'darthvader'
// const email = 'darthvader@gmail.com'
// const password = '123456'
// const logged = false

// async function register(){
//     let data;
//     try {
//         data = await User.create({ username, email, password, logged });
//         console.log(data)
//     } catch (error) {
//         console.log('Error:', error);
//     }    
// }

// register()

