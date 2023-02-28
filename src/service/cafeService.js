import pool from '../config/database.js';
import { insertCafeInfoDao, findCafeInfo, findUserInfo} from '../dao/cafeDao.js';



export const insertCafeInfo = async(myName,myLat,myLng,myAddress,myNumber) => {
    const insertCafeInfoParams = [ 
        myName, 
        myLat, 
        myLng, 
        myAddress,
        myNumber];

    const connection = await pool.getConnection(async (conn) => conn);
    const CafeInfoResult = await insertCafeInfoDao(connection, 
        insertCafeInfoParams)
    connection.release();

    return CafeInfoResult;


}


export const findCafe = async(keyword) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const searchCafeRes = await findCafeInfo(connection, keyword);
    connection.release();

    return searchCafeRes;

}


export const findUser = async(username) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const searchUser = await findUserInfo(connection, username);
    connection.release();

    return searchUser ;

}