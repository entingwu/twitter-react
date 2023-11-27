import { useState, useEffect } from 'react';
import moment from 'moment';

import ImageCard from '@components/ImageCard';
import style from './index.module.scss';

const tweet = {
  id: 1,
  tweet_id: 1,
  user: {
    id: 2,
    username: 'EpikGaming',
    nickname: 'EpikGaming',
    avatar_url: 'https://cdnphoto.dantri.com.vn/VZ6VKrFghw_iB0V7gVy1c-ULqZY=/2021/12/10/angelababysina11-1639151879882.jpeg',
  },
  comments: [
    {
      id: 1,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'admin',
        nickname: null,
        avatar_url: null,
      },
      content: 'Test!',
      created_at: '2023-11-25T15:03:52.662052Z',
      likes_count: 0,
      has_liked: false,
    },
  ],
  created_at: '2023-11-18T07:38:01.699129Z',
  content: 'Id values are not mutable. Any id value in the body of your',
  likes: [],
  likes_count: 0,
  comments_count: 1,
  has_liked: false,
  photo_urls: [
    'https://www.thatsmags.com/image/view/201805/cover1.jpeg',
    'https://www.telegraph.co.uk/content/dam/fashion/OCT/Oct16/angelababy-lead2.jpg?imwidth=960',
    'https://wallpapercave.com/wp/wp3027815.jpg',
    'https://img.goodfon.com/original/1920x1200/5/6d/asian-beauty-angelababy.jpg',
  ],
};

/**
* Tweet Card
*/
const TweetCard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log('data', data);
    setData([]);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.avatarContainer}>
        <img src={tweet.user.avatar_url} alt="avatar" className={style.avatar} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.header}>
          <span className={style.nickname}>
            {tweet.user.nickname}
          </span>
          @
          <span className={style.username}>{tweet.user.username}</span>
          &nbsp;.&nbsp;
          {moment(tweet.created_at).format('MM min')}
        </div>
        <div className={style.content}>
          {tweet.content}
        </div>
        <div className={style.photo}>
          <ImageCard imgs={tweet.photo_urls} />
        </div>
        <div className={style.bar}>
          {}
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
