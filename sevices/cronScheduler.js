import cron from 'node-cron';
import twilioService from "./twilioService.js";

class CronScheduler {

    callUser = (user_phone_number) => {
        twilioService.createCall(user_phone_number)
    }

    createTaskScheduler() {
        let count = 0;
        const taskPriorityUpdater = cron.schedule('0 0 * * *', () => {
            console.log('called this day');
            count++;
            switch (count){
                case 0: {}
                case 1-2: {}
            }
            taskPriorityUpdater.stop()
        });
    }
}

const cronScheduler = new CronScheduler()

export default cronScheduler