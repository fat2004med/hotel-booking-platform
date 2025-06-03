const express=require('express');
const {protect}=require('../middleware/authMiddleware.js');
const {getUserData,storeRecentSearchedCities}=require('../controllers/userController.js');
const userRouter=express.Router();
userRouter.get('/', protect ,getUserData);
userRouter.post('/store-recent-search',storeRecentSearchedCities);
module.exports = {userRouter};