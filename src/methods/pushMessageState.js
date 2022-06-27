import emitter from './emitter';

export default function pushMessage(res, title = '更新') {
  if (!res.data.success) {
    // Message will always be array foramt
    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message;
    emitter.emit('pushMessages', {
      status: 'failed',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  } else {
    emitter.emit('pushMessages', {
      status: 'success',
      title: `${title}成功`,
    });
  }
}
