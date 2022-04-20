module.exports = (sequelize, DataTypes) => {
    const CanPersonal = sequelize.define("CanPersonal", {

        canName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // dor: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        // },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // fresherExp: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        marStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // spouseName: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // fatherName: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        bloodGroup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telNum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobNum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // nomineeName: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // nomineeRelation: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        presentAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        permanentAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
   
    },{
        freezeTableName: true
      })

    return CanPersonal;
}