const ADMIN =require('./4_models/admin_model')
const USER=require('./4_models/users_model')
const RESCURE=require('./4_models/rescurs_model')
const APPLICATION=require('./4_models/applications_model')
const SOS=require('./4_models/sos_model')
const CASES=require('./4_models/cases_model')
const SUPPORT=require('./4_models/support_model')


USER.hasOne(ADMIN)
ADMIN.belongsTo(USER)

USER.hasOne(RESCURE)
RESCURE.belongsTo(USER)

ADMIN.hasMany(APPLICATION)
APPLICATION.belongsTo(ADMIN)

ADMIN.hasMany(CASES)
CASES.belongsTo(ADMIN)

RESCURE.hasOne(APPLICATION)
APPLICATION.belongsTo(RESCURE)

SOS.hasOne(CASES)
CASES.belongsTo(SOS)

SUPPORT.hasMany(RESCURE)
RESCURE.belongsTo(SUPPORT)

CASES.hasMany(SUPPORT)
SUPPORT.belongsTo(CASES)