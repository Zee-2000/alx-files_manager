import redisClient from '../utils/redis'
import dbClient from '../utils/db'

class AppController
{
    static getStatus(request, response)
    {
        response.status(200).json({redis : redisClient.isAlive(), db : dbClient.isAlive()})
    }
    static async getStats(response, request)
    {
        const userNum  = dbClient.nbUsers()
        const fileNum = db.dbClient.nbFiles()
        response.status(200).json({users : userNum, files : fileNum})
    }
}