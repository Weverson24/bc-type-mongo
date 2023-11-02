import mongoose from 'mongoose';
import config from 'config'
import logger from '../config/logger';

async function connect() {

    const dbUri = config.get<string>("dbUri");

    try {

        await mongoose.connect(dbUri);
        logger.info("Conectou ao banco de dados!")

    } catch (e) {
        logger.error("Não foi possível connectar!")
        logger.error(`erro: ${e}`)
        process.exit(1)
    }

}

export default connect;