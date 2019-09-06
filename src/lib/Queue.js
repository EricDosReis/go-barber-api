import BeeQueue from 'bee-queue';

import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        beeQueue: new BeeQueue(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, data) {
    return this.queues[queue].beeQueue.createJob(data).save();
  }

  processQueue() {
    jobs.forEach((job) => {
      const { beeQueue, handle } = this.queues[job.key];

      beeQueue
        .on('failed', this.handleFailure)
        .process(handle);
    });
  }

  handleFailure(job, error) {
    console.error(`Queue ${job.queue.name}: FAILED`, error);
  }
}

export default new Queue();
