import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import API from '../services/api';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if(!email || !password) return alert("All fields required");
        setLoading(true);
        try{
            const res = await API.post("/auth/login", {email, password});
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        }catch(err){
            alert(err.response?.data?.message || "Login Failed");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc">
            <Card className="w-full max-w-md shadow-xl animate-fade">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Log In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleLogin} disabled={loading} className="w-full">
                        {loading ? "Loggin in..." : "Log in"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}