"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { redirect, useRouter } from "next/navigation";

const SignUpPage = () => {
    const { user, setToken } = useContext(UserContext);
    const router = useRouter();
    const [passwordShown, setPasswordShown] = useState(false);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    if (user) {
        return redirect("/signin");
    }

    const handlePassword = async () => {
        const response = await fetch("http://localhost:5500/signup", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ credential, password, fullname, username }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success(data.message);
            setToken(data.body);
            redirect("/signin");
        } else {
            toast.error(data.message);
        }
    };
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col bg-black">
            <div className="text-white w-screen flex justify-center text-3xl">
                Sign Up
            </div>
            <CardContent>
                <div className="flex flex-col gap-4 pt-10">
                    <Input
                        className="text-white"
                        placeholder="Enter your email..."
                        value={credential}
                        onChange={(e) => {
                            setCredential(e.target.value);
                        }}
                    />
                    <div className="relative">
                        <Input
                            className="text-white"
                            placeholder="Password..."
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type={passwordShown ? "text" : "password"}
                        />
                        <Button
                            onClick={() => {
                                setPasswordShown(!passwordShown);
                            }}
                            variant="ghost"
                            className="absolute right-0 top-0"
                        >
                            {passwordShown ? <Eye /> : <EyeClosed />}
                        </Button>
                    </div>
                    <Input
                        className="text-white"
                        placeholder="Enter your fullname..."
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                    />
                    <Input
                        className="text-white"
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <Button className="bg-white text-black" onClick={handlePassword}>
                        Submit
                    </Button>
                    <Button
                        onClick={() => redirect("/signin")}
                        className="flex justify-center w-full text-black bg-white mt-4  "
                    >signin
                    </Button>
                </div>
            </CardContent>
        </div>
    );
};
export default SignUpPage;