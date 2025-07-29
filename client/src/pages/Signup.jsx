import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import API from '../services/api'

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if(!email || !password) return alert("All fields required");
        setLoading(true);
        try{
            const res = await API.post("/auth/signup", {email, password});
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        }catch(err){
            alert(err.response?.data?.message || "Signup Failed");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-zinc">
            <Card className="w-full max-w-md shadow-xl animate-fade">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Sign Up</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSignup} disabled={loading} className="w-full">
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}