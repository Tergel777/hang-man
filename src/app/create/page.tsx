"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useUser } from "../providers/UserProvider";
import axios from "axios";

const Page = () => {
    const [prompt, setPrompt] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();
    const { token } = useUser();

    const handleSubmit = async () => {
        // const response = await fetch("http://localhost:5500/posts", {
        //   method: "POST",
        // body: JSON.stringify({ imageUrl: prompt, description }),
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     Authorization: "Bearer " + token,
        //   },
        // });
        // const data = await response.json();
        // if (response.status !== 200) {
        //   toast.error(data.message);
        //   return;
        // }

        const response = await axios.post(
            "http://localhost:5500/posts",
            { imageUrl: prompt, description },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );

        console.log(response);

        toast.success("Post created successfully!");
        router.push("/");
    };

    return (
        <div className="w-[600px] mx-auto">
            <div className="h-11 flex justify-between items-center border-b">
                <Link href={"/"}>
                    <ChevronLeft size={24} />
                </Link>
                <div className="font-bold">New post</div>
                <Button onClick={handleSubmit} className="font-bold text-blue-400" variant={"ghost"}>
                    Share
                </Button>
            </div>
            <div className="py-4 flex flex-col gap-4">
                <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Image url..." />
                {/* <Button onClick={generateImage}>Gen image</Button> */}
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description..." />
            </div>
        </div>
    );
};

export default Page;