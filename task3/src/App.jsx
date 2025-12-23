import Card from "./components/Card";

const App = () => {
  const users = [
  {
    followed: "follow",
    id: 1,
    coverImage: "https://picsum.photos/800/300?random=1",
    profile: "https://i.pravatar.cc/150?img=1",
    fullname: "Aarav Sharma",
    description: "Frontend developer who loves building clean UI.",
    likecount: 12+"K",
    postcount: 45,
    viewscount: 18.20+"K",
  },
  {
    followed: "follow",
    id: 2,
    coverImage: "https://picsum.photos/800/300?random=2",
    profile: "https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg",
    fullname: "Priya Verma",
    description: "Content creator & travel blogger also in socialmedia.",
    likecount: 980,
    postcount: 38,
    viewscount: 15.64+"K",
  },
  {
    followed: "unfollow",
    id: 3,
    coverImage: "https://picsum.photos/800/300?random=3",
    profile: "https://i.pravatar.cc/150?img=3",
    fullname: "Rohan Mehta",
    description: "Full stack developer | MERN-stack 2 years experience",
    likecount: 21+"K",
    postcount: 62,
    viewscount: 25.40+"K",
  },
  {
    followed: "unfollow",
    id: 4,
    coverImage: "https://picsum.photos/800/300?random=4",
    profile: "https://i.pravatar.cc/150?img=5",
    fullname: "Sneha Kapoor",
    description: "UI/UX designer with a passion for minimal design.",
    likecount: 16.5+"K",
    postcount: 51,
    viewscount: 19.87+"K",
  },
  {
    followed: "follow",
    id: 5,
    coverImage: "https://picsum.photos/800/300?random=5",
    profile: "https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
    fullname: "Kunal Singh",
    description: "Hello i am Fitness coach & lifestyle influencer.",
    likecount: 32+"K",
    postcount: 74,
    viewscount: 40.21+"k",
  },
  {
    followed: "follow",
    id: 6,
    coverImage: "https://picsum.photos/800/300?random=6",
    profile: "https://i.pinimg.com/736x/67/07/55/670755ef09198a9860b524fafd6eb730.jpg",
    fullname: "Ananya Joshi",
    description: "Digital artist & illustrator 3 Years experience.",
    likecount: 18.5+"K",
    postcount: 59,
    viewscount: 22.34+"K",
  },
  {
    followed: "follow",
    id: 7,
    coverImage: "https://picsum.photos/800/300?random=7",
    profile: "https://i.pravatar.cc/150?img=7",
    fullname: "Vikram Patel",
    description: "Hello friand i am Tech reviewer and gadget geek.",
    likecount: 2750,
    postcount: 66,
    viewscount: 31.89+"K",
  },
  {
    followed: "unfollow",
    id: 8,
    coverImage: "https://picsum.photos/800/300?random=8",
    profile: "https://i.pravatar.cc/150?img=9",
    fullname: "Neha Malhotra",
    description: "Marketing strategist & brand consultant.",
    likecount: 1430,
    postcount: 42,
    viewscount: 17.65+"K",
  },
  {
    followed: "unfollow",
    id: 9,
    coverImage: "https://picsum.photos/800/300?random=9",
    profile: "https://i.pravatar.cc/150?img=8",
    fullname: "Arjun Rao",
    description: "Photographer capturing different places urban life.",
    likecount: 3900,
    postcount: 88,
    viewscount: 45.98+"K",
  },
];
  return (
    <div className="main bg-[#333] flex items-center flex-wrap justify-evenly gap-10 p-30 min-h-screen w-full">
      {users.map(function(elem){
        return <Card info={elem} key={elem.id}/>
      })}
    </div>
  )
}

export default App
