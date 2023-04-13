import bot from "./cache";
import { loadAll } from "./utils/util";
import { token } from "../config.json";

const setup = async () => {
    await loadAll();

    bot.login(token);
}

setup();