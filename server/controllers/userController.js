const apiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/model");
const jwt = require('jsonwebtoken')
function generateJWT(id,email,role){
    return  jwt.sign(
        {id,email,role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
        )
}
  //Функция генерации JWT токена
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    //Вытягивание из тела запроса
   
    if (!email || !password) {
      return next(
        apiError.badRequest("Некорректный логин или пароль")
      );
    }
    //Корректность данных
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(
        apiError.badRequest("Данный email зарегистрирован" )
      );
    }
    //Обработка пользователя по email
    const hashPassword = await bcrypt.hash(password, 5);
    //Хеширование пароля
    const user = await User.create({email,role,password:hashPassword})
    //Создание пользователя
    const basket = await Basket.create({userId:user.id})
    //Создание корзины пользователя
    const token = generateJWT(user.id,user.email,user.role) 
    //Создание токена
        return res.json({token})
  }

  //Метод регистрации пользователя
  async login(req, res,next) {
    const {email,password} = req.body
    const user = await User.findOne({where:{email}})
    if(!user){
      return next(
            apiError.internal('email не найден')
        )
    }
    let comparePassword = bcrypt.compareSync(password,user.password)
    if(!comparePassword){
        return next(
            apiError.internal('Неправильный пароль')
        )
    }
    const token = generateJWT(user.id,user.email,user.role) 
    res.json({token})

  }
  //Метод логинизации пользователя
  async check(req, res, next) {
   const token = generateJWT(req.user.id,req.user.email,req.user.role)
   return res.json({token})
  }
}

module.exports = new UserController();
