  // "use client";
  
  // import { useContext, useEffect, useState } from "react";
  // import { UserContext } from "./providers/UserProvider";
  // import { redirect } from "next/navigation";
  // import { Navbar } from "./components/Navbar";
  // import { MessageCircle, ThumbsDown, ThumbsUp, Verified } from "lucide-react";
  
  // type Post = {
  //   _id: string;
  //   imageUrl: string;
  //   createdAt: string;
  //   description: string;
  // };
  
  // export default function Home() {
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   const { user, setToken, loading } = useContext(UserContext);
  
  //   useEffect(() => {
  //     fetch("http://localhost:5500/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   }, []);
  
  //   if (loading) {
  //     return <>Loading....</>;
  //   }
  
  //   if (!user) {
  //     return redirect("/signin");
  //   }
  
  //   return (
  //     <div>
  //       <Navbar />
  
  //       <div className="w-[600px] flex flex-col content-evenly gap-4 mx-auto">
  //         {posts.map((post) => (
  //           <div key={post._id} className="mb-4 border-b py-4">
  //             <div className="flex gap-4 items-center">
  //               {user.username}
  //               <Verified />
  //               <div>
  //                 {new Date(post.createdAt).toLocaleString()}
  //               </div>
  //             </div>
  
  //             <img src={post.imageUrl} alt="" className="w-full rounded-lg my-2" />
  
  //             <p className="mb-2">{post.description}</p>
  
  //             <div className="flex flex-row gap-4">
  //               <button><MessageCircle /></button>
  //               <button><ThumbsUp /></button>
  //               <button><ThumbsDown /></button>
  //             </div>
  //             <input className="flex flex-col gap-4" type="" placeholder="add text" />
  //           </div>
  //         ))}
  //       </div>
  //       </div>
  //   );
  // }