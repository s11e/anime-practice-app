module.exports = (sequelize,DataTypes) =>{
    const animeTable = sequelize.define('Anime',{
        id:{
         type:DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true   
        },
        name:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        rating: {
            type:DataTypes.FLOAT,
            allowNUll:false
        },
        poster:{
            type:DataTypes.TEXT,
            allowNUll:false
        }
    },{
       timestamps:true,
        freezeTableName:true,
        underscored:true,
        schema:'public'
    })
    return animeTable;
}