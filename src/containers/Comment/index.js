import { Steps, TextArea } from 'antd-mobile';
import { useState, useEffect } from 'react';
import { useAppContext } from '@utils/context';
import moment from 'moment';
import style from './index.module.scss';

const { Step } = Steps;
// default data
const defaultTweet = {
  id: 1, // 推文id
  user: {
    id: 2, // 发送该推文的用户id
    username: 'EpikGaming', // 发送该推文的用户名
    nickname: 'EpikGamingT3', // 发送该推文的用户昵称
    avatar_url: 'https://www.thatsmags.com/image/view/201805/cover1.jpeg', // 发送该推文的用户头像地址
  }, // 发送该推文的用户信息
  comments: [
    {
      id: 1, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: null, // 发送该评论的用户昵称
        avatar_url: 'https://wallpapercave.com/wp/wp3027815.jpg', // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2023-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 0, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
  ], // 该推文的评论集
  created_at: '2023-12-18T07:38:01.699129Z', // 该推文的创建时间
  content: 'This is a test', // 该推文的文本内容
  likes: [], // 哪些用户点赞了这条推文
  likes_count: 0, // 该推文的点赞数
  comments_count: 1, // 该推文的评论数
  has_liked: false, // 当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  photo_urls: [], // 该推文的图片地址集
};
/**
 * Comment Function
 */
const Comment = () => {
  const [data, setData] = useState(defaultTweet);
  const [store] = useAppContext();
  useEffect(() => {
    console.log('data', data);
    setData(defaultTweet);
  }, []);
  return (
    <div className={style.container}>
      <Steps direction="vertical">
        <Step
          icon={<img className={style.icon} src={data.user.avatar_url} alt="" />}
          title={(
            <div className={style.stepContent}>
              <div className={style.header}>
                <span className={style.nickname}>{data.user.nickname}</span>
                @
                <span className={style.username}>
                  {data.user.username}
                  &nbsp;·&nbsp;
                  {moment(data.created_at).format('MM/DD')}
                </span>
              </div>
              <div className={style.content}>
                {data.content}
              </div>
              <div className={style.recommit}>
                Reply
                <scan className={style.commitName}>
                  @
                  {data.user.username}
                </scan>
              </div>
            </div>
          )}
        />
        <Step
          icon={
            <img className={style.icon} src={store.user?.avatar_url} alt="" />
          }
          title={(
            <div>
              <TextArea className={style.text} placeholder="post your reply" />
            </div>
          )}
          description={<div>这里是一些描述</div>}
        />
      </Steps>
    </div>
  );
};

export default Comment;
