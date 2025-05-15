import { useState } from 'react';
import { feedPost } from '../Data/Index';
import { Icon } from '@iconify/react';

export default function Content() {
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id) => {
    setBookmarkedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-[450px] mx-auto font-roboto">
      {feedPost.map((post) => (
        <div
          key={post.id}
          className="mb-3 border-b border-neutral-600 pb-3 mx-5 md:mx-0"
        >
          <div className="flex justify-between items-center mx-5 md:mx-0">
            {/* info div */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-tr from-orange-500 via-red-500 to-purple-600 p-[2px] rounded-full">
                <div className="bg-black p-[2px] rounded-full">
                  <img
                    src={post.img}
                    className="rounded-full w-10 h-10 object-cover cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm">
                <h5 className="font-bold text-md">{post.username}</h5>
                <p className="tracking-tighter text-[12px] font-medium">
                  {post.audio}
                </p>
              </div>
              <div className="text-[10px] mb-4 text-neutral-400 font-bold">
                <p>• {post.time}</p>
              </div>
            </div>

            <div className="cursor-pointer">{post.icon}</div>
          </div>

          {/* Video */}
          <div className="my-3 mx-5 md:mx-0">
            <video
              autoPlay
              loop
              controls
              muted
              src={post.video}
              className="w-full border px-10 border-neutral-700 rounded-md cursor-pointer"
            />
          </div>

          <div className="flex justify-between mx-5 md:mx-0">
            <div className="flex space-x-2 items-center px-2">
              {/* Like Button */}
              <div className="flex justify-between">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="text-2xl cursor-pointer"
                >
                  <Icon
                    icon={
                      likedPosts[post.id]
                        ? 'gravity-ui:heart-fill'
                        : 'gravity-ui:heart'
                    }
                    className={likedPosts[post.id] ? 'text-red-500' : ''}
                  />
                </button>
              </div>
              <Icon
                icon="mage:message-round"
                className="text-2xl cursor-pointer"
              />
              <Icon
                icon="hugeicons:telegram"
                className="text-2xl cursor-pointer"
              />
            </div>
            <div>
              <button
                onClick={() => toggleBookmark(post.id)}
                className="text-2xl cursor-pointer"
              >
                <Icon
                  icon={
                    bookmarkedPosts[post.id]
                      ? 'material-symbols:bookmark-outline'
                      : 'material-symbols:bookmark'
                  }
                />
              </button>
            </div>
          </div>

          <div className="px-2 text-sm font-bold flex space-x-1 py-1 mx-5 md:mx-0">
            <h1>{post.likes}</h1>
            <p>likes</p>
          </div>

          <div className=" text-sm px-2 mx-5 md:mx-0">
            <h1 className="space-x-2">
              <span className="font-bold cursor-pointer">{post.username}</span>
              <span className="text-[12px]">{post.caption}</span>
            </h1>
          </div>

          <div className="text-neutral-500 text-[12px] tracking-tight space-y-1 font-medium px-2 cursor-pointer mx-5 md:mx-0">
            <p>...more</p>
            <p>View all 30 comments</p>
            <p className="flex justify-between">
              <span>Add a comment...</span> <span>😊</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
