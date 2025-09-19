"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SingInPage = () => {
    const user = {
        email: "Tergel@gmail.com",
        password: "hell@1234",
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = () => {
        if (user.email === email && user.password === password) {
            toast.success("YOU ARE SIGNED IN!");
        } else {
            toast.error("Invalid credential!");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Input
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <div className="relative">
                            <Input
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
                        <Button onClick={handleSignin}>Sign in</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SingInPage;

