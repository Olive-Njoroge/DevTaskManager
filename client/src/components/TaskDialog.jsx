import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {useState} from 'react';

export default function TaskDialog({onSubmit}){
    const [title, setTiltle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        onSubmit({title, description});
        setTiltle("");
        setDescription("");
    };

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Task</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Task</DialogTitle>
                </DialogHeader>

                <Input placeholder="Title" value={title} onChange={e => setTiltle(e.target.value)}/>
                <Textarea placeholder="Description" value={description} className="mt-2" onChange={e => setDescription(e.target.value)}/>

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}